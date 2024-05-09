import { FunctionComponent } from 'react';

const CanvasArea: FunctionComponent = () => {
  return (
    <div className="w-[743px] flex flex-col items-start justify-start gap-[26px] min-w-[743px] max-w-full text-left text-5xl text-black font-inter mq900:min-w-full mq1600:flex-1">
      <div className="self-stretch bg-orange-200 box-border flex flex-row items-start justify-between py-[34px] pr-[46px] pl-[22px] max-w-full gap-[20px] border-[1px] border-solid border-whitesmoke-200 mq900:pr-[23px] mq900:box-border">
        <div className="h-[101px] w-[743px] relative bg-orange-200 box-border hidden max-w-full border-[1px] border-solid border-whitesmoke-200" />
        <div className="relative font-medium z-[1] mq450:text-lgi">
          Sed ut perspiciatis unde omnis iste natus?
        </div>
        <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
          <img
            className="w-[25px] h-[23px] relative z-[1]"
            alt=""
            src="/polygon-9-1.svg"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[30px] pl-[22px] box-border max-w-full text-xl text-darkslategray-200 font-red-hat-text">
        <div className="flex-1 relative inline-block max-w-full mq450:text-base">{`Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. `}</div>
      </div>
    </div>
  );
};

export default CanvasArea;
