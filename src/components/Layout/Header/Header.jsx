import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
// const id = 1;
const Header = (props) => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/" className={classes.Logo} end>
              wishket
            </NavLink>
          </li>
        </ul>
      </nav>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/companies/1"
              // to={`/companies/${id}`}
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              회사 소개
            </NavLink>
          </li>
          <li>
            <NavLink
              //TODO
              // to={`/companies/${id}/jobs`}
              to={`/companies/1/jobs`}
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              채용
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dd"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              회원가입
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
