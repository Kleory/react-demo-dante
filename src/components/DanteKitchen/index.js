import s from "./style.module.css";

import Tel from "../../images/tel.svg";
import Location from "../../images/location.svg";
import Surf from "../../images/surface1.svg";
import Image from "../../images/main-image.jpg";
// import BgImage from "../../images/main-bg-image.jpg"

const DanteKitchen = () => (
  <div className={s.root}>
    <div className={s.bgImage}>
      <div className={s.contactsWrapper}>
        <div className={s.contacts}>
          <Location />
          <div className={s.contactsIcon}>
            <div>Адрес: ул. Кузнецкий Мост, 3</div>
            <div>
              <a>Смотреть на карте</a>
            </div>
          </div>
        </div>
        <div className={s.contacts}>
          <Tel />
          <div className={s.contactsIcon}>
            <div>Телефон для связи</div>
            <div>8 (903) 780-40-40</div>
          </div>
        </div>
      </div>

      <div className={s.header}>
        <h1>DANTE KITCHEN + BAR</h1>
        <div className={s.headerContent}>
          Новое стильное место в центре на Кузнецком мосту от команды
          Saxon+Parole
        </div>
      </div>
    </div>
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
      <img src={Image} alt="Логотип" />
    </div>
  </div>
);

export default DanteKitchen;
