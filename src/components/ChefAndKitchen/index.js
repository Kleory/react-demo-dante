import cx from "classnames";
import s from "./style.module.css";

import HeaderBlock from "../../components/HeaderBlock";
import BG from "../../images/shef-bg-image.jpg";
import Surf from "../../images/surface1.svg";
import Image from "../../images/chef-main-image.jpg";
import Image1 from "../../images/chef-image1.jpg";
import Image2 from "../../images/chef-image2.jpg";
import Image3 from "../../images/chef-video-image.jpg";

const HEADER_TEXT = "ШЕФ ПОВАР И КУХНЯ";
const TEXT =
  "Порядка 20 авторских блюд от шефа. Блюда современной европейской кухни, завтраки, итальянский пинса, фирменные коктейли и разливное пиво.";

const ChefAndKitchen = () => (
  <div className={s.root}>
    <HeaderBlock header_text={HEADER_TEXT} text={TEXT} bg_item={BG} />
    <div className={s.content}>
      <div className={s.contentCaption}>&mdash; Шеф-повар и кухня</div>
      <div className={s.contentText}>
        Шеф-повар проекта Игнат Куликов родом из Ганы (Африка). В возрасте 8 лет
        переехал в Москву и провел обычное мальчишеское детство с ребятами во
        дворе. Закончив школу поступил в противопожарную академию, но вскоре
        понял, что ему по-настоящему интересно совсем другое – кухня.
      </div>
      <div className={s.contentText}>
        Изучать основы кулинарного мастерства он отправился в институт Eastern
        Institute of Technologies в Новую Зеландию. Там же в течение нескольких
        лет работал в таких заведениях, как Mission Estate Winery, Cape
        Kidnappers Lodge, The Engine room и отеле Pullman Auckland. Меньше года
        назад Игнат вернулся в Москву и возглавил команду кухни DANTE
        kitchen+bar.
      </div>
      <Surf className={s.surf} />
      <div className={s.imagesBlock}>
        <img src={Image1} alt="Картинка1" />
        <img src={Image2} alt="Картинка2" />
      </div>
    </div>
    <div className={s.content}>
      <div className={s.contentCaption}>&mdash; Европейский СТИЛЬ</div>
      <div className={s.contentText}>
        Именно Новая Зеландия повлияла на кулинарный стиль Игната. Население
        страны состоит в основном из переселенцев, а потому в местных блюдах
        намешаны вкусы различных национальностей. Игнат Куликов не один год
        изучал особенности кухни Новой Зеландии и представляет ее гостям DANTE
        kitchen+bar, конечно, слегка адаптировав под вкусы москвичей. В
        небольшом меню DANTE комфортная, но интересная еда на каждый день. В
        ресторане можно попробовать такие блюда, как слабосоленый лосось
        по-мароккански с трио пюре и фенхелем, сочный тайский салат с говяжьими
        ребрами; каре ягненка с копченым баклажаном, овощами и соусом хариса;
        запеченный томат, фаршированный ананасом с анисовым мороженым, и еще
        порядка 20 авторских блюд от шефа. Кроме того, в меню есть итальянская
        пинца. А в скором времени появится целый раздел блюд для вегетарианцев.
      </div>
      <Surf className={s.surf} />
    </div>

    <div className={s.imageWrapper}>
      <div className={s.image}>
        <img src={Image} alt="Картинка" />
      </div>
      <div className={cx(s.image, s.image2)}>
        <img src={Image3} alt="Картинка3" />
      </div>
    </div>
  </div>
);

export default ChefAndKitchen;
