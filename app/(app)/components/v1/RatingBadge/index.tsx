import React from "react";
const colors: any = {
  diamond: "#86A4C8",
  gold: "#D0B027",
  platinum: "#E1D9D9",
  silver: "#A6A8A2",
  bronze: "#FF9843",
};

const ratingSystems: any = {
  university: "Indian University Rating",
  college: "Indian College Rating",
  school: "Indian School Rating",
  "university-college": "Indian University & College Rating",
};

const RatingBadge = ({ badgeName, ratingName, ratedBy }: any) => {
  return (
    <div>
      <div className="flex flex-col justify-between bg-[#002B59] aspect-[170/120] p-3 text-white min-w-[200px]">
        <div
          style={{
            color: colors[badgeName?.toLowerCase()] || "#86A4C8",
          }}
          className="font-bold uppercase"
        >
          {badgeName}
        </div>
        <div className="text-[10px]">{ratingName}</div>
        <img src="/I-gauge-inverted-RGB.svg" className="w-[70%]" />
        <div className="text-[7px] ">
          {ratingSystems[ratedBy] || "Indian University Rating"}
        </div>
      </div>
      {/* <p className="mt-4 capitalize">{ratingName}</p> */}
    </div>
  );
};

export default RatingBadge;
