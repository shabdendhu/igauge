import { FunctionComponent } from "react";
import FrameComponent6 from "./FrameComponent6";

const cities = [
  {
    title: "Delhi",
    image: "/rectangle-161-1@2x.png",
  },
  {
    title: "Bangalore",
    image: "/rectangle-162-1@2x.png",
  },
  {
    title: "Mumbai",
    image: "/rectangle-163-1@2x.png",
  },
  {
    title: "Chennai",
    image: "/rectangle-164-1@2x.png",
  },
  {
    title: "Pune",
    image: "/rectangle-165-1@2x.png",
  },
  {
    title: "Nagpur",
    image: "/rectangle-166@2x.png",
  },
  {
    title: "Hyderabad",
    image: "/rectangle-167@2x.png",
  },
  {
    title: "Kolkata",
    image: "/rectangle-168@2x.png",
  },
];

const Card = ({ title, image }: { title: string; image: string }) => {
  return (
    <div className="max-w-[390px] flex flex-row items-start justify-start pt-[58px] px-[38px] pb-14 box-border relative max-w-full relative">
      <div className="absolute h-full  z-[2] w-full left-0 top-0 inset-0 bg-[#00000042]" />

      <img
        className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-8xs max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={image}
      />
      <div className="w-[190px] relative font-semibold inline-block shrink-0 z-[1] mq450:text-lgi z-[4]">
        {title}
      </div>
    </div>
  );
};

const CardsSection = ({ pageData }: any) => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[79px] max-w-full text-left text-5xl text-white font-red-hat-text mq450:gap-[20px_79px] mq900:gap-[39px_79px]">
      <div className="w-full grid grid-cols-12  gap-[30px_28.7px] min-h-[322px] shrink-0 [debug_commit:1de1738] max-w-full mq900:grid-cols-3">
        {pageData.content[7].cities.map((city: any) => (
          <div className="col-span-3" key={city.image}>
            <Card title={city.city.text} image={city.city.image.url} />
          </div>
        ))}
      </div>
      <FrameComponent6 prop="/19-1.svg" />
    </div>
  );
};
// const CardsSection: FunctionComponent = () => {
//   return (
//     <div className="self-stretch flex flex-col items-start justify-start gap-[79px] max-w-full text-left text-5xl text-white font-red-hat-text mq450:gap-[20px_79px] mq900:gap-[39px_79px]">
//       <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[30px_28.7px] min-h-[322px] shrink-0 [debug_commit:1de1738] max-w-full">
//         <div className="w-[390px] flex flex-row items-start justify-start pt-[58px] px-[38px] pb-14 box-border relative max-w-full">
//           <img
//             className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-8xs max-w-full overflow-hidden max-h-full object-cover"
//             alt=""
//             src="/rectangle-161-1@2x.png"
//           />
//           <div className="w-[190px] relative font-semibold inline-block shrink-0 z-[1] mq450:text-lgi">
//             Delhi
//           </div>
//         </div>
//         <div className="w-[390px] flex flex-row items-start justify-start pt-[58px] px-[38px] pb-14 box-border relative max-w-full">
//           <img
//             className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-8xs max-w-full overflow-hidden max-h-full object-cover"
//             alt=""
//             src="/rectangle-162-1@2x.png"
//           />
//           <div className="w-[190px] relative font-semibold inline-block shrink-0 z-[1] mq450:text-lgi">
//             Bangalore
//           </div>
//         </div>
//         <div className="w-[390px] flex flex-row items-start justify-start pt-[58px] px-[38px] pb-14 box-border relative max-w-full">
//           <img
//             className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-8xs max-w-full overflow-hidden max-h-full object-cover"
//             alt=""
//             src="/rectangle-163-1@2x.png"
//           />
//           <div className="w-[190px] relative font-semibold inline-block shrink-0 z-[1] mq450:text-lgi">
//             Mumbai
//           </div>
//         </div>
//         <div className="w-[390px] flex flex-row items-start justify-start pt-[58px] px-[38px] pb-14 box-border relative max-w-full">
//           <img
//             className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-8xs max-w-full overflow-hidden max-h-full object-cover"
//             alt=""
//             src="/rectangle-164-1@2x.png"
//           />
//           <div className="w-[190px] relative font-semibold inline-block shrink-0 z-[1] mq450:text-lgi">
//             Chennai
//           </div>
//         </div>
//         <div className="w-[390px] flex flex-row items-start justify-start pt-[58px] px-[38px] pb-14 box-border relative max-w-full">
//           <img
//             className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-8xs max-w-full overflow-hidden max-h-full object-cover"
//             alt=""
//             src="/rectangle-165-1@2x.png"
//           />
//           <div className="w-[190px] relative font-semibold inline-block shrink-0 z-[1] mq450:text-lgi">
//             Pune
//           </div>
//         </div>
//         <div className="w-[390px] flex flex-row items-start justify-start pt-[58px] px-[38px] pb-14 box-border relative max-w-full">
//           <img
//             className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-8xs max-w-full overflow-hidden max-h-full object-cover"
//             loading="lazy"
//             alt=""
//             src="/rectangle-166@2x.png"
//           />
//           <div className="w-[190px] relative font-semibold inline-block shrink-0 z-[1] mq450:text-lgi">
//             Nagpur
//           </div>
//         </div>
//         <div className="w-[390px] flex flex-row items-start justify-start pt-[58px] px-[38px] pb-14 box-border relative max-w-full">
//           <img
//             className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-8xs max-w-full overflow-hidden max-h-full object-cover"
//             loading="lazy"
//             alt=""
//             src="/rectangle-167@2x.png"
//           />
//           <div className="w-[190px] relative font-semibold inline-block shrink-0 z-[1] mq450:text-lgi">
//             Hyderabad
//           </div>
//         </div>
//         <div className="w-[390px] flex flex-row items-start justify-start pt-[58px] px-[38px] pb-14 box-border relative max-w-full">
//           <img
//             className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-8xs max-w-full overflow-hidden max-h-full object-cover"
//             loading="lazy"
//             alt=""
//             src="/rectangle-168@2x.png"
//           />
//           <div className="w-[190px] relative font-semibold inline-block shrink-0 z-[1] mq450:text-lgi">
//             Kolkata
//           </div>
//         </div>
//       </div>
//       <FrameComponent6 prop="/19-1.svg" propDebugCommit="unset" />
//     </div>
//   );
// };

export default CardsSection;
