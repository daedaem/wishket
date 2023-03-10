import CompanyJobsList from "./CompanyJobsList";
import classes from "./CompanyJobs.module.css";

const CompanyJobs = ({ value }) => {
  const imageList =
    value &&
    value.reduce((init, el) => {
      if (el.job_images) return [...init, ...el.job_images];
      else return init;
    }, []);

  return (
    <div className={classes.jobsFrame}>
      <h3>채용 포지션</h3>
      <div className={classes.card}>
        {value &&
          value.map((item, idx) => {
            return <CompanyJobsList key={idx} val={item} />;
          })}
      </div>
    </div>
  );
};
export default CompanyJobs;
