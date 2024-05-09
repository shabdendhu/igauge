import { FunctionComponent, useMemo, type CSSProperties } from 'react';

export type FrameComponent11Type = {
  selectInstitution?: string;

  /** Style props */
  propWidth?: CSSProperties['width'];
  propDisplay?: CSSProperties['display'];
  propMinWidth?: CSSProperties['minWidth'];
};

const FrameComponent11: FunctionComponent<FrameComponent11Type> = ({
  selectInstitution,
  propWidth,
  propDisplay,
  propMinWidth
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth
    };
  }, [propWidth]);

  const selectInstitutionStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth
    };
  }, [propDisplay, propMinWidth]);

  return (
    <div
      className="w-full flex flex-col items-start justify-start py-0 pr-6 pl-0 box-border text-left text-xl text-darkslategray-100 font-red-hat-display mq1440:text-[14px] mq1600:text-[20px] "
      style={frameDivStyle}>
      <div className="w-full self-stretch bg-white flex flex-row items-start justify-between pt-[23px] pb-6 pr-[22px] pl-[21px] gap-[20px] z-[3] border-[2px] border-solid border-orange-200 mq1440:p-[16px]">
        <div
          className="relative z-[1] mq450:text-base text-[#474747]"
          style={selectInstitutionStyle}>
          {selectInstitution}
        </div>
        <div className="flex flex-col items-center justify-start pt-3 px-0 pb-0">
          <img
            className="w-[11px] h-1.5 relative z-[1] mq1440:top-[-4px]"
            alt=""
            src="/vector-5.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent11;
