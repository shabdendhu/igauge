/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import FrameComponent7 from "../../components/FrameComponent7";

const SignInApproved: NextPage = () => {
  return (
    <>
      <div className="w-full bg-white  flex  justify-between items-center  md:pl-20  ">
        <div className="flex flex-col sm:grid sm:grid-cols-10  w-full h-full">
          <div className="flex justify-center sm:grid sm:col-span-4  font-semibold  items-center w-full p-14 ">
            <div className="w-full  min-w-auto">
              <form action="submit" className="flex flex-col gap-y-6 ">
                <h3 className=" font-bold font-libre-baskerville text-[20px] sm:text-[36px] text-center">
                  Sign up to your Account
                </h3>
                <input
                  className="h-[52px]  border-2 font-normal pl-2 capitalize rounded-sm"
                  placeholder="Name"
                  type="text"
                />
                <input
                  className="h-[52px]  border-2 font-normal pl-2 rounded-sm"
                  placeholder="Phone Number"
                  type="number"
                />

                <button className="cursor-pointer py-4 px-5 bg-orange-200  rounded-md justify-center hover:scale-105 active:scale-95">
                  Sign Up
                </button>

                <div>
                  Already have an Account ? &nbsp;
                  <span className="underline text-[#272761] text-base">
                    Sign In
                  </span>
                </div>
              </form>
            </div>
          </div>
          <div className="flex xs:grid xs:col-span-6 xs:w-full  overflow-hidden h-[500px] w-full bg-[#272761]">
            <div className="flex flex-col justify-center items-center relative">
              <img
                className="  w-[400px] h-[385px] object-contain "
                loading="lazy"
                alt=""
                src="/image-15@2x.png"
              />
              <div className="h-full w-full flex justify-between z-0 absolute ">
                <div className="h-full border-r-[0.6px] border-gray-100/5 " />
                <div className="h-full border-r-[0.6px] border-gray-100/5 " />
                <div className="h-full border-r-[0.6px] border-gray-100/5 " />
                <div className="h-full border-r-[0.6px] border-gray-100/5 " />
                <div className="h-full border-r-[0.6px] border-gray-100/5 " />
                <div className="h-full border-r-[0.6px] border-gray-100/5 " />
                <div className="h-full border-r-[0.6px] border-gray-100/5 " />
                <div className="h-full border-r-[0.6px] border-gray-100/5 " />
                <div className="h-full border-r-[0.6px] border-gray-100/5 " />
              </div>
              <div className="px-16 font-libre-baskerville pb-3 z-0">
                <p className="text-center text-white">
                  “Universities exist to transmit knowledge and understanding of
                  ideas and values to students not to provide entertainment for
                  spectators or employment for athletes.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInApproved;

// <div className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start leading-[normal] tracking-[normal]">

//   {/* <section className="w-full flex flex-row items-start justify-between py-0 pr-0 pl-5 box-border max-w-full gap-[20px] text-center text-17xl text-black font-libre-baskerville mq1625:flex-wrap">
//     <div className="flex flex-col items-start justify-start pt-[321px] px-0 pb-0 box-border min-w-[445px] max-w-full mq900:pt-[209px] mq900:box-border mq900:min-w-full mq1625:flex-1">
//       <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-2.5 box-border gap-[42px] shrink-0 [debug_commit:1de1738] max-w-full mq1275:gap-[21px_42px]">
//         <div className="self-stretch flex flex-col items-start justify-start gap-[26.5px] max-w-full">
//           <h3 className="m-0 relative text-inherit font-bold font-inherit mq900:text-10xl mq1275:text-3xl">
//             Sign up to your Account
//           </h3>
//           <div className="self-stretch rounded-8xs bg-white box-border flex flex-row items-start justify-start py-[26px] px-[30px] max-w-full border-[1px] border-solid border-whitesmoke-200">
//             <div className="h-[82px] relative rounded-8xs bg-white box-border hidden max-w-full border-[1px] border-solid border-whitesmoke-200" />
// <input
//   className="w-[136px] [border:none] [outline:none] font-red-hat-text text-xl bg-[transparent] h-[26px] relative text-darkslategray-100 text-left inline-block p-0 z-[1] mq1275:text-base"
//   placeholder="Name"
//   type="text"
// />
//           </div>

//           <div className="self-stretch rounded-8xs bg-white box-border flex flex-row items-start justify-start py-[26px] px-[30px] max-w-full border-[1px] border-solid border-whitesmoke-200">
//             <div className="h-[82px] relative rounded-8xs bg-white box-border hidden max-w-full border-[1px] border-solid border-whitesmoke-200" />
//             <input
//               className="w-[136px] [border:none] [outline:none] font-red-hat-text text-xl bg-[transparent] h-[26px] relative text-darkslategray-100 text-left inline-block p-0 z-[1] mq1275:text-base"
//               placeholder="Phone Number"
//               type="text"
//             />
//           </div>
//           <button className="cursor-pointer py-[26px] px-5 bg-orange-200 self-stretch rounded-8xs box-border flex flex-row items-start justify-center whitespace-nowrap max-w-full border-[1px] border-solid border-whitesmoke-200 hover:bg-chocolate-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-lightgray-200">
//             <div className="h-[82px] relative rounded-8xs bg-orange-200 box-border hidden max-w-full border-[1px] border-solid border-whitesmoke-200" />
//             <div className="relative text-xl font-semibold font-red-hat-text text-black text-center inline-block min-w-[64px] z-[1]">
//               Sign In
//             </div>
//           </button>
//         </div>
//         <div className="flex flex-row items-start justify-start py-0 px-1 text-left text-xl font-red-hat-text">
//           <div className="relative font-semibold mq1275:text-base">
//             <span>{`Don’t have an Account? `}</span>
//             <span className="[text-decoration:underline] text-darkslateblue">
//               Sign Up
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>

//     <div className="bg-[#272761] overflow-x-auto shrink-0 flex flex-row items-start justify-start pt-0 px-0 pb-[3px] box-border max-w-full z-[1] text-center text-10xl-5 text-white font-libre-baskerville mq900:gap-[126.4px_32px] mq450:gap-[126.4px_63px] mq450:min-w-full mq1275:gap-[126.4px_16px] mq1625:flex-1">
//       <div className="h-[983.6px] w-[1.6px] relative box-border shrink-0 [debug_commit:1de1738] border-r-[1.6px] border-solid border-[#FFFFFF0A]" />
//       <div className="w-[891.6px] overflow-x-auto shrink-0 flex flex-row items-start justify-start relative mb-[-2px] pb-0.5">
//         <img
//           className="h-[576px] w-[706px] absolute !m-[0] top-[79px] left-[28px] shrink-0 object-cover"
//           loading="lazy"
//           alt=""
//           src="/image-161@2x.png"
//         />
//         <div className="h-[calc(100%_+_1.6px)] w-[1.6px] absolute !m-[0] top-[0px] bottom-[-1.6px] left-[63px] box-border shrink-0 border-r-[1.6px] border-solid border-[#FFFFFF0A]" />
//         <div className="h-[calc(100%_+_1.6px)] w-[1.6px] absolute !m-[0] top-[0px] bottom-[-1.6px] left-[254px] box-border shrink-0 border-r-[1.6px] border-solid border-[#FFFFFF0A]" />
//         <div className="h-[calc(100%_+_1.6px)] w-[1.6px] absolute !m-[0] top-[0px] bottom-[-1.6px] left-[calc(50%_-_0.8px)] box-border shrink-0 border-r-[1.6px] border-solid border-[#FFFFFF0A]" />
//         <div className="h-[calc(100%_+_1.6px)] w-[1.6px] absolute !m-[0] top-[0px] right-[254px] bottom-[-1.6px] box-border shrink-0 border-r-[1.6px] border-solid border-[#FFFFFF0A]" />
//         <div className="pl-[150px] w-[891.6px] shrink-0 flex flex-row items-end justify-start py-0 pr-[63px] pl-0 box-border gap-[2px] [debug_commit:1de1738]">
//           <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[84px] box-border min-h-[291px]  shrink-0">
//             <div className="self-stretch flex flex-col items-start justify-start gap-[18.400000000000546px]">
//               <div className="self-stretch flex flex-row items-start justify-center py-0 pr-6 pl-5">
//                 <div className="h-[42.4px] w-[56.5px] relative">
//                   <img
//                     className="absolute top-[0px] left-[0px] w-[26.5px] h-[42.4px]"
//                     alt=""
//                     src="/vector-51.svg"
//                   />
//                   <img
//                     className="absolute top-[0px] left-[30px] w-[26.5px] h-[42.4px]"
//                     alt=""
//                     src="/vector-51.svg"
//                   />
//                 </div>
//               </div>
//               <b className="self-stretch relative mq1275:text-5xl text-[20.486px]">
//                 “Universities exist to transmit knowledge and understanding
//                 of ideas and values to students not to provide entertainment
//                 for spectators or employment for athletes.”
//               </b>
//             </div>
//           </div>
//           <div className="h-[983.6px] w-[1.6px] relative box-border border-r-[1.6px] border-solid border-[#FFFFFF0A]" />
//         </div>
//       </div>
//       <div className="h-[982px] w-[64.6px] shrink-0 flex flex-col items-start justify-start">
//         <div className="w-[1.6px] flex-1 relative box-border shrink-0 [debug_commit:1de1738] border-r-[1.6px] border-solid border-[#FFFFFF0A]" />
//       </div>
//       <div className="h-[982px] w-[64.6px] shrink-0 flex flex-col items-start justify-start">
//         <div className="w-[1.6px] flex-1 relative box-border shrink-0 [debug_commit:1de1738] border-r-[1.6px] border-solid border-[#FFFFFF0A]" />
//       </div>
//       <div className="h-[982px] w-[192.6px] shrink-0 flex flex-row items-start justify-between [debug_commit:1de1738] gap-[20px]">
//         <div className="self-stretch w-[1.6px] relative box-border border-r-[1.6px] border-solid border-[#FFFFFF0A]" />
//         <div className="self-stretch w-[1.6px] relative box-border border-r-[1.6px] border-solid border-[#FFFFFF0A]" />
//       </div>
//     </div>
//   </section> */}
//   {/* <Footer /> */}
// </div>
