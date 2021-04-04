import s from "./style.module.css";

import HeaderBlock from "../../components/HeaderBlock";
import BG from "../../images/gallery/bg.jpg";

const HEADER_TEXT = "ГАЛЕРЕЯ DANTE";
const TEXT =
  "Новое стильное место в центре на Кузнецком мосту от команды Saxon+Parole";

const GalleryPage = () => (
  <div>
    <div>
      <HeaderBlock header_text={HEADER_TEXT} text={TEXT} bg_item={BG} isWhite />
    </div>
  </div>
);

export default GalleryPage;
