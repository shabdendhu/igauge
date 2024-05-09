import type { NextPage } from 'next';
import { useMemo, type CSSProperties } from 'react';

export type ExceptionHandlingType = {
  /** Style props */
  propRight?: CSSProperties['right'];
  propLeft?: CSSProperties['left'];
};

const ExceptionHandling: NextPage<ExceptionHandlingType> = ({
  propRight,
  propLeft
}) => {
  const image21IconStyle: CSSProperties = useMemo(() => {
    return {
      right: propRight,
      left: propLeft
    };
  }, [propRight, propLeft]);

  return (
    <div className="flex flex-col items-start justify-start pt-[165px] px-0 pb-0 text-left text-5xl text-black font-libre-baskerville">
      <div className="flex flex-row items-start justify-start relative">
        <h3 className="m-0 relative text-inherit font-bold font-inherit z-[2] mq450:text-lgi">
          Vignan University
        </h3>
        <img
          className="h-[164.6px] w-[193.1px] absolute !m-[0] top-[-157px] right-[17.9px] object-cover z-[3]"
          loading="lazy"
          alt=""
          src="/image-20@2x.png"
          style={image21IconStyle}
        />
      </div>
    </div>
  );
};

export default ExceptionHandling;
