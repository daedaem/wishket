import Card from "../Layout/Card/Card";
import classes from "./CompanyJobsCardList.module.css";
import CompanyDetailStack from "../CompanyDetail/CompanyDetailStack";
import { useNavigate } from "react-router";
const CompanyJobsCardList = (props) => {
  const navigate = useNavigate();
  const skills = props.val.stack_details?.map((el, idx) => {
    return <CompanyDetailStack key={idx} val={el} />;
  });

  const date = new Date();
  const dday = new Date(props.val.date_deadline.split("-"));
  let gap = dday.getTime() - date.getTime();
  gap = Math.ceil(gap / (1000 * 60 * 60 * 24));
  gap = gap < 0 ? <p>종료</p> : <p>{gap}</p>;
  console.log(props);
  const navigateHandler = () => {
    navigate(`/companies/${props.val.company}/jobs/${props.val.id}`);
    // navigate(`/companies/1/jobs`);
  };
  return (
    <Card className={classes.jobsList} onClick={navigateHandler}>
      <div className={classes["jobsList-dday"]}>{gap}</div>
      <h3>
        {props.val.role}({props.val.level})
      </h3>
      {/* <div>{props.val.title}</div> */}

      <p className={classes.date_deadline}>
        {props.val.date_start_recruitment}~{props.val.date_deadline}
      </p>
      <div className={classes.skillList}>{skills}</div>
    </Card>
  );
};
export default CompanyJobsCardList;
