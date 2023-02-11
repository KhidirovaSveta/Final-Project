import React from "react";
import "./index.scss";
import HeaderCarousel from "../../components/header-carousel";
import Cake from "../../imagas/cake_image_card.webp";
import Cake2 from "../../imagas/cake_image_card2.webp";
import cakeBox from "../../imagas/cake_box_1.avif";
import cakeBox2 from "../../imagas/cake_box_2.avif";
import cakeBox3 from "../../imagas/cake_box_3.avif";
import Button from "../../components/button";

const Home = () => {
  return (
    <div id="Home">
      <HeaderCarousel />

      <div className="container">
        {/* Third Section */}

        <div className="third-and-sixth-section">
          <img src={Cake} alt="" className="cakeImg" />

          <div className="third-sixth-section-text">
            <h2 className="third-sixth-section-header">
              Don’t let summer float away
            </h2>
            <p className="third-sixth-section-parag">
              Snag some cool treats now! And we’ll deliver them straight to you
              in temperature controlled packaging, so they’re cold and ready to
              eat.You don’t ehave to get out of the pool
            </p>
            <Button btnName={"SHOP NOW"} />
          </div>
        </div>

        {/* Fifth Section */}

        <div className="fifth-section">
          <h1 className="fifth-header">Why choose sweeties</h1>

          <div className="fifth-box">
            <div className="sweeties-card">
              <img src={cakeBox} alt="" width={"40px"} />
              <h2 className="fifth-card-header">One Of A Kind Treats</h2>
              <p className="fifth-card-parag">
                Try our award-winning classic Birthday Cake and our fan-favorite
                B’Day Cake Truffles!
              </p>
            </div>

            <div className="sweeties-card">
              <img src={cakeBox2} alt="" width={"40px"} />
              <h2 className="fifth-card-header">Thoughtfully Packaging</h2>
              <p className="fifth-card-parag">
                We make your treats fresh and flash-freeze ‘em for peak quality.
              </p>
            </div>

            <div className="sweeties-card">
              <img src={cakeBox3} alt="" width={"40px"} />
              <h2 className="fifth-card-header">Nationwide Dilivery</h2>
              <p className="fifth-card-parag">
                If you're a last-minute gifter, we've got you covered with
                next-day delivery, anywhere in the USA.
              </p>
            </div>
          </div>
        </div>

        {/* sixth section */}

        <div className="sixth-section">
          <div className="third-and-sixth-section">
            <div className="third-sixth-section-text">
              <h2 className="third-sixth-section-header">
                Hey, nice to treat you
              </h2>
              <p className="third-sixth-section-parag">
                Snag some cool treats now! And we’ll deliver them straight to
                you in temperature controlled packaging, so they’re cold and
                ready to eat.You don’t ehave to get out of the pool
              </p>
              <Button btnName={"LEARN MORE"} className="learnBtn" />
            </div>
            <br />
            <img src={Cake2} alt="" className="cakeImg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
