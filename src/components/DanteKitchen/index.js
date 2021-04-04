import s from "./style.module.css";
import HeaderBlock from "../../components/HeaderBlock";

import Surf from "../../images/surface1.svg";
import Image from "../../images/main-image.jpg";
import BG from "../../images/main-bg-image.jpg";

const HEADER_TEXT = "DANTE KITCHEN + BAR";
const TEXT =
  "Новое стильное место в центре на Кузнецком мосту от команды Saxon+Parole";

const DanteKitchen = () => (
  <div className={s.root}>
    <HeaderBlock header_text={HEADER_TEXT} text={TEXT} bg_item={BG} isWhite />
    <div className={s.content}>
      <div className={s.contentCaption}>&mdash; ОТКРЫТИЕ</div>
      <div className={s.contentText}>
        Открыли молодые, но опытные рестораторы Александр Ефремов и Алексей
        Филатов, имеющие непосредственное отношение к московскому Saxon+Parole и
        нескольким другим столичным заведениям. Бар проекта возглавляет
        шеф-бармен Saxon+Parole Оксана Жидкова, а кухней руководит шеф-повар
        Игнат Куликов.{" "}
      </div>
      <Surf className={s.surf} />
    </div>
    <div className={s.image}>
      <img src={Image} alt="Картинка" />
    </div>
    <div className={s.test}></div>
  </div>
);

export default DanteKitchen;
