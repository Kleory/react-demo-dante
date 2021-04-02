import Menu from "../../block/Menu";

import s from "./style.module.css";

const CommonLayout = ({ children }) => (
  <div className={s.root}>
    <div className={s.wrapperLayout}>
      <div className={s.wrapper}>
        <Menu />
      </div>
      {children}
    </div>
  </div>
);

export default CommonLayout;
