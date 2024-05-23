"use client";
import type { NextPage } from "next";
import FrameComponent2 from "./components/frame-component22";
import FrameComponent1 from "./components/frame-component13";
import FrameComponent from "./components/frame-component12";
import ExceptionHandling from "./components/exception-handling";
import ShapeScaler1 from "./components/shape-scaler1";
import ShapeScaler from "./components/shape-scaler";
import LogicalProgramming from "./components/logical-programming";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import CompareInstitutions from "./components/Table";
import InsitutionCard from "@/app/(app)/(pages)/bookmarked/components/Card";
import { useCalculateFontSize } from "../../hooks/use-calculate-font-size";
import TabBar from "../../components/v1/TabBar";
import Card from "@/app/(app)/(pages)/university-search/sub-components/Card";
import { useEffect, useState } from "react";
import { getBookmarkedInstitutionsByUserId } from "../../services/bookmark";
import { fetchData } from "../../services/institution";
function convertInstitutionData(data: any) {
  // Create an object to hold the institutionType as keys and an array of ids as values
  const resultDict: any = {};

  // Loop through each item in the input array
  data.forEach((item: any) => {
    // If the institutionType hasn't been added to the resultDict, initialize it
    if (!resultDict[item.institutionType]) {
      resultDict[item.institutionType] = [];
    }
    // Push the institutionId into the array corresponding to the institutionType
    resultDict[item.institutionType].push(item.institutionId);
  });

  // Convert the dictionary into an array format suitable for the output
  const resultArray = Object.keys(resultDict).map((key) => ({
    institutionType: key,
    ids: resultDict[key],
  }));

  return resultArray;
}

