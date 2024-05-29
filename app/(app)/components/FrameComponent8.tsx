// "use client";
// import {
//   FunctionComponent,
//   useMemo,
//   useState,
//   type CSSProperties,
// } from "react";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import { IconButton } from "@mui/material";
// import { addBookmarkInstitutionByUserId } from "../services/bookmark";
// export type FrameComponent8Type = {
//   cMRUniversity?: string;
//   delhiIndia?: string;
//   vector1?: string;

//   /** Style props */
//   propWidth?: CSSProperties["width"];
//   propMinWidth?: CSSProperties["minWidth"];
//   propDisplay?: CSSProperties["display"];
// };

// const FrameComponent8 = ({
//   cMRUniversity,
//   delhiIndia,
//   vector1,
//   propWidth,
//   propMinWidth,
//   propDisplay,
//   activeTab,
//   university,
// }: any) => {
//   const frameDiv1Style: CSSProperties = useMemo(() => {
//     return {
//       width: propWidth,
//     };
//   }, [propWidth]);

//   const delhiIndiaStyle: CSSProperties = useMemo(() => {
//     return {
//       minWidth: propMinWidth,
//       display: propDisplay,
//     };
//   }, [propMinWidth, propDisplay]);
//   const [isBookMarked, setIsBookMarked] = useState(false);
//   const bookmark = (e: any) => {
//     // e.stopPropagation();
//     addBookmarkInstitutionByUserId(1, e.id, activeTab)
//       .then((data: any) => console.log(data))
//       .catch((error: any) => console.error(error));
//     setIsBookMarked(true);
//   };
//   return (
//     <div
//       className="w-[376.9px] flex flex-row items-start justify-between shrink-0 [debug_commit:1de1738] max-w-full gap-[20px] text-left text-11xl text-black font-red-hat-text mt-[20px] mq900:w-full mq1600:mt-[17px]"
//       style={frameDiv1Style}
//     >
//       <div className="max-w-[80%] flex flex-col items-start justify-start gap-[9px] shrink-0 [debug_commit:1de1738]">
//         <div
//           title={cMRUniversity}
//           className="relative mq450:text-lg mq900:text-5xl mq1440:text-[21px] max-w-[90%] whitespace-nowrap overflow-hidden overflow-ellipsis"
//         >
//           {cMRUniversity}
//         </div>
//         <div className="flex flex-row items-start justify-start gap-[13px] text-xl mq1440:text-[14px]">
//           <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0 ">
//             <img
//               className="w-[15px] h-[19px] relative"
//               alt=""
//               src="/vector-7.svg"
//             />
//           </div>
//           <div
//             className="relative inline-block min-w-[98px] mq450:text-base capitalize"
//             style={delhiIndiaStyle}
//           >
//             {delhiIndia}
//           </div>
//         </div>
//       </div>
//       <div
//         onClick={(e) => {
//           e.stopPropagation();

//           bookmark(university);
//         }}
//         className="flex flex-col items-start justify-start  px-0 pb-0"
//       >
//         <IconButton onClick={() => setIsBookMarked((e) => !e)}>
//           {isBookMarked ? (
//             <FavoriteIcon style={{ fontSize: "30px", color: "#DC6A6A" }} />
//           ) : (
//             <FavoriteBorderIcon
//               style={{ fontSize: "30px", color: "#DC6A6A" }}
//             />
//           )}
//         </IconButton>
//       </div>
//     </div>
//   );
// };

// export default FrameComponent8;

// component
"use client";
import {
  FunctionComponent,
  useMemo,
  useState,
  type CSSProperties,
} from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";
import {
  addBookmarkInstitutionByUserId,
  removeBookmarkInstitutionByUserId,
} from "../services/bookmark"; // import the remove service

export type FrameComponent8Type = {
  cMRUniversity?: string;
  delhiIndia?: string;
  vector1?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propMinWidth?: CSSProperties["minWidth"];
  propDisplay?: CSSProperties["display"];
};

const FrameComponent8 = ({
  cMRUniversity,
  delhiIndia,
  vector1,
  propWidth,
  propMinWidth,
  propDisplay,
  activeTab,
  university,
}: any) => {
  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const delhiIndiaStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
      display: propDisplay,
    };
  }, [propMinWidth, propDisplay]);

  const [isBookMarked, setIsBookMarked] = useState(false);

  const toggleBookmark = async (e: any) => {
    try {
      if (isBookMarked) {
        await removeBookmarkInstitutionByUserId(1, e.id, activeTab);
      } else {
        await addBookmarkInstitutionByUserId(1, e.id, activeTab);
      }
      setIsBookMarked(!isBookMarked);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className="w-[376.9px] flex flex-row items-start justify-between shrink-0 [debug_commit:1de1738] max-w-full gap-[20px] text-left text-11xl text-black font-red-hat-text mt-[20px] mq900:w-full mq1600:mt-[17px]"
      style={frameDiv1Style}
    >
      <div className="max-w-[80%] flex flex-col items-start justify-start gap-[9px] shrink-0 [debug_commit:1de1738]">
        <div
          title={cMRUniversity}
          className="relative mq450:text-lg mq900:text-5xl mq1440:text-[21px] max-w-[90%] whitespace-nowrap overflow-hidden overflow-ellipsis"
        >
          {cMRUniversity}
        </div>
        <div className="flex flex-row items-start justify-start gap-[13px] text-xl mq1440:text-[14px]">
          <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0 ">
            <img
              className="w-[15px] h-[19px] relative"
              alt=""
              src="/vector-7.svg"
            />
          </div>
          <div
            className="relative inline-block min-w-[98px] mq450:text-base capitalize"
            style={delhiIndiaStyle}
          >
            {delhiIndia}
          </div>
        </div>
      </div>
      <div
        onClick={(e) => {
          e.stopPropagation();
          toggleBookmark(university);
        }}
        className="flex flex-col items-start justify-start  px-0 pb-0"
      >
        <IconButton>
          {isBookMarked ? (
            <FavoriteIcon style={{ fontSize: "30px", color: "#DC6A6A" }} />
          ) : (
            <FavoriteBorderIcon
              style={{ fontSize: "30px", color: "#DC6A6A" }}
            />
          )}
        </IconButton>
      </div>
    </div>
  );
};

export default FrameComponent8;
