import s from "./style.module.css";

import HeaderBlock from "../../components/HeaderBlock";
import BG from "../../images/history-bg-image.jpg";
import Surf from "../../images/surface1.svg";
import Image from "../../images/history-main-image.jpg";
import Image1 from "../../images/history-image1.jpg";
import Image2 from "../../images/history-image2.jpg";
import Image3 from "../../images/history-image3.jpg";

const HEADER_TEXT = "ИСТОРИЯ DANTE";
const TEXT =
  "Построен в начале 1904 года для московской домовладелицы М. В. Сокол архитектором И. П. Машковым. ";

const HistoryDante = () => (
  <div className={s.root}>
    <HeaderBlock header_text={HEADER_TEXT} text={TEXT} bg_item={BG} />
    <div className={s.content}>
      <div className={s.contentCaption}>
        &mdash; История названия и интерьер
      </div>
      <div className={s.contentText}>
        В 1909 году в двухэтажном доходном доме “Сокол” архитектора И.П. Машкова
        (Кузнецкий мост, 3) обосновалось итальянское общество имени Данте
        Алигьери с бесплатной читальней и выдачей разрешений для русских,
        собирающихся в Италию. На фасаде красовалась вывеска «Данте». Отдавая
        дань уважения истории, создатели DANTE kitchen+bar решили, что новый
        ресторан будет носить одноименное название.
      </div>
      <Surf className={s.surf} />
      <div className={s.imagesBlock}>
        <img src={Image1} alt="Картинка1" />
        <img src={Image2} alt="Картинка2" />
      </div>
      <div className={s.contentText}>
        В процессе реконструкции вскрыли и сохранили интересные слои старых
        стен, а также реставрировали чугунную винтовую лестницу, спиралью
        поднимающуюся на второй этаж ресторана. При проработке деталей
        интерьера, дизайнер проекта Евгения Ужегова (Living Now studio)
        вдохновлялась природой тропиков и игрой светотени, поэтому главные роли
        в пространстве отведены живым растениям и многогранному освещению.
      </div>
    </div>
    <div className={s.imageWrapper}>
      <div className={s.image}>
        <img src={Image} alt="Картинка" />
      </div>
      <div className={s.image}>
        <img src={Image3} alt="Картинка3" />
      </div>
    </div>
  </div>
);

export default HistoryDante;
