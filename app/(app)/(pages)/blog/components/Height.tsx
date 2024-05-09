import { FunctionComponent } from "react";
import MinHeap from "./MinHeap";

const Height: FunctionComponent = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[156.6px] box-border max-w-full text-left text-5xl text-black font-red-hat-text mq900:pb-[66px] mq900:box-border mq1300:pb-[102px] mq1300:box-border">
      <div className="w-[1619px] flex flex-col items-start justify-start gap-[101px] max-w-full mq900:gap-[50px] mq450:gap-[25px]">
        <div className="w-[1210px] flex flex-col items-end justify-start gap-[46.9px] max-w-full mq900:gap-[23px]">
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <div className="w-[536.4px] flex flex-row flex-wrap items-start justify-start gap-[36.4px] max-w-full mq900:gap-[18px]">
              <div className="w-[189.6px] flex flex-col items-start justify-start pt-2.5 pb-0 pr-5 pl-0 box-border">
                <div className="relative mq450:text-lgi">Share Post on</div>
              </div>
              <img
                className="h-[53.1px] w-[53.1px] relative min-h-[53px]"
                alt=""
                src="/frame-2-2.svg"
              />
              <div className="flex-1 flex flex-row items-end justify-between min-w-[144px] gap-[20px]">
                <img
                  className="h-[53.1px] w-[53.1px] relative overflow-hidden shrink-0 min-h-[53px]"
                  alt=""
                  src="/twitter-1-2.svg"
                />
                <div className="flex flex-col items-start justify-end pt-0 px-0 pb-2">
                  <img
                    className="w-[42px] h-[37px] relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/whatsapp.svg"
                  />
                </div>
                <img
                  className="h-[53.1px] w-[53.1px] relative rounded-120xl-8 overflow-hidden shrink-0 min-h-[53px]"
                  alt=""
                  src="/linkedin-2.svg"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-whitesmoke" />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[82px] max-w-full text-45xl font-libre-baskerville mq900:gap-[41px] mq450:gap-[20px]">
          <div className="flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full">
            <h1 className="m-0 relative text-inherit font-bold font-inherit mq900:text-32xl mq450:text-19xl">
              Recent Posts
            </h1>
          </div>
          <div className="self-stretch grid flex-row items-start justify-start gap-[45.8px] max-w-full grid-cols-[repeat(3,_minmax(382px,_1fr))] text-4xs-7 text-dimgray font-red-hat-text mq900:gap-[23px] mq900:grid-cols-[minmax(382px,_1fr)] mq1300:justify-center mq1300:grid-cols-[repeat(2,_minmax(382px,_662px))]">
            <MinHeap
              calendar1="/calendar-1.svg"
              topologicalSort="/topological-sort.svg"
            />
            <MinHeap
              calendar1="/calendar-1-1.svg"
              topologicalSort="/19-1.svg"
            />
            <MinHeap
              calendar1="/calendar-1-2.svg"
              topologicalSort="/19-2.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Height;
