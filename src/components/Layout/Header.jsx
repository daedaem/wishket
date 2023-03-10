import classes from "./Header.module.css";
import { Link } from "react-router-dom";
const id = 1;
const Header = (props) => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.headerUl}>
          <li>
            <Link to="/" className={classes.Logo}>
              wishket
            </Link>
          </li>
        </ul>
      </nav>
      <nav>
        <ul className={classes.headerUl}>
          <li>
            <Link to="/" className={classes.link}>
              회사 소개
            </Link>
          </li>
          <li>
            <Link to={`/companies/${id}/jobs`} className={classes.link}>
              채용
            </Link>
          </li>
          <li>
            <Link to="/" className={classes.link}>
              회원가입
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
