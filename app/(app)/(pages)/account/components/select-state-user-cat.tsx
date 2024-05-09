import type { NextPage } from 'next';
import { useMemo, type CSSProperties } from 'react';

export type SelectStateUserCatType = {
  selectState?: string;

  /** Style props */
  propAlignSelf?: CSSProperties['alignSelf'];
  propFlex?: CSSProperties['flex'];
  propMinWidth?: CSSProperties['minWidth'];
  propMinWidth1?: CSSProperties['minWidth'];
};

const SelectStateUserCat: NextPage<SelectStateUserCatType> = ({
  selectState,
  propAlignSelf,
  propFlex,
  propMinWidth,
  propMinWidth1
}) => {
  const selectStateUserCatStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
      minWidth: propMinWidth
    };
  }, [propAlignSelf, propFlex, propMinWidth]);

  const selectStateStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1
    };
  }, [propMinWidth1]);

  return (
    <div
      className="self-stretch rounded-8xs bg-white box-border flex flex-row items-start justify-between pt-[26px] pb-6 pr-[27px] pl-[46px] max-w-full gap-[20px] w-auto h-auto text-left text-2xl text-darkslategray-100 font-red-hat-text border-[1px] border-solid border-whitesmoke hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[20px] hover:items-start hover:justify-between hover:rounded-8xs hover:pt-[26px] hover:pb-6 hover:pr-[27px] hover:pl-[46px] hover:box-border hover:max-w-full hover:border-[1px] hover:border-solid hover:border-whitesmoke mq900:pl-[23px] mq900:box-border"
      style={selectStateUserCatStyle}>
      <div
        className="relative flex min-w-[116] z-[1] hover:font-red-hat-text hover:text-2xl hover:text-left hover:text-darkslategray-100 hover:flex hover:min-w-[116] mq450:text-mid"
        style={selectStateStyle}>
        {selectState}
      </div>
      <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border w-auto [align-self:unset] h-auto gap-[0px] [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-3 hover:px-0 hover:pb-0 hover:box-border">
        <img
          className="w-[9px] h-[5px] relative flex box-border z-[1] border-[1px] border-solid border-black hover:flex hover:w-[9px] hover:h-[5px] hover:box-border hover:border-[1px] hover:border-solid hover:border-black"
          alt=""
          src="/vector-6.svg"
        />
      </div>
    </div>
  );
};

export default SelectStateUserCat;
