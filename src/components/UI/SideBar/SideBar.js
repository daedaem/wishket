import classes from "./SideBar.module.css";
const SideBar = (props) => {
  const date = new Date();
  const Dday = new Date(props.value.date_established?.split("-"));
  const establishedDate =
    Dday.getFullYear() +
    "년 " +
    (Dday.getMonth() + 1) +
    "월 " +
    Dday.getDate() +
    "일";
  const howLongDate = date.getFullYear() - Dday.getFullYear();

  const sideBarContet = (
    <dl className={classes.sideBarContent}>
      {/* <div> */}
      <dt>매출 :</dt>
      <dd>{props.value.sales}</dd>
      <dt>설립일 :</dt>
      <dd>
        {establishedDate}
        <br />({howLongDate}년차)
      </dd>
      <dt>사원 수 :</dt> <dd>{props.value.headcount}명</dd>
      <dt>홈페이지:</dt>
      <dd>
        <a href={`${props.value.link_url}`} target="_blank" rel="noreferrer">
          바로가기
        </a>
      </dd>
    </dl>
  );
  return (
    <aside className={classes.sideBar}>
      <div className={classes.sideBarFrame}>
        <div className={classes.sideBarHead}>
          <img
            className={classes.sideBarHeadImage}
            src={props.value.logo}
          ></img>
          <h2>{props.value.name}</h2>
        </div>
        {sideBarContet}
      </div>
    </aside>
  );
};
export default SideBar;
