import DanteKitchen from "../../components/DanteKitchen";
import HistoryDante from "../../components/HistoryDante";
import ChefAndKitchen from "../../components/ChefAndKitchen";

import s from "./style.module.css";

const HomePage = () => (
  <div className={s.root}>
    <DanteKitchen />
    <HistoryDante />
    <ChefAndKitchen />
  </div>
);

export default HomePage;
