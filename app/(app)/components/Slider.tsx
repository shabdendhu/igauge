import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type SliderType = {
  divider?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propWidth?: CSSProperties["width"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propPadding1?: CSSProperties["padding"];
  propDebugCommit?: CSSProperties;
  propDebugCommit1?: CSSProperties;
};

const Slider = ({
  divider,
  propPadding,
  propWidth,
  propAlignSelf,
  propPadding1,
  propDebugCommit,
  propDebugCommit1,
  pageData,
}: any) => {
  const radioButtonsStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
      padding: propPadding1,
    };
  }, [propWidth, propAlignSelf, propPadding1]);

  //@ts-ignore
  const sedUtPerspiciatisContainerStyle: CSSProperties = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
    };
  }, [propDebugCommit]);

  //@ts-ignore
  const button1Style: CSSProperties = useMemo(() => {
    return {
      debugCommit: propDebugCommit1,
    };
  }, [propDebugCommit1]);

  return (
    <div className="flex flex-col items-start justify-start pt-[76px] px-0 pb-0 box-border max-w-full text-left text-45xl text-black font-libre-baskerville mq450:pt-8 mq450:box-border mq900:pt-[49px] mq900:box-border mq900:min-w-full mq1600:flex-1">
      <div
        className="self-stretch flex flex-col items-start justify-start pt-0 px-0  box-border gap-[29px] max-w-full  mq900:box-border  mq1275:box-border mdm:pb-[20px]"
        style={radioButtonsStyle}
      >
        <h1 className="m-0 self-stretch relative text-inherit font-bold font-inherit shrink-0 mq450:text-19xl mq900:text-32xl mq1440:text-[45px]">
          {pageData.content[8].title}
        </h1>
        <div
          className="flex flex-col items-start justify-start gap-[45px] max-w-full shrink-0 text-5xl text-darkslategray-200 font-red-hat-text mq900:gap-[22px_45px]"
          style={frameDiv2Style}
        >
          <div
            className="self-stretch relative mq450:text-lgi"
            style={sedUtPerspiciatisContainerStyle}
          >
            {/* <p className="m-0">{`Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. `}</p>
            <p className="m-0">&nbsp;</p> */}
            <p className="m-0">{pageData.content[8].description}</p>
          </div>
          <div className="flex flex-row items-start justify-start py-0 px-0.5">
            <button
              className="cursor-pointer [border:none] pt-[22px] pb-[18.30000000000001px] pr-[57.29999999999927px] pl-[58px] bg-orange-200 flex flex-row items-start justify-start gap-[10px] mq450:pl-5 mq450:pr-5 mq450:box-border"
              style={button1Style}
            >
              <div className="h-[77.3px] w-[271.3px] relative bg-orange-200 hidden" />
              <div className="relative text-8xl-3 font-red-hat-display text-black text-left z-[1] mq450:text-3xl">
                Read More
              </div>
              <div className="flex flex-col items-start justify-start pt-[13px] px-0 pb-0">
                <img
                  className="w-3.5 h-3.5 relative z-[1]"
                  alt=""
                  src={divider}
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
