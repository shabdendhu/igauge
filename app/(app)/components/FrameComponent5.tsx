import { FunctionComponent } from "react";

const Institutions = [
  {
    title: "Employability",
    image: "/rectangle-161@2x.png",
  },
  {
    title: "Faculty",
    image: "/rectangle-162@2x.png",
  },
  {
    title: "Facilities",
    image: "/rectangle-163@2x.png",
  },
  {
    title: "Research",
    image: "/rectangle-164@2x.png",
  },
  {
    title: "Learning",
    image: "/rectangle-165@2x.png",
  },
];

const Card = ({ title, image }: { title: string; image: string }) => {
  return (
    <div className="collection-university-card self-stretch w-[390px] shrink-0 flex flex-row items-end justify-start p-[31px] box-border relative max-w-full">
      <div className=" bg-gradient-to-t  w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-8xs max-w-full overflow-hidden max-h-full object-cover bg-gradient-to-t from-black  to-transparent" />
      <img
        className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-8xs max-w-full overflow-hidden max-h-full object-cover opacity-80"
        loading="lazy"
        alt=""
        src={image}
      />
      <div className="relative font-semibold z-[1] mq450:text-lgi">{title}</div>
    </div>
  );
};

const FrameComponent5: FunctionComponent = () => {
  return (
    <section className="w-full h-[923px] flex flex-row items-start justify-start pt-0 px-0 pb-10 box-border max-w-[115%] shrink-0 text-left text-5xl text-white font-red-hat-display">
      <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-end py-[91px] pr-0 px-6 sm:pl-20 box-border relative max-w-full  mdm:pt-[130px] mdm:self-auto mq900:pb-[59px] mq900:box-border  mq1275:box-border ">
        <div className="w-full h-[530px] overflow-x-auto shrink-0 flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border gap-[23px] max-w-full z-[2] no-scrollbar">
          {Institutions.map((city, key) => (
            <Card title={city.title} image={city.image} key={key} />
          ))}
          {/* <div className="collection-university-card self-stretch w-[390px] shrink-0 flex flex-row items-end justify-start p-[31px] box-border relative max-w-full">
            <div className=" bg-gradient-to-b from-darkgray to-black w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-8xs max-w-full overflow-hidden max-h-full object-cover" />
            <img
              className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-8xs max-w-full overflow-hidden max-h-full object-cover"
              loading="lazy"
              alt=""
              src="/rectangle-161@2x.png"
            />
            <div className="relative font-semibold z-[1] mq450:text-lgi">
              Employability
            </div>
          </div> */}
        </div>
        <div className="flex z-[2] w-[300px] self-center mt-[50px] mdm:w-[182px] block sm:hidden">
          <img className="h-full w-full" alt="" src="/frame-29.svg" />
        </div>
        <div className="w-full !m-[0] absolute top-[0px] left-[0px] flex flex-row items-start justify-start max-w-full text-36xl text-black font-libre-baskerville">
          <img
            className="h-[604px] w-[618px] absolute !m-[0] bottom-[-75px] left-[-140px] z-[1]"
            alt=""
            src="/frame-49.svg"
          />
          <div className="w-[334px] !m-[0] absolute top-[-53px] right-[0px] flex flex-row items-start justify-start py-0 px-0 box-border max-w-full mdm:hidden">
            <div className="h-[388px] w-[388px] relative shrink-0 [debug_commit:1de1738] max-w-[117%]">
              <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-orange-200 w-full h-full z-[1]" />
              <img
                className="absolute top-[195px] left-[72px] w-[182px] h-[14.7px] z-[2]"
                alt=""
                src="/frame-29.svg"
              />
            </div>
          </div>
          <div className="flex-1 bg-blanchedalmond flex flex-col items-start justify-start pt-[74px] px-6 sm:px-[150px] pb-[675px] box-border min-h-[883px] max-w-full mdm:pt-[30px] ">
            {/* <div className="w-full h-[883px] relative bg-blanchedalmond hidden max-w-full z-[1]" /> */}
            <div className="w-full flex flex-row items-start justify-center max-w-full mdm:w2/3">
              <div className="w-[538px] flex flex-row items-start justify-end pt-[58px] px-[85px] pb-[53px] box-border bg-cover bg-no-repeat bg-[top] max-w-full z-[1]"></div>
            </div>
            <h1 className="m-0 w-full flex items-center   relative text-inherit font-bold font-inherit whitespace-pre-wrap inline-block max-w-full z-[2] mt-[-97px] mq450:text-[25px] mq900:text-[30px] mq1440:text-[45px] ">
              Collections
              <div className="relative flex items-center justify-center  z-[2]  px-10 ">
                Universities
                <img
                  className="ml-2 h-[20px] w-[20px] object-contain"
                  alt=""
                  src="/polygon-9.svg"
                />
                <img
                  className="h-24 sm:h-32 w-full top-[-60%] absolute z-[-1] object-cover max-w-full mq450:h-[50px] mq900:h-[60px]"
                  alt=""
                  src="/untitled-design-3-1@2x.png"
                />
              </div>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent5;
