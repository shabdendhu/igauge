import type { NextPage } from "next";

import IgaugeinvertedRGBGaugeTwi from "./sub-components/HeroSection";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BookmarkInstitutionCompariso from "./sub-components/bookmark-institution-compariso";
import TabSection from "../../components/TabSection";
import TabBar from "@/app/(app)/components/v1/TabBar";
const Dashboard: NextPage = () => {
  return (
    <div className="px-6 md:px-20 bg-white overflow-hidden flex flex-col items-start justify-start xl:px-[150px] md:px-[100px]">
      <TabBar />
      {/* </section> */}
      <div className="grid grid-cols-1 md:grid-cols-2 md:flex-row w-full pt-8 gap-9 mt-3 xl:mt-[80px]">
        <BookmarkInstitutionCompariso
          historyYellowOval1="/historyyellowoval-1.svg"
          bookmarkInstitutions="Bookmark Institutions "
          viewFavorite="View Favorite"
        />
        <BookmarkInstitutionCompariso
          historyYellowOval1="/files-yellow-1.svg"
          bookmarkInstitutions="Compare Institutions"
          viewFavorite="Compare"
          propPadding="0px 0px 0px 13px"
        />
      </div>
    </div>
  );
};

export default Dashboard;
