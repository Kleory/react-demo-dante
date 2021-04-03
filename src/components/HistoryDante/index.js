import s from "./style.module.css";

import HeaderBlock from "../../components/HeaderBlock";

import BG from "../../images/history-bg-image.jpg";

const HEADER_TEXT = "ИСТОРИЯ DANTE";
const TEXT =
  "Построен в начале 1904 года для московской домовладелицы М. В. Сокол архитектором И. П. Машковым. ";

const HistoryDante = () => (
  <div className={s.root}>
    <HeaderBlock header_text={HEADER_TEXT} text={TEXT} bg_item={BG} />
  </div>
);

export default HistoryDante;
