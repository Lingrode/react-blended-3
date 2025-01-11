import { Link } from 'react-router-dom';
import css from './GoBackBtn.module.css';
const GoBackBtn = ({ link }) => {
  return (
    <Link className={css.link} to={link}>
      GoBackBtn
    </Link>
  );
};

export default GoBackBtn;
