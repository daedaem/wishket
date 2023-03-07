import Card from "../UI/Card";
import classes from "./CompanyJobsList.module.css";
const CompanyJobsList = (props) => {
  const skills = props.val.stack_details.map((skill, idx) => {
    return skill.is_required ? (
      <div key={idx} className={classes.needSkill}>
        #{skill.flag} ({skill.required_year}년 이상)
      </div>
    ) : (
      <div key={idx} className={classes.skill}>
        #{skill.flag}
      </div>
    );
  });
  return (
    <Card className={classes.jobsList}>
      <h3>
        {props.val.role}({props.val.level})
      </h3>
      {/* <div>{props.val.title}</div> */}

      <p className={classes.date_deadline}>~{props.val.date_deadline}</p>
      <div className={classes.skillList}>
        {skills}
        {/* {props.val.stack_details.map((skill, idx) => {
          return (
            // <div>
            <div key={idx} className={classes.skill}>
              #{skill.flag}
            </div>
            // </div>
          );
        })} */}
      </div>
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
