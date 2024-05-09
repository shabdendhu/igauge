import type { NextPage } from "next";
import MainContainer from "./components/main-container";

import NameInputField from "./components/name-input-field";
import DashboardLayout from "./components/dashboard-layout";
import IgaugeinvertedRGB from "./components/igaugeinverted-r-g-b";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TabSection from "../../components/TabSection";

const AccountDetails: NextPage = () => {
  return (
    <div className=" flex flex-col px-6 md:px-[150px] mt-10">
      <div>
        <div className="flex  mb-8 justify-between  w-full">
          <h3 className="   font-bold">{`Hey {Name}👋`}</h3>
          <div className="block md:hidden">
            <div className="flex  flex-row items-start justify-start gap-x-1 ">
              <div className="flex flex-col items-start justify-start pt-[9px] ">
                <img className=" h-5 w-5 relative " alt="" src="/logout.png" />
              </div>
              <div className="relative inline-block  whitespace-nowrap text-indianred">
                Log Out
              </div>
            </div>
          </div>
        </div>
        <TabSection />
      </div>
      <div>
        <NameInputField />
      </div>
    </div>
  );
};

export default AccountDetails;
{
  /* <TabSection />
          <NameInputField />
          <DashboardLayout /> */
}
