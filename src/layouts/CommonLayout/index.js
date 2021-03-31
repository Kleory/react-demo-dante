import Menu from '../../block/Menu';

// import s from './style.css';

const CommonLayout = ({ children }) => (
  <div>
    <Menu />
    <div>{children}</div>
  </div>
);

export default CommonLayout;