import { FunctionComponent } from 'react';

const DirectedGraph: FunctionComponent = () => {
  return (
    <section className="self-stretch h-[458px] bg-darkslateblue overflow-hidden shrink-0 flex flex-row items-start justify-start pt-4 px-[581px] pb-[72.7px] box-border max-w-full text-center text-36xl text-white font-libre-baskerville mq900:pt-5 mq900:px-[145px] mq900:pb-[47px] mq900:box-border mq1300:pl-[290px] mq1300:pr-[290px] mq1300:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
      <div className="h-[458px] w-[1923px] relative bg-darkslateblue hidden max-w-full z-[1]" />
      <img
        className="ml-[-653px] h-[527px] w-[694px] relative object-cover max-w-[calc(100%_-_63px)] shrink-0 z-[1] mq1650:max-w-full"
        alt=""
        src="/image-9@2x.png"
      />
      <div className="flex flex-col items-start justify-start pt-14 px-0 pb-0 box-border max-w-full shrink-0 ml-[-41px] mq1650:hidden">
        <div className="self-stretch flex flex-col items-end justify-start gap-[28px] max-w-full">
          <div className="self-stretch flex flex-col items-end justify-start gap-[18px] max-w-full">
            <h1 className="m-0 self-stretch relative text-inherit capitalize font-bold font-inherit z-[1] mq900:text-25xl mq450:text-14xl">
              Register to i-gauge to compare Institutions
            </h1>
            <div className="flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-xl-4 text-lightgray font-red-hat-text">
              <div className="relative leading-[27px] inline-block shrink-0 max-w-full z-[1] mq450:text-base mq450:leading-[22px]">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium...
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
            <button className="cursor-pointer [border:none] pt-[22px] pb-[18.3px] pr-[50.3px] pl-[51px] bg-orange-200 flex flex-row items-start justify-start whitespace-nowrap z-[1] mq450:pl-5 mq450:pr-5 mq450:box-border">
              <div className="h-[77.3px] w-[271.3px] relative bg-orange-200 hidden" />
              <div className="relative text-8xl-3 font-red-hat-display text-black text-left z-[1]">
                Register Now
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectedGraph;
