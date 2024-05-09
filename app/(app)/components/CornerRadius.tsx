import { FunctionComponent } from 'react';

const CornerRadius: FunctionComponent = () => {
  return (
    <div className="bg-blanchedalmond box-border flex flex-row items-start justify-start py-[34px] pr-[45px] pl-[25px] gap-[153px] min-w-[743px] max-w-full text-left text-5xl text-black font-inter border-[1px] border-solid border-whitesmoke-200 mq450:gap-[153px_38px] mq900:gap-[153px_76px] mq900:pr-[22px] mq900:box-border mq900:min-w-full mq1600:flex-1">
      <div className="h-[101px] w-[742px] relative bg-blanchedalmond box-border hidden max-w-full border-[1px] border-solid border-whitesmoke-200" />
      <div className="relative font-medium z-[1] mq450:text-lgi">
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

export default CornerRadius;
