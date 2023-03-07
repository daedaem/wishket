import classes from "./Header.module.css";
// import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <div>
        <a href="" className={classes.Logo}>
          wishket
        </a>
      </div>
      <div>
        <a href="" className={classes.link}>
          채용
        </a>
        <a href="" className={classes.link}>
          로그인
        </a>
        <a href="" className={classes.link}>
          회원가입
        </a>
      </div>
    </header>
  );
};

export default Header;
