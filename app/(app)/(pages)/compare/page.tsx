import type { NextPage } from "next";
import { Suspense } from "react";
import CompareInstitutions from "./components/Table";

const CompareInstitutionsV: NextPage = () => {
  return (
    <Suspense>
      <div className="px-6 md:px-[150px] bg-white overflow-hidden flex flex-col items-start justify-start">
        <div className="w-full flex flex-col items-start justify-start gap-8 ">
          <div className="flex mt-10 justify-between  w-full">
            <h3 className="   font-bold">{`Hey {Name}👋`}</h3>
            <div className="block md:hidden">
              <div className="flex  flex-row items-start justify-start gap-x-1 ">
                <div className="flex flex-col items-start justify-start pt-[9px] ">
                  <img
                    className=" h-5 w-5 relative "
                    alt=""
                    src="/logout.png"
                  />
                </div>
                <div className="relative inline-block  whitespace-nowrap text-indianred">
                  Log Out
                </div>
              </div>
            </div>
          </div>
          {/* to be used for Tab  */}
          {/* <TabSection /> */}
          <div className="md:border w-full flex justify-between h-full md:h-16 items-center text-[#272761] ">
            <div className="flex flex-col items-start  md:flex-row w-full h-full px-5   justify-start gap-x-8  gap-y-3 md:gap-y-0 ">
              <div className="h-full flex items-center md:border-b md:border-b-[#272761] ">
                <a href="/dashboard"> Dashboard </a>
              </div>

              <div className="h-full flex items-center  ">
                <a href="/account"> Account Details </a>
              </div>
            </div>
            <div className="h-full  text-white ">
              <button className=" text-nowrap hidden md:block bg-indianred w-full h-full px-8">
                <div className="flex justify-center items-center gap-2">
                  <img
                    className=" h-5 w-5 relative "
                    alt=""
                    src="/logout.png"
                  />
                  Log Out
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className=" w-full mt-10">
          <CompareInstitutions />
        </div>
        {/* <Footer /> */}
      </div>
    </Suspense>
  );
};

export default CompareInstitutionsV;
