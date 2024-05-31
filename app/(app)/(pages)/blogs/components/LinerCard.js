import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { useCalculateFontSize } from "@/app/(app)/hooks/use-calculate-font-size";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
export default function LinierCard({ data, onClick }) {
  const fontSize = useCalculateFontSize();

  return (
    <Card onClick={onClick} className="w-full shadow-none flex cursor-pointer">
      <CardMedia
        className="w-1/3 h-full flex aspect-square"
        component="img"
        image={data?.featured_image?.url}
        alt="green iguana"
      />
      <div className="flex flex-col">
        <CardContent className="pl-10 pt-3">
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
            {data?.createdAt}
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
            className="font-red-hat-text line-clamp-3"
          >
            {data?.excerpt}
          </Typography>
        </CardContent>

        <CardActions className="w-full pl-10">
          <Button
            onClick={onClick}
            size="small"
            color="primary"
            className="bg-[#F7A600] rounded-none text-black font-red-hat-text font-normal px-10 py-5 capitalize text-[20px] aspect-[100/27] overflow-hidden hover:bg-orange-500"
          >
            Read More <KeyboardDoubleArrowRightIcon className="font-normal" />
          </Button>
        </CardActions>
      </div>
    </Card>
  );
}
