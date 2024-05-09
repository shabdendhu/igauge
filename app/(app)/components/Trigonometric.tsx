import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type TrigonometricType = {
  calculator?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
};

const Trigonometric: FunctionComponent<TrigonometricType> = ({
  calculator,
  propPadding,
}) => {
  const trigonometricStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className="flex-1 bg-white box-border flex flex-col items-start justify-start pt-[35px] pb-[41px] pr-5 pl-[38.599999999998545px] gap-[23.850000000000023px] min-w-[318px] max-w-full z-[2] text-left text-lg text-darkslategray-200 font-red-hat-text border-[0.9px] border-solid border-whitesmoke-200"
      style={{ ...trigonometricStyle, aspectRatio: 490 / 319 }}
    >
      <div className="w-[490px] h-[319px] relative bg-white box-border hidden max-w-full border-[0.9px] border-solid border-whitesmoke-200" />
      <img
        className="w-[156.4px] h-[22.5px] relative z-[3]"
        loading="lazy"
        alt=""
        src={calculator}
      />
      <div className="mdm:w-full max-w-[500px] relative inline-block  z-[3]">{`Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. `}</div>
      <div className="flex flex-row items-start justify-start gap-[16.30000000000291px] text-mid-1 text-black">
        <img
          className="h-[50.3px] w-[50.3px] relative rounded-[50%] object-cover shrink-0 [debug_commit:1de1738] z-[3]"
          loading="lazy"
          alt=""
          src="/ellipse-8@2x.png"
        />
        <div className="flex flex-col items-start justify-start pt-[2.7000000000000455px] px-0 pb-0">
          <div className="flex flex-col items-start justify-start gap-[4px] shrink-0 [debug_commit:1de1738]">
            <div className="relative font-medium inline-block min-w-[101px] z-[3]">
              Rohit Shetty
            </div>
            <div className="relative text-smi-6 text-dimgray inline-block min-w-[87px] z-[3]">
              CMR University
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trigonometric;
