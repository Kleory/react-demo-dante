import s from "./style.module.css";
import image from "../../images/logo01.jpg";
import Fb from "../../images/fb.svg";
import Inst from "../../images/inst.svg";

const Menu = () => (
  <div className={s.wrapper}>
    <div className={s.logo}>
      <img src={image} alt="Логотип" />
    </div>
    <ul>
      <li>
        <a href="/">Главная</a>
      </li>
      <li>
        <a href="/">Меню</a>
      </li>
      <li>
        <a href="/gallery">Галерея</a>
      </li>
      <li>
        <a href="/contacts">Контакты</a>
      </li>
    </ul>
    <div className={s.contacts}>
      <a href="">
        <Fb />
      </a>
      <a href="">
        <Inst />
      </a>
    </div>
  </div>
);

export default Menu;
