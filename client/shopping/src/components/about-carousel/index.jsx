import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.scss";

// import required modules
import { Pagination } from "swiper";

import community1 from "../../images/Birthday_Cake_Class.webp";
import community2 from "../../images/Logan_Media_Baking.webp";
import community3 from "../../images/DC-Logan-Media-Baking.webp";
import community4 from "../../images/LA-Melrose-Interior-Birthday.webp";
import community5 from "../../images/colleg.webp";

const AboutCarousel = () => {
  return (
    <div id="community">
      <>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            270: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={community1} alt="" className="communityImg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={community2} alt="" className="communityImg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={community3} alt="" className="communityImg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={community4} alt="" className="communityImg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={community5} alt="" className="communityImg" />
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default AboutCarousel;
