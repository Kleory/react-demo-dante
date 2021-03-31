import s from './style.module.css';
import image from "../../images/logo01.jpg"


const Menu = () => (
  <div className={s.wrapper}>
    <div className={s.logo}>
      <img src = {image} alt="Логотип"/>
    </div>
    <ul>
      <li>
        <a href = ''>Главная</a>
      </li>
      <li>
        <a>Меню</a>
      </li>
      <li>
        <a>Галерея</a>
      </li>
      <li>
        <a>Контакты</a>
      </li>
    </ul>
    <div className={s.contacts}>
      
    </div>
  </div>
);

export default Menu;