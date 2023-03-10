import Header from "../../Layout/Header/Header";
import classes from "./Error.module.css";
const ErrorPage = () => {
  return (
    <>
      <Header />
      <h1 className={classes.errorTitle}>에러 페이지 입니다!</h1>
      <p>해당 페이지는 접근할 수 없습니다.</p>
    </>
  );
};
export default ErrorPage;
