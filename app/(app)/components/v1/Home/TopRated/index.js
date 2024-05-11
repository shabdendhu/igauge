import { useEffect, useState } from "react";
import TopRatedCollection from "../../../TopRatedCollection";
import FrameComponent7 from "../../../FrameComponent7";
const TopRated = () => {
  const [activeTab, setActiveTab] = useState("university");

  // Function to handle tab click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  useEffect(() => {
    console.log({ activeTab });
  }, [activeTab]);

  return (
    <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[135.19999999999982px] pr-5 pl-[34px] box-border max-w-full smm:px-5 mq450:pb-[57px] mq450:box-border mq1275:pb-[88px] mq1275:box-border mq1440:pb-[94.5px]">
      <div className="flex flex-col items-start justify-start gap-[45px] max-w-full mq900:gap-[22px_45px]">
        <TopRatedCollection
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          handleTabClick={handleTabClick}
        />
        <FrameComponent7 activeTab={activeTab} />
      </div>
    </section>
  );
};
export default TopRated;
