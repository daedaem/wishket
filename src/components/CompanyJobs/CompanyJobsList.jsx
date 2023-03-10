import Card from "../Layout/Card/Card";
import classes from "./CompanyJobsList.module.css";
const CompanyJobsList = (props) => {
  const skills = props.val.stack_details.map((skill, idx) => {
    return skill.is_required ? (
      <div key={idx} className={classes.needSkill}>
        #{skill.flag} ({skill.required_year}년↑)
      </div>
    ) : (
      <div key={idx} className={classes.skill}>
        #{skill.flag}
      </div>
    );
  });

  const date = new Date();
  const dday = new Date(props.val.date_deadline.split("-"));
  let gap = dday.getTime() - date.getTime();
  gap = Math.ceil(gap / (1000 * 60 * 60 * 24));
  gap = gap < 0 ? <p>종료</p> : <p>{gap}</p>;

  return (
    <Card className={classes.jobsList}>
      <div className={classes["jobsList-dday"]}>{gap}</div>
      <h3>
        {props.val.role}({props.val.level})
      </h3>
      {/* <div>{props.val.title}</div> */}

      <p className={classes.date_deadline}>
        {props.val.date_start_recruitment}~{props.val.date_deadline}
      </p>
      <div className={classes.skillList}>{skills}</div>
      {/* <div>{props.val.environment}</div> */}
      {/* {props.val.job_images.map((img, idx) => {
        return (
          <div key={idx}>
            <img src={`${img.image}`} />
            <div>{img.name}</div>
          </div>
        );
      })} */}
    </Card>
  );
};
export default CompanyJobsList;
