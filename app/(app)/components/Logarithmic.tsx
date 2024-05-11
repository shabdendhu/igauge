import { FunctionComponent } from "react";
import Trigonometric from "./Trigonometric";

const Logarithmic: FunctionComponent = ({ scrollContainerRef }: any) => {
  return (
    <div
      className="scrollItem inline-block  transition-transform duration-300 transform-origin-left w-full md:min-w-[400px]"
      ref={scrollContainerRef}
    >
      <Trigonometric calculator="/frame-90.svg" />
    </div>
  );
};

export default Logarithmic;
