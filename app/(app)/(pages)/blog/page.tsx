import { FunctionComponent } from "react";
import FrameComponent2 from "./components/FrameComponent2";
import FrameComponent1 from "./components/FrameComponent1";
import FrameComponent from "./components/FrameComponent";
import Height from "./components/Height";
import DirectedGraph from "./components/DirectedGraph";
import ErrorHandler from "./components/ErrorHandler";
import MinHeap from "./components/MinHeap";
import Link from "next/link";

const SingleBlogPostV2Approved: FunctionComponent = () => {
  return (
    <div>
      <div className="h-[300px] sm:h-[450px] relative">
        <img
          className=" h-[300px] sm:h-full w-full w-full  object-cover aspect-square  max-w-full brightness-75"
          alt=""
          src="/rectangle-245@2x.png"
        />

        <div className="absolute flex flex-col  bottom-0 px-6 md:px-[150px] mb-8 text-white">
          <div>
            <button className="bg-darkslateblue  rounded-[4.26px] text-white p-2">
              Category
            </button>
          </div>

          <div className="flex flex-col gap-y-1">
            <div>
              <h1 className="font-libre-baskerville text-[15px] sm:text-5xl font-bold">
                Lorem ipsum dolor sit amet
              </h1>
            </div>
            <div className=" flex gap-x-1 ">
              <img
                className="w-[11.9px] h-[11.9px] text-white"
                alt=""
                src="/calendar-1.svg"
              />
              <p className="text-xs"> 12 March, 2024</p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 md:px-[150px]">
        <div className="grid grid-cols-7  gap-8 mb-7">
          <div className="col-start-1 col-span-7 md:col-span-5 ">
            <div className=" flex flex-col mt-10 gap-y-5">
              <div className="h-5">
                <button className="bg-darkslateblue h-5 font-libre-baskerville text-xs rounded-[4.26px] text-white p-1 ">
                  <p> Category</p>
                </button>
              </div>
              <div className="flex flex-col gap-y-1">
                <div>
                  <h1 className="font-libre-baskerville text-lg md:text-4xl font-semibold md:text-45xl">
                    Lorem ipsum dolor sit amet
                  </h1>
                </div>
                <div className=" flex gap-x-1 ">
                  <img
                    className="w-[11.9px] h-[11.9px] "
                    alt=""
                    src="/calendar-1.svg"
                  />
                  <p className="text-xs md:text-base"> 12 March, 2024</p>
                </div>
              </div>
              <div className="flex flex-col gap-y-2 font-red-hat-text mb-5 md:text-13xl">
                <p>
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
                <h2 className=" text-3xl font-semibold text-[#343434] md:text-13xl">
                  Lorem ipsum dolor sit
                </h2>
                <p className="md:text-13xl">
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
                <h2 className=" text-3xl font-semibold text-[#343434]">
                  Lorem ipsum dolor sit
                </h2>
                <p className="">
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
                    src="/linkedin.svg"
                  />
                  <img
                    className="h-6  w-6   cursor-pointer "
                    alt=""
                    src="/youtube.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-start-6 col-span-2 max-w-[300px]    mt-10 hidden md:block">
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
                  src="/linkedin.svg"
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
            <h1 className="font-libre-baskerville text-lg md:text-4xl font-semibold">
              Lorem ipsum dolor sit amet
            </h1>
          </div>
          <div className=" grid flex-row items-start justify-start  font-red-hat-text grid-cols-3 gap-x-7">
            <div className=" border  flex flex-col h-fit">
              <div className="h-3/5 relative">
                <img
                  className="h-[190px]  w-full relative object-cover aspect-square  "
                  alt=""
                  src="/rectangle-245@2x.png"
                />
                <button className="bg-darkslateblue font-libre-baskerville h-7 items-center absolute inline-flex  top-0 m-4 rounded-[4.26px] text-white p-2 text-[10px]">
                  Category
                </button>
              </div>
              <div className="m-3 h-full flex flex-col gap-y-3 ">
                <div className=" flex gap-x-1">
                  <img
                    className="w-[11.9px] h-[11.9px] relative overflow-hidden shrink-0 [debug_commit:1de1738] z-[1]"
                    alt=""
                    src="/calendar-1.svg"
                  />
                  <p className="text-xs"> 12 March, 2024</p>
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="text-lg font-libre-baskerville font-semibold">
                    Lorem ipsum dolor sit amet
                  </p>
                  <p className="text-[11px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis est odit repellendus minima voluptas sit adipisci quasi
                    eveniet id suscipit, eum, voluptate eligendi illo
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
            <div className=" border  flex flex-col h-fit">
              <div className="h-3/5 relative">
                <img
                  className="h-[190px]  w-full relative object-cover aspect-square  "
                  alt=""
                  src="/rectangle-245@2x.png"
                />
                <button className="bg-darkslateblue font-libre-baskerville h-7 items-center absolute inline-flex  top-0 m-4 rounded-[4.26px] text-white p-2 text-[10px]">
                  Category
                </button>
              </div>
              <div className="m-3 h-full flex flex-col gap-y-3 ">
                <div className=" flex gap-x-1">
                  <img
                    className="w-[11.9px] h-[11.9px] relative overflow-hidden shrink-0 [debug_commit:1de1738] z-[1]"
                    alt=""
                    src="/calendar-1.svg"
                  />
                  <p className="text-xs"> 12 March, 2024</p>
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="text-lg font-libre-baskerville font-semibold">
                    Lorem ipsum dolor sit amet
                  </p>
                  <p className="text-[11px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis est odit repellendus minima voluptas sit adipisci quasi
                    eveniet id suscipit, eum, voluptate eligendi illo
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
            <div className=" border  flex flex-col h-fit">
              <div className="h-3/5 relative">
                <img
                  className="h-[190px]  w-full relative object-cover aspect-square  "
                  alt=""
                  src="/rectangle-245@2x.png"
                />
                <button className="bg-darkslateblue font-libre-baskerville h-7 items-center absolute inline-flex  top-0 m-4 rounded-[4.26px] text-white p-2 text-[10px]">
                  Category
                </button>
              </div>
              <div className="m-3 h-full flex flex-col gap-y-3 ">
                <div className=" flex gap-x-1">
                  <img
                    className="w-[11.9px] h-[11.9px] relative overflow-hidden shrink-0 [debug_commit:1de1738] z-[1]"
                    alt=""
                    src="/calendar-1.svg"
                  />
                  <p className="text-xs"> 12 March, 2024</p>
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="text-lg font-libre-baskerville font-semibold">
                    Lorem ipsum dolor sit amet
                  </p>
                  <p className="text-[11px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis est odit repellendus minima voluptas sit adipisci quasi
                    eveniet id suscipit, eum, voluptate eligendi illo
                    voluptates!
                  </p>
                </div>
                <div className="h-10 ">
                  <button className="bg-orange-200 h-full  flex justify-center items-center gap-x-1 px-7">
                    <div> Read More </div>
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
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="h-[200px] w-full flex  relative overflow-hidden bg-darkslateblue  justify-center items-center z-1">
          <img
            className="h-60  -bottom-10 right-0 md:-left-10 z-0  absolute object-cover hidden sm:block"
            alt=""
            src="/image-9@2x.png"
          />
          <div className="text-white  flex justify-center items-center flex-col gap-y-2 ">
            <h1 className="font-libre-baskerville text-3xl md:text-5xl  capitalize text-center w-full xs:max-w-[55%]">
              Register to QS i-gauge To Compare Institutions
            </h1>
            <div className="flex text-center justify-center">
              <p className="font-red-hat-text  text-center flex max-w-[55%] text-xs">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium...
              </p>
            </div>
            <div className="relative text-base bg-orange-200 p-2 font-red-hat-display text-black text-left z-[1]">
              <Link href={"/signup"}> Register Now</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPostV2Approved;