const CompareInstitutionsV: NextPage = () => {
  const fontSize = useCalculateFontSize();
  const [institution, setInstitutions] = useState<any>([]);
  // useEffect(() => {
  //   getBookmarkedInstitutionsByUserId(1).then((res) => {
  //     const data = convertInstitutionData(res);
  //     const inst: any = [];
  //     data.forEach((e) => {
  //       fetchData(e.institutionType, {
  //         filter: {
  //           id: {
  //             in: e.ids,
  //           },
  //         },
  //       }).then((res: any) => {
  //         inst.push({ institution: res.docs, type: e.institutionType });
  //         setInstitutions((prevInstitutions: any) => [
  //           ...prevInstitutions,
  //           { institution: res.docs, type: e.institutionType },
  //         ]);
  //         // setInstitutions(res);
  //       });
  //     });
  //     console.log(inst);
  //     // fetchData()
  //   });
  // }, []);

  useEffect(() => {
    const fetchDataAndSetInstitutions = async () => {
      try {
        const bookmarkedInstitutions = await getBookmarkedInstitutionsByUserId(
          1
        );
        const data = convertInstitutionData(bookmarkedInstitutions);

        for (const e of data) {
          const res = await fetchData(e.institutionType, {
            filter: {
              id: {
                in: e.ids,
              },
            },
            depth: 4,
          });

          setInstitutions((prevInstitutions: any) => {
            const newInstitutions = [...prevInstitutions];
            const existingIndex = newInstitutions.findIndex(
              (inst) => inst.type === e.institutionType
            );

            if (existingIndex !== -1) {
              const updatedInstitutionList = res.docs.filter((doc: any) => {
                return !newInstitutions[existingIndex].institution.some(
                  (existingInst: any) => existingInst.id === doc.id
                );
              });
              newInstitutions[existingIndex].institution = [
                ...newInstitutions[existingIndex].institution,
                ...updatedInstitutionList,
              ];
            } else {
              newInstitutions.push({
                institution: res.docs,
                type: e.institutionType,
              });
            }

            return newInstitutions;
          });
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataAndSetInstitutions();
  }, []);

  useEffect(() => {
    console.log(institution);
  }, [institution]);

  return (
    <div className="px-6 md:px-[150px] bg-white overflow-hidden flex flex-col items-start justify-start">
      <TabBar />
      {/* <div className="w-full flex flex-col items-start justify-start gap-8 ">
        <div className="flex mt-10 justify-between  w-full">
          <h3
            style={{
              fontSize: fontSize(36, 20, 1920, 400),
            }}
            className="   font-bold"
          >{`Hey {Name}👋`}</h3>
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
        <div className="md:border w-full flex justify-between items-center text-[#272761] h-[111px]">
          <div
            style={{
              fontSize: fontSize(32, 15, 1920, 400),
            }}
            className="flex flex-col items-start  md:flex-row w-full h-full px-5   justify-start gap-x-8  gap-y-3 md:gap-y-0 "
          >
            <div className="h-full flex items-center md:border-b md:border-b-[#272761] ">
              <a href="/dashboard"> Dashboard </a>
            </div>

            <div className="h-full flex items-center  ">
              <a href="/account"> Account Details </a>
            </div>
          </div>

          <button className=" text-nowrap hidden md:block bg-indianred h-full px-8 aspect-[250/111] text-white">
            <div className="flex justify-center items-center gap-2">
              <img className=" h-5 w-5 relative " alt="" src="/logout.png" />
              Log Out
            </div>
          </button>
        </div>
      </div> */}
      <div className=" w-full mt-10">
        <div className="flex justify-between  h-16 mb-5">
          <div className="flex justify-start ">
            <h1
              style={{
                fontFamily: "Red Hat Text",
                fontSize: fontSize(48, 24, 1920, 400),
                fontWeight: 400,
                lineHeight: "63.5px",
                textAlign: "left",
              }}
              className=""
            >
              Bookmarked Institutions
            </h1>
          </div>
          <div className="h-10">
            <button className=" text-nowrap hidden md:block bg-orange-200 w-full h-full px-5 ">
              <div className="flex justify-center items-center gap-2">
                <img className=" h-4 w-4 relative " alt="" src="/logout.png" />
                Back
              </div>
            </button>
          </div>
        </div>
        {/* <CompareInstitutions /> */}
        <div className="flex flex-col gap-10 py-20">
          {institution.map((e: any, i: any) => (
            <>
              {e.institution.map((item: any) => (
                <Card
                  key={item?.id + e?.type}
                  university={item}
                  filters={{ type: { institution_type: e?.type } }}
                />
              ))}
            </>
            // <Card key={i} university={e} filters={} />
          ))}

          {/* <InsitutionCard
            university={{ institution_type: [], keypoints: [] }}
          />{" "}
          <InsitutionCard
            university={{ institution_type: [], keypoints: [] }}
          />{" "}
          <InsitutionCard
            university={{ institution_type: [], keypoints: [] }}
          />{" "}
          <InsitutionCard
            university={{ institution_type: [], keypoints: [] }}
          />{" "}
          <InsitutionCard
            university={{ institution_type: [], keypoints: [] }}
          />{" "}
          <InsitutionCard
            university={{ institution_type: [], keypoints: [] }}
          />{" "}
          <InsitutionCard
            university={{ institution_type: [], keypoints: [] }}
          /> */}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default CompareInstitutionsV;

// <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start gap-[96px] leading-[normal] tracking-[normal] mq900:gap-[24px] mq1275:gap-[48px]">
//   <div className="px-[100px] self-stretch flex flex-col items-start justify-start gap-[45px] max-w-full mq450:gap-[22px_45px]">
//     <h3 className="m-0 relative text-inherit font-bold font-inherit mq900:text-3xl mq450:text-10xl">{`Hey {Name}👋`}</h3>
//     <div className="self-stretch  rounded-8xs bg-white box-border overflow-x-auto shrink-0 flex flex-row items-start justify-between pt-[20px] pb-0 pr-0.5 pl-[20px] gap-[20px] max-w-full text-13xl text-darkslateblue font-red-hat-text border-[1px] border-solid border-whitesmoke-200 mq450:h-auto mq1275:pl-[27px] mq1275:box-border text-[21px]">
//       <div className=" relative rounded-8xs bg-white box-border shrink-0 hidden border-[1px] border-solid border-whitesmoke-200" />
//       <div className="w-[156px] shrink-0 flex flex-col items-start justify-start gap-[35px]">
//         <div className="relative z-[1] mq900:text-lgi mq450:text-7xl">
//           Dashboard
//         </div>
//         <div className="self-stretch h-0.5 relative box-border border-t-[2px] border-solid border-darkslateblue" />
//       </div>
//       <div className="w-[761px] shrink-0 flex flex-row items-start justify-start py-0 pr-[109px] pl-0 box-border gap-[173px] max-w-[calc(100%_-_442px)] text-darkslategray-200 mq900:gap-[173px_43px] mq900:pr-5 mq900:box-border mq450:flex-wrap mq450:gap-[173px_86px] mq450:pr-[54px] mq450:box-border">
//         <div className="relative z-[1] mq900:text-lgi mq450:text-7xl">
//           Account Details
//         </div>
//         <div className="relative z-[1] mq900:text-lgi mq450:text-7xl">
//           Change Password
//         </div>
//       </div>
//       <button className="mt-[-35px] cursor-pointer [border:none] pt-[39px] pb-[30px] pr-[30px] pl-[20px] bg-indianred rounded-tl-none rounded-tr-8xs rounded-br-8xs rounded-bl-none flex flex-row items-start justify-start gap-[11.800000000000182px] z-[2]">
//         <div className="relative text-7xl-7 font-red-hat-text text-indianred text-left hidden min-w-[100px] mq900:text-2xl">
//           Log Out
//         </div>
//         <img
//           className="h-[23.8px] w-[19px] relative hidden"
//           alt=""
//           src="/vector.svg"
//         />
//         <div className="h-28 w-[246px] relative rounded-tl-none rounded-tr-8xs rounded-br-8xs rounded-bl-none bg-indianred hidden" />
//         <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
//           <img
//             className="w-[19px] h-[23.8px] relative z-[1]"
//             alt=""
//             src="/vector-5.svg"
//           />
//         </div>
//         <div className="relative text-7xl-7 font-red-hat-text text-white text-left inline-block min-w-[100px] z-[1] mq900:text-2xl">
//           Log Out
//         </div>
//       </button>
//     </div>
//   </div>
//   <div className="px-[100px] w-full">
//     <h1 className="text-xl font-bold text-gray-900 mb-[40px]">
//       Compare Institutions
//     </h1>
//     <CompareInstitutions />
//   </div>
//   <Footer />
// </div>
