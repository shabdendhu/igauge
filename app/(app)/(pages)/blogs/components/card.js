import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { useCalculateFontSize } from "@/app/(app)/hooks/use-calculate-font-size";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useRouter } from "next/navigation";
export default function MultiActionAreaCard({ data, className = "w-1/2" }) {
  const fontSize = useCalculateFontSize();
  const router = useRouter();
  return (
    <Card
      onClick={() => router.push("/blog?id=" + data.id)}
      className={
        "relative border border-gray-100 shadow-none cursor-pointer" +
        " " +
        className
      }
    >
      <CardMedia
        component="img"
        height="140"
        className="aspect-[700/400] overflow-hidden"
        image={data?.featured_image?.url}
        alt="green iguana"
      />
      <button className="absolute top-10 left-10 z-[5] bg-[#272761] px-5 py-3 text-white font-libre-baskerville text-white rounded-md">
        {data?.category?.blog_category_name}
      </button>
      <CardContent className="pl-5 pt-5">
        <Typography
          style={{
            fontSize: fontSize(11, 6, 1920, 400),
          }}
          gutterBottom
          variant="h6"
          component="div"
          className="font-libre-baskerville font-normal flex gap-1 items-center"
        >
          <CalendarMonthIcon
            style={{
              fontSize: fontSize(11, 6, 1920, 400),
            }}
          />

          {new Date(data?.published_date)
            .toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })
            .replace(" ", ", ")}
        </Typography>
        <Typography
          style={{
            fontSize: fontSize(30, 14, 1920, 400),
          }}
          gutterBottom
          variant="h5"
          component="div"
          className="font-libre-baskerville font-bold line-clamp-1"
        >
          {data?.blog_title}
        </Typography>
        <Typography
          style={{
            fontSize: fontSize(17, 8, 1920, 400),
          }}
          variant="body2"
          color="text.secondary"
          className="line-clamp-3 font-red-hat-text"
        >
          {data?.excerpt}
        </Typography>
      </CardContent>

      <CardActions className="pl-5 pb-5">
        <Button
          onClick={() => router.push("/blog?id=" + data.id)}
          size="small"
          color="primary"
          className="bg-[#F7A600] rounded-none text-black font-red-hat-text font-normal px-10 py-5 capitalize text-[20px] aspect-[100/27] overflow-hidden hover:bg-orange-500"
        >
          Read More <KeyboardDoubleArrowRightIcon className="font-normal" />
        </Button>
      </CardActions>
    </Card>
  );
}
