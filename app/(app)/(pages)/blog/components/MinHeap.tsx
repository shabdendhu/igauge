import { FunctionComponent } from 'react';

export type MinHeapType = {
  calendar1?: string;
  topologicalSort?: string;
};

const MinHeap: FunctionComponent<MinHeapType> = ({
  calendar1,
  topologicalSort
}) => {
  return (
    <div className="h-[492.4px] rounded-t-none rounded-b-9xs-1 flex flex-col items-end justify-start pt-0 px-0 pb-[203.7px] box-border max-w-full text-left text-4xs-7 text-dimgray font-red-hat-text mq900:pb-[132px] mq900:box-border">
      <div className="self-stretch h-[288.7px] flex flex-row items-start justify-start pt-[20.5px] px-[19.2px] pb-5 box-border bg-[url('/public/rectangle-245@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full shrink-0">
        <img
          className="h-[288.7px] w-[507.3px] relative object-cover hidden max-w-full"
          alt=""
          src="/rectangle-245@2x.png"
        />
        <button className="cursor-pointer [border:none] pt-[6.8px] px-[16.2px] pb-[7.9px] bg-darkslateblue rounded-9xs-1 flex flex-row items-start justify-start z-[1]">
          <div className="h-[26.7px] w-[80.7px] relative rounded-9xs-1 bg-darkslateblue hidden" />
          <b className="relative text-3xs-9 inline-block font-libre-baskerville text-white text-left min-w-[48px] z-[1]">
            Category
          </b>
        </button>
      </div>
      <div className="self-stretch bg-white box-border flex flex-col items-start justify-start pt-3.5 px-[19.2px] pb-[22px] gap-[15.7px] max-w-full shrink-0 z-[2] mt-[-0.6px] border-[0.6px] border-solid border-whitesmoke">
        <div className="w-[509.1px] h-[204.3px] relative bg-white box-border hidden max-w-full border-[0.6px] border-solid border-whitesmoke" />
        <div className="flex flex-row items-start justify-start py-0 pr-px pl-[1.3px]">
          <div className="flex flex-row items-start justify-start gap-[5px]">
            <div className="flex flex-col items-start justify-start pt-[1.2px] px-0 pb-0">
              <img
                className="w-[8.7px] h-[8.7px] relative overflow-hidden shrink-0 z-[1]"
                loading="lazy"
                alt=""
                src={calendar1}
              />
            </div>
            <div className="relative inline-block min-w-[61px] z-[1]">
              12 March, 2024
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[50.1px] box-border gap-[11.1px] max-w-full z-[1] text-3xl-4 text-black font-libre-baskerville">
          <b className="relative inline-block max-w-full z-[2] mq450:text-lg">
            Lorem ipsum dolor sit amet
          </b>
          <div className="self-stretch relative text-smi-4 font-red-hat-text text-darkslategray z-[2]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </div>
          <button className="cursor-pointer [border:none] pt-[11.6px] px-[30.6px] pb-[10.1px] bg-orange-200 flex flex-row items-start justify-start gap-[3.8px] z-[2]">
            <div className="h-[40.7px] w-[142.8px] relative bg-orange-200 hidden" />
            <div className="relative text-mini-4 font-red-hat-display text-black text-left inline-block min-w-[70px] z-[3]">
              Read More
            </div>
            <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
              <img
                className="w-[6.8px] h-[7.4px] relative z-[3]"
                alt=""
                src={topologicalSort}
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MinHeap;
