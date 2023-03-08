import CompanyJobsList from "./CompanyJobsList";
import classes from "./CompanyJobs.module.css";

const CompanyJobs = ({ value }) => {
  const imageList =
    value &&
    value.reduce((init, el) => {
      if (el.job_images) return [...init, ...el.job_images];
      else return init;
    }, []);
  // console.log(imageList);
  return (
    <div>
      <h4>채용 중 포지션</h4>
      <div className={classes.card}>
        {value &&
          value.map((item, idx) => {
            return <CompanyJobsList key={idx} val={item} />;
          })}
      </div>

      {/* {imageList &&
        imageList.map((el, idx) => {
          return <img key={idx} src={`${el.image}`} alt="" />;
        })} */}
    </div>
  );
};
export default CompanyJobs;
