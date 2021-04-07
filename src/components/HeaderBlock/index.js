import cx from "classnames";
import s from "./style.module.css";

import Tel from "../../images/tel.svg";
import Location from "../../images/location.svg";

const HeaderBlock = ({ header_text, text, bg_item, isWhite }) => (
  <div className={cx(s.root, isWhite && s.color)}>
    <img src={bg_item} className={cx(s.image)} alt="Фон" />
    <div className={s.contactsWrapper}>
      <div className={s.contacts}>
        <Location className={cx(s.icon, isWhite && s.iconColor)} />
        <div className={s.contactsIcon}>
          <div>Адрес: ул. Кузнецкий Мост, 3</div>
          <div>
            <a
              href="https://goo.gl/maps/LEDzsbiiUVMJEJUu7"
              target="_blank"
              rel="noreferrer"
            >
              Смотреть на карте
            </a>
          </div>
        </div>
      </div>
      <div className={s.contacts}>
        <Tel className={cx(s.icon, isWhite && s.iconColor)} />
        <div className={s.contactsIcon}>
          <div>Телефон для связи</div>
          <a href="tel:+79037804040">8 (903) 780-40-40</a>
        </div>
      </div>
    </div>

    <div className={s.header}>
      <h1>{header_text}</h1>
      <div className={s.headerContent}>{text}</div>
    </div>
  </div>
);

export default HeaderBlock;
