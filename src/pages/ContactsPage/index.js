import s from "./style.module.css";

import HeaderBlock from "../../components/HeaderBlock";
import BG from "../../images/contacts/bg.jpg";

const HEADER_TEXT = "КОНТАКТЫ DANTE";
const TEXT =
  "Новое стильное место в центре на Кузнецком мосту от команды Saxon+Parole";

const ContactsPage = () => (
  <div className={s.root}>
    <HeaderBlock header_text={HEADER_TEXT} text={TEXT} bg_item={BG} isWhite />
  </div>
);

export default ContactsPage;
