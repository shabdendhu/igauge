"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Basic Swiper styles
import "swiper/css/navigation"; // Navigation module styles if you plan to use it
import "swiper/css/pagination"; // Pagination module styles if you plan to use it

import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

type Images = {
  src: string;
  alt: string;
};

type ImageSwiperProps = {
  images: Images[];
};

const ImageSwiper: React.FC<ImageSwiperProps> = ({ images }) => {
  return (
    <Swiper
      spaceBetween={0} // Space between slides
      loop={true} // Enable loop mode
      slidesPerView={3} // Number of slides per view
      navigation={true} // Enables navigation arrows
      modules={[Navigation]}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            className="ml-0"
            src={image.src}
            alt={image.alt}
            style={{ width: "100%", height: "auto" }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSwiper;
