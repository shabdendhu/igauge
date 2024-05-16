import type { NextPage } from "next";
import MainContainer from "./components/main-container";

import NameInputField from "./components/name-input-field";
import DashboardLayout from "./components/dashboard-layout";
import IgaugeinvertedRGB from "./components/igaugeinverted-r-g-b";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TabSection from "../../components/TabSection";
import TabBar from "../../components/v1/TabBar";

const AccountDetails: NextPage = () => {
  return (
    <div className=" flex flex-col px-6 md:px-[150px] mt-10">
      <TabBar />

      <NameInputField />
    </div>
  );
};

export default AccountDetails;
{
  /* <TabSection />
          <NameInputField />
          <DashboardLayout /> */
}
