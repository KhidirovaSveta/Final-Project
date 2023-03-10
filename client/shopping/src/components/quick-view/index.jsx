import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.scss";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const ModalViewCarousel = () => {
  const [product, setProduct] = useState([]);
  const { _id } = useParams();

  const getData = async () => {
    let response = await axios.get(`http://localhost:8080/sweeties/${_id}`);
    setProduct(response.data);
    console.log(product);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
     <img src={product.image1} alt="" />
     
      {/* <>
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={product.image2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={product.image3} alt="" />
          </SwiperSlide>
        </Swiper>
      </> */}
    </div>
  );
};

export default ModalViewCarousel;
