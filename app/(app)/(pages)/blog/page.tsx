"use client";
import { FunctionComponent } from "react";
import FrameComponent2 from "./components/FrameComponent2";
import FrameComponent1 from "./components/FrameComponent1";
import FrameComponent from "./components/FrameComponent";
import Height from "./components/Height";
import DirectedGraph from "./components/DirectedGraph";
import ErrorHandler from "./components/ErrorHandler";
import MinHeap from "./components/MinHeap";
import Link from "next/link";
import FrameComponent11 from "../../components/FrameComponent1";
import { useCalculateFontSize } from "../../hooks/use-calculate-font-size";

const SingleBlogPostV2Approved: FunctionComponent = () => {
  const fontSize = useCalculateFontSize();
  //absolute h-full  z-[2] w-full left-0 top-0 inset-0 bg-gradient-to-t from-black to-transparent
  return (
    <div>
      <div className="relative">
        <div className="absolute h-full  z-[2] w-full left-0 top-0 inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <img
          className="w-full object-cover aspect-square  max-w-full brightness-75 aspect-[1920/700]"
          alt=""
          src="/rectangle-245@2x.png"
        />

        <div className="absolute flex flex-col  bottom-0 px-6 md:px-20 mb-8 text-white z-[4]">
          <div>
            <button
              style={{
                fontSize: fontSize(13, 4, 1920, 400),
              }}
              className="bg-darkslateblue  rounded-[4.26px] text-white p-2"
            >
              Category
            </button>
          </div>

          <div className="flex flex-col gap-y-1">
            <div>
              <h1
                style={{
                  fontSize: fontSize(64, 18, 1920, 400),
                }}
                className="font-libre-baskerville text-[15px] sm:text-5xl font-bold"
              >
                Lorem ipsum dolor sit amet
              </h1>
            </div>
            <div className=" flex gap-x-1 items-center">
              <img
                className="w-[11.9px] h-[11.9px] text-white"
                alt=""
                src="/calender.svg"
              />
              <p
                className="text-xs"
                style={{
                  fontSize: fontSize(16, 5, 1920, 400),
                }}
              >
                12 March, 2024
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 md:px-20">
        <div className="flex gap-20 mb-7">
          <div className="flex-[7] md:col-span-5 ">
            <div className=" flex flex-col mt-10 gap-y-5">
              <div>
                <button
                  style={{
                    fontSize: fontSize(13, 4, 1920, 400),
                  }}
                  className="bg-darkslateblue  rounded-[4.26px] text-white p-2 mq900:hidden"
                >
                  Category
                </button>
              </div>
              <div className="flex flex-col gap-y-1 mq900:hidden">
                <div>
                  <h1
                    style={{
                      fontSize: fontSize(64, 18, 1920, 400),
                    }}
                    className="font-libre-baskerville text-[15px] sm:text-5xl font-bold"
                  >
                    Lorem ipsum dolor sit amet
                  </h1>
                </div>
                <div className=" flex gap-x-1 items-center">
                  <img
                    className="w-[11.9px] h-[11.9px] text-white"
                    alt=""
                    src="/calendar-1.svg"
                  />
                  <p
                    className="text-xs"
                    style={{
                      fontSize: fontSize(16, 5, 1920, 400),
                    }}
                  >
                    12 March, 2024
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-y-5 font-red-hat-text mb-5 md:text-13xl">
                <p
                  style={{
                    fontSize: fontSize(32, 14, 1920, 400),
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore maxime alias odio? Aliquid quis nisi vel
                  necessitatibus, quam sed vero, qui nobis, praesentium
                  voluptatem quidem laudantium fuga tenetur! Velit, ipsa
                  dolorem? Maiores dignissimos quod debitis facilis sed beatae
                  commodi obcaecati eaque molestiae voluptates! Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Cupiditate quis
                  eveniet tempore veritatis atque quo reiciendis facilis eius
                  minima unde harum quas autem soluta vel, cumque at aliquam
                  sequi possimus. Ducimus deleniti, dicta quos architecto
                  dignissimos fugit saepe vero voluptas cum praesentium optio
                  quidem asperiores nihil. Saepe!
                </p>
                <h2
                  style={{
                    fontSize: fontSize(48, 14, 1920, 400),
                  }}
                  className=" text-3xl font-semibold text-[#343434] md:text-13xl"
                >
                  Lorem ipsum dolor sit
                </h2>
                <p
                  style={{
                    fontSize: fontSize(32, 14, 1920, 400),
                  }}
                  className="md:text-13xl"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  necessitatibus placeat ab, consectetur, dolores, est vero
                  laborum non assumenda repellat repudiandae? At assumenda
                  mollitia quo vitae excepturi molestiae, natus animi nisi rem,
                  dolorem cumque commodi ducimus est ipsam dolores aliquid
                  totam, temporibus nostrum enim optio magni. Neque excepturi,
                  ut praesentium non adipisci asperiores minus repellat magnam,
                  nulla dicta laborum magni veritatis quidem, esse et deserunt
                  laboriosam at perferendis quaerat veniam id distinctio Nam.
                  <br /> <br />
                  accusantium, neque omnis vitae architecto eaque eligendi
                  deleniti incidunt, autem fuga enim libero ex atque animi ipsa
                  a qui? Nostrum corrupti placeat quo sequi fuga iure neque
                  vitae laudantium at aut recusandae magni nemo, repudiandae
                  rerum earum itaque aliquid magnam explicabo hic vero corporis
                  asperiores provident minima distinctio? Explicabo maiores
                  cumque autem odit rem saepe, sequi, exercitationem maxime
                  ipsum similique magnam iste. Aliquam, rerum. Maxime
                  repellendus molestias esse ipsum nulla quae optio nobis ad
                  ipsa ab sequi assumenda perspiciatis, delectus minima
                  quibusdam corrupti magni tenetur nihil illum soluta modi!
                  Facere ipsum rerum placeat dolore id pariatur, saepe quisquam
                  laboriosam ut nostrum cum vel at molestias. Accusamus nulla
                  possimus ad molestiae quia, porro nisi officiis alias quam
                  incidunt. Similique eos tempore eligendi commodi illo,
                  obcaecati consectetur ipsa corrupti!
                </p>
                <h2
                  style={{
                    fontSize: fontSize(48, 14, 1920, 400),
                  }}
                  className=" text-3xl font-semibold text-[#343434]"
                >
                  Lorem ipsum dolor sit
                </h2>
                <p
                  style={{
                    fontSize: fontSize(32, 14, 1920, 400),
                  }}
                  className=""
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  necessitatibus placeat ab, consectetur, dolores, est vero
                  laborum non assumenda repellat repudiandae? At assumenda
                  mollitia quo vitae excepturi molestiae, natus animi nisi rem,
                  dolorem cumque commodi ducimus est ipsam dolores aliquid
                  totam, temporibus nostrum enim optio magni. Neque excepturi,
                  ut praesentium non adipisci asperiores minus repellat magnam,
                  nulla dicta laborum magni veritatis quidem, esse et deserunt
                  laboriosam at perferendis quaerat veniam id distinctio Nam.
                  <br /> <br />
                  accusantium, neque omnis vitae architecto eaque eligendi
                  deleniti incidunt, autem fuga enim libero ex atque animi ipsa
                  a qui? Nostrum corrupti placeat quo sequi fuga iure neque
                  vitae laudantium at aut recusandae magni nemo, repudiandae
                  rerum earum itaque aliquid magnam explicabo hic vero corporis
                  asperiores provident minima distinctio? Explicabo maiores
                  cumque autem odit rem saepe, sequi, exercitationem maxime
                  ipsum similique magnam iste. Aliquam, rerum. Maxime
                  repellendus molestias esse ipsum nulla quae optio nobis ad
                  ipsa ab sequi assumenda perspiciatis, delectus minima
                  quibusdam corrupti magni tenetur nihil illum soluta modi!
                  Facere ipsum rerum placeat dolore id pariatur, saepe quisquam
                  laboriosam ut nostrum cum vel at molestias. Accusamus nulla
                  possimus ad molestiae quia, porro nisi officiis alias quam
                  incidunt. Similique eos tempore eligendi commodi illo,
                  obcaecati consectetur ipsa corrupti!
                </p>
              </div>
              <div className="flex justify-center items-center gap-x-16 py-4 border-t border-b">
                <div>Share Post on</div>
                <div
                  style={{
                    height: fontSize(53, 17, 1920, 400),
                  }}
                  className="flex flex-row items-start justify-center gap-6 "
                >
                  <img
                    className="h-full  aspect-[1]  cursor-pointer"
                    alt=""
                    src="/frame-2.svg"
                  />
                  <img
                    className="h-full  aspect-[1]  cursor-pointer"
                    alt=""
                    src="/frame-3.svg"
                  />
                  <img
                    className="h-full  aspect-[1] cursor-pointer "
                    alt=""
                    src="/twitter-1.svg"
                  />

                  <img
                    className="h-full  aspect-[1]  cursor-pointer "
                    alt=""
                    src="/youtube.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-[1]   mt-10 hidden md:block">
            <div className="flex flex-col   border rounded-sm py-5 px-5">
              <div className="flex items-start justify-start     ">
                <div className="flex   w-[100px] h-[42px] md:w-[225px]  ">
                  <img
                    className="object-contain h-full  "
                    alt=""
                    src="/igaugeinvertedrgb.svg"
                  />
                </div>
              </div>
              <p className="font-red-hat-text my-5 text-sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
                laboriosam fugit alias quibusdam necessitatibus delectus eaque
                provident voluptatibus reprehenderit et, cumque iure, quae
                libero quam iste culpa quidem asperiores nesciunt.
              </p>
              {/* Check boxes list */}
              <div className="flex flex-col  mt-2 gap-7">
                <div className="flex items-center justify-start  px-3  gap-2"></div>
              </div>
              <div className="flex flex-row items-start justify-center gap-6">
                <img
                  className="h-6  w-6   cursor-pointer"
                  alt=""
                  src="/frame-2.svg"
                />
                <img
                  className="h-6  w-6   cursor-pointer"
                  alt=""
                  src="/frame-3.svg"
                />
                <img
                  className="h-6  w-6  cursor-pointer "
                  alt=""
                  src="/twitter-1.svg"
                />

                <img
                  className="h-6  w-6   cursor-pointer "
                  alt=""
                  src="/youtube.svg"
                />
              </div>
            </div>

            <div className="mt-28  rounded-[5.52px] bg-darkslateblue flex flex-col items-start justify-end pt-[210.7px] pb-[39.7px] pr-[38.6px] pl-[39px] box-border relative gap-[20.7px] max-w-full text-[30px] text-white font-libre-baskerville mq450:pt-[137px] mq450:pb-[26px] mq450:box-border">
              <div className="w-[395px] h-[442.4px] relative rounded-[5.52px] bg-darkslateblue hidden max-w-full " />
              <b className="self-stretch relative z-[1] mq450:text-[25px] mq900:text-[34px]">
                Register for Free
              </b>
              <button className="cursor-pointer  p-5   bg-orange-200 self-stretch flex flex-row items-start justify-center z-[1]">
                <p className="flex items-center text-[23px] h-[25px] font-red-hat-display text-black  ">
                  Register
                </p>
              </button>
              <img
                className="w-[307.8px] h-[251.6px] absolute !m-[0] top-[-61.8px] left-[32px] object-contain z-[1]"
                loading="lazy"
                alt=""
                src="/image-161@2x.png"
              />
            </div>
          </div>
        </div>

        <div className="hidden md:block mb-5">
          <div className="mb-6">
            <h1
              style={{
                fontSize: fontSize(64, 18, 1920, 400),
              }}
              className="font-libre-baskerville text-lg md:text-4xl font-semibold"
            >
              Recent Posts
            </h1>
          </div>
          <div className=" grid flex-row items-start justify-start  font-red-hat-text grid-cols-3 gap-x-7 mq900:hidden">
            {Array(3)
              .fill("")
              .map((e, i) => (
                <div
                  key={i}
                  style={{}}
                  className=" border  flex flex-col   overflow-hidden "
                >
                  <div className="h-3/5 relative">
                    <img
                      className="w-full relative object-cover aspect-[500/288]"
                      alt=""
                      src="/rectangle-245@2x.png"
                    />
                    <button className="bg-darkslateblue font-libre-baskerville h-7 items-center absolute inline-flex  top-0 m-4 rounded-[4.26px] text-white p-2 text-[10px]">
                      Category
                    </button>
                  </div>
                  <div className="m-5 h-full flex flex-col gap-y-3 justify-between">
                    <div className=" flex gap-x-1">
                      <img
                        className="w-[11.9px] h-[11.9px] relative overflow-hidden shrink-0 [debug_commit:1de1738] z-[1]"
                        alt=""
                        src="/calendar-1.svg"
                      />
                      <p
                        style={{
                          fontSize: fontSize(10, 7, 1920, 400),
                        }}
                        className="text-xs"
                      >
                        {" "}
                        12 March, 2024
                      </p>
                    </div>
                    <div className="flex flex-col gap-y-2">
                      <p
                        style={{
                          fontSize: fontSize(30, 10, 1920, 400),
                        }}
                        className="text-lg font-libre-baskerville font-semibold"
                      >
                        Lorem ipsum dolor sit amet
                      </p>
                      <p
                        style={{
                          fontSize: fontSize(15, 8, 1920, 400),
                        }}
                        className="text-[11px]"
                      >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quis est odit repellendus minima voluptas sit adipisci
                        quasi eveniet id suscipit, eum, voluptate eligendi illo
                        voluptates!
                      </p>
                    </div>
                    <div className="h-10 ">
                      <button className="bg-orange-200 h-full  flex justify-center items-center gap-x-1 px-7">
                        <div> Read More</div>
                        <div className="h-full bg-orange-200 flex items-center">
                          <img
                            className=" h-[6px] w-[6px] relative "
                            alt=""
                            src="/double_arrow.svg"
                          />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div
          style={{
            background: "linear-gradient(90deg, #272761 0%, #321489 100%)",
          }}
          className=" overflow-hidden border-red-500 bordcer-[2px] aspect-[1920/628] relative flex items-center justify-between px-5 md:px-20"
        >
          <div className="aspect-[600/311]  h-[50%] borcder border-red-500 flex flex-col justify-between mdm:h-[60%]">
            <div
              style={{
                fontSize: fontSize(48, 12, 1920, 400),
                fontWeight: 700,
                textAlign: "left",
              }}
              className="text-white font-semibold text-center font-libre-baskerville"
            >
              Register to QS i-gauge to compare Institutions
            </div>
            <div
              style={{
                fontSize: fontSize(20, 4, 1920, 400),
                fontFamily: "Libre Baskerville",
                fontWeight: 400,
                textAlign: "left",
              }}
              className="text-white font-semibold text-center font-red-hat-text "
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium...
            </div>
            <button>
              <img
                src="Button.svg"
                style={{
                  height: fontSize(76, 15, 1920, 400),
                }}
              />
            </button>
          </div>
          <img src="qs.svg" className="h-full" />
          <img
            src="circle-left.png"
            className="absolute bottom-[-50%] left-0"
          />
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPostV2Approved;
