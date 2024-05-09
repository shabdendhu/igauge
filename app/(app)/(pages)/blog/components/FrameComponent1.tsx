import { FunctionComponent } from 'react';

const FrameComponent1: FunctionComponent = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[148px] box-border max-w-full text-left text-45xl text-white font-libre-baskerville mq900:pb-24 mq900:box-border mq450:pb-[62px] mq450:box-border">
      <div className="flex-1 flex flex-col items-start justify-end pt-[440px] pb-[98px] pr-5 pl-[145px] box-border relative gap-[14px] max-w-full z-[2] mq900:pl-9 mq900:pt-[286px] mq900:pb-16 mq900:box-border mq1300:pl-[72px] mq1300:box-border">
        <img
          className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-8xs max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/rectangle-263@2x.png"
        />
        <div className="flex flex-row items-start justify-start py-0 px-[3px]">
          <button className="cursor-pointer [border:none] pt-[9.4px] px-[22.1px] pb-[10.6px] bg-darkslateblue rounded-[4.26px] flex flex-row items-start justify-start z-[1]">
            <div className="h-[36.6px] w-[110.7px] relative rounded-[4.26px] bg-darkslateblue hidden" />
            <b className="relative text-sm-6 inline-block font-libre-baskerville text-white text-left min-w-[66px] z-[1]">
              Category
            </b>
          </button>
        </div>
        <h1 className="m-0 relative text-inherit font-bold font-inherit inline-block max-w-full z-[1] mq900:text-32xl mq450:text-19xl">
          Lorem ipsum dolor sit amet
        </h1>
        <div className="flex flex-row items-start justify-start gap-[16px] text-base font-red-hat-text">
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <img
              className="w-[19px] h-[18px] relative z-[1]"
              alt=""
              src="/vector-5.svg"
            />
          </div>
          <div className="relative inline-block min-w-[115px] z-[1]">
            12 March, 2024
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
