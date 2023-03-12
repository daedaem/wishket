import CompanyJobsCardList from "./CompanyJobsCardList";
import classes from "./CompanyJobsCard.module.css";

const CompanyJobsCard = ({ value }) => {
  // const imageList =
  //   value &&
  //   value.reduce((init, el) => {
  //     if (el.job_images) return [...init, ...el.job_images];
  //     else return init;
  //   }, []);
  const CardListContent =
    value &&
    value.map((item, idx) => {
      return <CompanyJobsCardList key={idx} val={item} />;
    });

  return (
    <div className={classes.jobsFrame}>
      <h3>채용 포지션</h3>
      <div className={classes.card}>{CardListContent}</div>
    </div>
  );
};
export default CompanyJobsCard;
