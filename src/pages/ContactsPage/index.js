import s from "./style.module.css";

import HeaderBlock from "../../components/HeaderBlock";
import BG from "../../images/contacts/bg.jpg";
import Surf from "../../images/surface1.svg";

const HEADER_TEXT = "КОНТАКТЫ DANTE";
const TEXT =
  "Новое стильное место в центре на Кузнецком мосту от команды Saxon+Parole";

const ContactsPage = () => (
  <div className={s.root}>
    <HeaderBlock header_text={HEADER_TEXT} text={TEXT} bg_item={BG} isWhite />

    <div className={s.content}>
      <Surf className={s.surf} />
      <div className={s.contentCaption}>&mdash; О ресторане</div>
      <div className={s.contentTable}>
        <div>
          Завтраки:
          <br />
          пн-пт 9.00-12.00,
          <br />
          сб-вс 10.00–14.00
        </div>
        <div>
          Банковские карты:
          <br />
          принимаются
        </div>
        <div>
          Скидка на меню:
          <br />
          пн-пт 12.00–16.00 — 20%
        </div>
        <div>
          Парковка:
          <br />
          есть
        </div>
        <div>
          Бизнес-ланч:
          <br />
          нет
        </div>
        <div>
          Детям:
          <br />
          Детские стулья
        </div>
      </div>

      <div className={s.contentCaption}>&mdash; Контактная информация</div>
      <div className={s.contentText}>
        Адрес:
        <br />
        г. Москва, Кузнецкий Мост, 3, строение 2
      </div>
      <div className={s.contentText}>
        Метро:
        <br />
        м. Лубянка, Охотный Ряд, Театральная, Площадь Революции, Кузнецкий Мост
      </div>
      <div className={s.contentText}>
        Время работы:
        <br />
        пн-чт 9.00–0.00, пт 9.00–1.30, сб 10.00–1.30, вс 10.00–0.00
      </div>
      <div className={s.contentText}>
        Для связи:
        <br />
        +7(903)-780-40-40
      </div>
    </div>
    <div className={s.image}>
      <iframe
        className={s.map}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.822897030731!2d37.61464621630862!3d55.76157868055572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a44a1d48891%3A0x720c4c4617f73c89!2z0YPQuy4g0JrRg9C30L3QtdGG0LrQuNC5INCc0L7RgdGCLCAzINGB0YLRgNC-0LXQvdC40LUgMiwg0JzQvtGB0LrQstCwLCAxMjUwMDk!5e0!3m2!1sru!2sru!4v1617902651426!5m2!1sru!2sru"
        // allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  </div>
);

export default ContactsPage;
