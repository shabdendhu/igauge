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

const CompareInstitutionsV: NextPage = () => {
  return (
    <div className="px-6 md:px-[150px] bg-white overflow-hidden flex flex-col items-start justify-start">
      <div className="w-full flex flex-col items-start justify-start gap-8 ">
        <div className="flex mt-10 justify-between  w-full">
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
                <img className=" h-5 w-5 relative " alt="" src="/logout.png" />
                Log Out
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className=" w-full mt-10">
        <div className="flex justify-between  h-16 mb-5">
          <div className="flex justify-start ">
            <h1 className="text-xl font-bold text-gray-900 ">
              Compare Institutions
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
        <div>
          <div className="border border-red-500 w-full flex ">
            <div className="border border-blue-500 w-1/5  aspect-square mq900:w-1/3">
              <img src="/rectangle-161-1@2x.png" className="w-full h-full" />
            </div>
            <div className="border border-green-500 w-4/5 mq900:w-2/3">B</div>
          </div>
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
