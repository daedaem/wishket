import classes from "./CompanyJobs.module.css";
import Carousel from "../Layout/Carousel/Carousel";
import CompanyDetailStack from "../CompanyDetail/CompanyDetailStack";
const CompanyJobs = ({ jobsData, detailData }) => {
  //TODO : 여기 아이디가 넘어와야한다
  const id = 1;
  const jobsContent =
    jobsData.length > 0
      ? jobsData.find((el) => {
          return el.id == id;
        })
      : "";
  const stacks = jobsContent.stack_details?.map((el, idx) => {
    return <CompanyDetailStack key={idx} val={el} />;
  });
  const preference = jobsContent.preference?.split("\\n").map((el, idx) => {
    return <p key={idx}>{el}</p>;
  });
  const requirement = jobsContent.requirement?.split("\\n").map((el, idx) => {
    return <p key={idx}>{el}</p>;
  });
  const environment = jobsContent.environment?.split("\\n").map((el, idx) => {
    return <p key={idx}>{el}</p>;
  });
  const responsibility = jobsContent.responsibility
    ?.split("\\n")
    .map((el, idx) => {
      return <p key={idx}>{el}</p>;
    });
  const welfare = jobsContent.welfare?.split("\\n").map((el, idx) => {
    return <p key={idx}>{el}</p>;
  });
  const imageList = jobsContent.job_images;
  return (
    <>
      <article className={classes.jobsHead}>
        <img className={classes.jobsLogo} src={`${detailData.logo}`} />
        <div className={classes.jobsContent}>
          <h2>
            {jobsContent.level} {jobsContent.role}
          </h2>
          <h4>{detailData.name}</h4>
        </div>
      </article>
      <article>
        <h4>기술 스택</h4>
        <div className={classes.skillList}>{stacks}</div>
      </article>
      <article>
        <h5>주요 업무</h5>
        {responsibility}
      </article>
      <article>
        <h5>자격 요건</h5>
        {requirement}
      </article>
      <article>
        <h5>우대 사항</h5>
        {preference}
      </article>
      <article>
        <h5>혜택 및 복지</h5>
        {welfare}
      </article>
      <article>
        <h5>업무 환경</h5>
        {environment}
      </article>

      <article>{imageList && <Carousel imageList={imageList} />}</article>
    </>
  );
};
export default CompanyJobs;
