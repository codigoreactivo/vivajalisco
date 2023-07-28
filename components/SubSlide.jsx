import React, { useRef, useState } from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src="/img/about/5.jpg" width={1200} height={40}></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/img/about/4.jpg" width={1200} height={40}></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/img/about/3.jpg" width={1200} height={40}></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/img/about/2.jpg" width={1200} height={40}></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/img/about/1.jpg" width={1200} height={40}></Image>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
