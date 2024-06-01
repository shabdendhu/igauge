"use client";
import IconButton from "@mui/material/IconButton";
import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import Button from "@mui/material/Button";
import { useCalculateFontSize } from "@/app/(app)/hooks/use-calculate-font-size";
import { useRouter } from "next/navigation";
import { addBookmarkInstitutionByUserId } from "@/app/(app)/services/bookmark";
const Card = ({ university, filters }: any) => {
  const router = useRouter();
  const fontSize = useCalculateFontSize();
  const [bookmarked, setBookmarked] = useState(false);
  console.log(university);
  const handleClickInstitution = () => {
    router.push(
      `/university-detail?id=${university.id}&institution_type=${filters.type.institution_type}`
    );
  };
  const bookmark = (e: any) => {
    e.stopPropagation();
    addBookmarkInstitutionByUserId(
      1,
      university.id,
      filters.type.institution_type
    )
      .then((data: any) => console.log(data))
      .catch((error: any) => console.error(error));
    setBookmarked(true);
  };
  return (
    <div className="relative">
      <div
        onClick={handleClickInstitution}
        className="border border-[#EAEAEA]-500 flex  aspect-[1333/265] mq450:aspect-[349/133] overflow-hiddenn cursor-pointer"
      >
        <div className="h-full relative aspect-[241/265] mdm:aspect-[110/133] mq450:w-1/3">
          <img
            className="h-full relative rounded-tl-8xs rounded-tr-none rounded-br-none rounded-bl-8xs max-w-full overflow-hidden object-cover z-[1]"
            alt=""
            src={university?.media?.featured_image?.url}
            // src="/rectangle-161@2x.png"
          />
          <div
            className="w-[80%] absolute !m-[0] left-[10%] bottom-[-19px]   z-[4] "
            style={{
              width: "80%",
            }}
          >
            <img
              className="h-full w-full"
              src={university?.ratings?.overall_rating?.ribbon?.url}
            />
          </div>
        </div>

        <div className="tborder border-red-500 flex-1 p-[2%] flex flex-row mq450:flex-col">
          <div className="tborder border-green-500 " style={{ flex: 2 }}>
            <div className="tborder border-pink-500 h-3/4 flex">
              <div className="tborder border-green-500 w-3/4 flex flex-col">
                <div className="tborder border-black-500">
                  <span
                    style={{
                      fontSize: fontSize(16, 7, 1920, 400),
                      textTransform: "capitalize",
                    }}
                    className="bg-orange-200 rounded-8xs font-semibold text-base px-3 py-1 font-red-hat-text text-black mdm:w-[30px] mdm:h-[12px] mdm:text-[6.21px]"
                  >
                    {filters.type.institution_type}
                  </span>
                </div>
                <div className="flex-1 flex items-center">
                  <h2
                    style={{
                      fontSize: fontSize(33, 11, 1920, 400),
                    }}
                    className="tborder border-red-500  text-14xl  font-bold font-libre-baskerville  mdm:text-xs  max-w-[90%] whitespace-nowrap overflow-hidden overflow-ellipsis"
                  >
                    {university?.institution_name.slice(0, 25)}
                    {university?.institution_name.length > 20 ? "..." : ""}
                  </h2>
                </div>
                <div className="tborder border-yellow-500 flex gap-2">
                  <img src="location.svg" className="w-[7px]" />
                  <div
                    style={{
                      fontSize: fontSize(20, 8, 1920, 400),
                      textTransform: "capitalize",
                    }}
                    className="flex-1 mdm:text-[7.61px]"
                  >
                    {university?.city?.city_name},{" "}
                    {university?.state?.state_name}
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                fontSize: fontSize(20, 7, 1920, 400),
              }}
              className="tborder border-red-500 h-1/4 flex justify-between items-end text-xl font-red-hat-text mdm:text-[7px]"
            >
              {university.keypoints.slice(0, 3).map((e: any, i: number) => (
                <div key={i}>{e?.keypoint_title?.KeyPoint_title}</div>
              ))}
            </div>
          </div>
          <div
            className="tborder border-blue-500 flex flex-row"
            style={{ flex: 1 }}
          >
            <div className="tborder border-red-500 flex items-end flex-1 justify-end mq450:hidden">
              <IconButton onClick={bookmark}>
                {bookmarked ? (
                  <FavoriteIcon
                    style={{
                      color: "#DC6A6A",
                      fontSize: fontSize(21, 19, 1920, 400),
                    }}
                  />
                ) : (
                  <FavoriteBorderIcon
                    style={{
                      color: "#DC6A6A",
                      fontSize: fontSize(21, 19, 1920, 400),
                    }}
                  />
                )}
              </IconButton>
            </div>
            <div className="tborder border-green-500  flex flex-col items-center mq450:w-full mq450:flex-row">
              <img src="/image-19@2x.png" className="h-[60%] mdm:h-[50px]" />
              <span className="mdm:flex mdm:flex-row">
                <IconButton>
                  <ArrowCircleLeftIcon
                    style={{
                      color: "#F7A600",
                      backgroundColor: "#000000",
                      borderRadius: "50%",
                      fontSize: fontSize(21, 19, 1920, 400),
                    }}
                  />
                </IconButton>
                <IconButton>
                  <ArrowCircleRightIcon
                    style={{
                      color: "#F7A600",
                      backgroundColor: "#000000",
                      borderRadius: "50%",
                      fontSize: fontSize(21, 19, 1920, 400),
                    }}
                  />
                </IconButton>
              </span>
              <div className="tborder border-red-500 flex items-end flex-1 justify-end xs:hidden">
                <IconButton>
                  <FavoriteBorderIcon
                    style={{
                      color: "#DC6A6A",
                      fontSize: fontSize(21, 19, 1920, 400),
                    }}
                  />
                </IconButton>
              </div>
              <Button
                style={{
                  fontSize: fontSize(14, 6, 1920, 400),
                }}
                className="bg-[#F7A600] h-[40px] font-red-hat-text rounded-none font-normal text-black px-5 mq450:px-3 mq450:h-[20px]"
              >
                Read More{" "}
                <KeyboardDoubleArrowRightIcon
                  style={{
                    fontSize: fontSize(17, 8, 1920, 400),
                  }}
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
