import { FunctionComponent } from 'react';

const AlignTools: FunctionComponent = () => {
  return (
    <div className="w-[743px] bg-blanchedalmond box-border flex flex-row items-start justify-start py-[34px] pr-11 pl-[22px] gap-[153px] min-w-[743px] max-w-full text-left text-5xl text-black font-inter border-[1px] border-solid border-whitesmoke-200 mq450:gap-[153px_38px] mq900:flex-wrap mq900:gap-[153px_76px] mq900:min-w-full mq1600:flex-1">
      <div className="h-[101px] w-[743px] relative bg-blanchedalmond box-border hidden max-w-full border-[1px] border-solid border-whitesmoke-200" />
      <div className="flex-1 relative font-medium inline-block min-w-[323px] max-w-full z-[1] mq450:text-lgi">
        Sed ut perspiciatis unde omnis iste natus?
      </div>
      <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
        <img
          className="w-[25px] h-[23px] relative z-[1]"
          alt=""
          src="/polygon-9-1.svg"
        />
      </div>
    </div>
  );
};

export default AlignTools;
