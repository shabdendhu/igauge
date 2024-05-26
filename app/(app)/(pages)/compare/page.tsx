import type { NextPage } from "next";
import { Suspense } from "react";
import CompareInstitutions from "./components/Table";
import TabBar from "../../components/v1/TabBar";

const CompareInstitutionsV: NextPage = () => {
  return (
    <Suspense>
      <div className="px-6 md:px-[150px] bg-white overflow-hidden flex flex-col items-start justify-start">
        <TabBar activeTab={"dashboard"} />
        <div className=" w-full mt-10">
          <CompareInstitutions />
        </div>
        {/* <Footer /> */}
      </div>
    </Suspense>
  );
};

export default CompareInstitutionsV;
