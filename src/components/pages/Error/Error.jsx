import Header from "../../Layout/Header/Header";
import classes from "./Error.module.css";
const ErrorPage = () => {
  return (
    <>
      <Header />
      <section className={classes.errorFrame}>
        <h1 className={classes.errorTitle}>에러 페이지 입니다!</h1>
        <p className={classes.errorContent}>해당 페이지는 찾을 수 없습니다.</p>
      </section>
      {/* <p className={classes.errorContent}>해당 페이지는 찾을 수 없습니다.</p> */}
    </>
  );
};
export default ErrorPage;
