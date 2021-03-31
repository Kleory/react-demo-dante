import Menu from '../../block/Menu';

import s from './style.module.css';

const CommonLayout = ({ children }) => (
  <div className={s.root}>
    <Menu />
    <div className={s.wrapper}>{children}</div>
  </div>
);

export default CommonLayout;