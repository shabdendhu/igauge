import type { NextPage } from "next";
import BookmarkInstitutionCompariso from "./bookmark-institution-compariso";
import TabSection from "@/app/(app)/components/TabSection";

const IgaugeinvertedRGBGaugeTwi: NextPage = () => {
  return (
    <>
      <section className="mx-5 md:mx-24 self-stretch flex flex-row items-start justify-center  box-border max-w-full text-left text-17xl text-black ">
        <div className="w-full flex flex-col items-start justify-start gap-8 ">
          <div className="flex mt-10 justify-between  w-full">
            <h3 className="   font-bold">{`Hey {Name}👋`}</h3>
            <div className="flex  flex-row items-start justify-start gap-x-1 block md:hidden">
              <img className=" h-5 w-5 relative " alt="" src="/logout.png" />
            </div>
            <div className="relative inline-block  whitespace-nowrap text-indianred">
              Log Out
            </div>
          </div>
        </div>
        <div className="md:border w-full flex justify-between h-full md:h-16 items-center text-[#272761] ">
          <div className="flex flex-col items-start  md:flex-row w-full h-full px-5   justify-start gap-x-8  gap-y-3 md:gap-y-0 ">
            <div className="h-full flex items-center  md:border-b md:border-b-[#272761] ">
              Dashboard
            </div>
            <div className="h-full flex items-center">Account Details</div>
            <div className="h-full flex items-center">Change Password</div>
          </div>
          <div className="h-full  text-white ">
            <button className=" text-nowrap hidden md:block bg-indianred w-full h-full px-8">
              <div className="flex justify-center items-center gap-1">
                <img
                  className="min-w-[7px] h-1 relative "
                  alt=""
                  src="/vector-5.svg"
                />
                Log Out
              </div>
            </button>
          </div>
        </div>
      </section>
      <div className="flex flex-col md:flex-row w-full p-7 gap-9 mt-3">
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
    </>
  );
};

export default IgaugeinvertedRGBGaugeTwi;

{
  /* <TabSection /> */
}
{
  /* <div className="flex justify-between border border-green-700 px-12">
          <div className="flex text-nowrap  items-center justify-start  h-20 w-auto  ">
            <div className="w-[156px] h-full shrink-0 flex flex-col items-center justify-center gap-[35px] border-b border-b-[#272761]">
              <div className="">Dashboard</div>
              {/* <div className="self-stretch w-auto h-0.5 relative box-border border-t-[2px] border-solid border-darkslateblue" />
            <div className="w-[761px] shrink-0 flex flex-row items-start justify-start py-0 pr-[109px] pl-0 box-border gap-[173px] max-w-[calc(100%_-_442px)] text-darkslategray-200 ">
              <div className="relative ">Account Details</div>
              <div className="relative">Change Password</div>
            </div>
          </div>
          <div>
            <button className="cursor-pointer  bg-indianred h-full w-[156px] ">
              log out
               <div className="relative text-7xl-7 font-red-hat-text text-indianred text-left hidden min-w-[100px] mq900:text-2xl">
                Log Out
              </div>
              <img
                className="h-[23.8px] w-[19px] relative hidden"
                alt=""
                src="/vector.svg"
              />
              <div className="h-28 w-[246px] relative rounded-tl-none rounded-tr-8xs rounded-br-8xs rounded-bl-none bg-indianred hidden" />
              <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                <img
                  className="w-[19px] h-[23.8px] relative z-[1]"
                  alt=""
                  src="/vector-5.svg"
                />
              </div>
              <div className="relative text-7xl-7 font-red-hat-text text-white text-left inline-block min-w-[100px] z-[1] mq900:text-2xl">
                Log Out
              </div> 
            </button>
          </div>
        </div> */
}
{
  /* <div className="self-stretch flex flex-row items-start justify-start gap-[62px] max-w-full text-29xl font-red-hat-text mq900:gap-[62px_15px] mq450:gap-[62px_31px] mq1625:flex-wrap">
          <BookmarkInstitutionCompariso
            historyYellowOval1="/historyyellowoval-1.svg"
            bookmarkInstitutions="Bookmark Institutions "
            viewFavorite="View Favorite"
          />
          <BookmarkInstitutionCompariso
            historyYellowOval1="/files-yellow-1.svg"
            bookmarkInstitutions="Compare Institutions"
            viewFavorite="Compare"
            propPadding="0px 0px 0px 9px"
            propWidth="285px"
            propMaxHeight="unset"
            propHeight="338px"
            propMinWidth="86px"
          />
        </div> */
}
