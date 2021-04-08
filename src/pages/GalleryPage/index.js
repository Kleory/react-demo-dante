import React, { useState } from "react";

import cx from "classnames";
import s from "./style.module.css";

import HeaderBlock from "../../components/HeaderBlock";
import BG from "../../images/gallery/bg.jpg";
import Image1 from "../../images/gallery/image1.jpg";
import Image2 from "../../images/gallery/image2.jpg";
import Image3 from "../../images/gallery/image3.jpg";
import Image4 from "../../images/gallery/image4.jpg";
import Image5 from "../../images/gallery/image5.jpg";
import Image6 from "../../images/gallery/image6.jpg";
import Image7 from "../../images/gallery/image7.jpg";
import Image8 from "../../images/gallery/image8.jpg";

const HEADER_TEXT = "ГАЛЕРЕЯ DANTE";
const TEXT =
  "Новое стильное место в центре на Кузнецком мосту от команды Saxon+Parole";

const GalleryPage = () => {
  const [imgPopup, setImgPopup] = useState(false);

  const handleOpenPopup = (e) => {
    if (e.target.tagName !== "IMG") return;
    setImgPopup(e.target.src);
    console.log(e.target.id, e.target.src);
  };

  const handleClosePopup = () => {
    setImgPopup(false);
  };

  return (
    <div className={s.root}>
      <HeaderBlock header_text={HEADER_TEXT} text={TEXT} bg_item={BG} isWhite />
      <div className={s.contentWrapper}>
        <div className={s.content} onClick={handleOpenPopup}>
          <img id="1" src={Image1} alt="Картинка1" />
          <img id="2" src={Image2} alt="Картинка2" />
          <img id="3" src={Image3} alt="Картинка3" />
          <img id="4" src={Image4} alt="Картинка4" />
          <img id="5" src={Image5} alt="Картинка5" />
          <img id="6" src={Image6} alt="Картинка6" />
        </div>
        <div className={s.imageWrapper}>
          <div className={cx(s.image, s.image7)}>
            <img src={Image7} alt="Картинка7" />
          </div>
          <div className={cx(s.image, s.image8)}>
            <img src={Image8} alt="Картинка8" />
          </div>
        </div>
      </div>

      <div className={cx(s.popupModal, imgPopup && s.isOpen)}>
        <div className={s.bgModal} onClick={handleClosePopup}></div>
        <div className={s.cardModal}>
          <div className={s.modalButton} onClick={handleClosePopup}>
            &#10006;
          </div>
          <div className={s.cardModalImg}>
            <img src={imgPopup} alt="Popup" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
