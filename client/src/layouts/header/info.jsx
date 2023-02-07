import React, { useState } from "react";
import "./info.scss";

const InfoBox = () => {
  const [visible, setVisible] = useState(true);

  return (
    <>
      <div>
        {visible && (
          <div id="infoBox">
            <p className="infoBoxParag">
              Order by phone: (310) 839-9009 | Shop our Spring Bounty Sale
            </p>
            <button className="x-btn" onClick={() => setVisible(false)}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default InfoBox;
