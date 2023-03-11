import classes from "./CompanyDetailStack.module.css";
const CompanyDetailStack = ({ val }) => {
  const skills = val.is_required ? (
    <div className={classes.needSkill}>
      #{val.flag} ({val.required_year}년 이상)
    </div>
  ) : (
    <div className={classes.skill}>#{val.flag}</div>
  );

  return (
    <>
      <div className={classes.skillList}>{skills}</div>
    </>
  );
};
export default CompanyDetailStack;
