import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./styles.scss";
import { Pagination } from "swiper";

import Cake1 from "../../imagas/cake_slide_1.webp";
import Cake2 from "../../imagas/cake_slide_2.webp";
import Cake3 from "../../imagas/cake_slide_3.webp";

const HeaderCarousel = () => {
  return (
    <div>
      <div className="carousel">
        <Swiper
          direction={"vertical"}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={Cake1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Cake2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Cake3} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HeaderCarousel;
