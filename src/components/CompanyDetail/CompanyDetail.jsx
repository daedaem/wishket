import Carousel from "../Layout/Carousel/Carousel";
import CompanyDetailStack from "./CompanyDetailStack";
const CompanyDetail = ({ value }) => {
  const imageList =
    value &&
    value.reduce((init, item, idx) => {
      if (item.job_images) {
        return [...init, ...item.job_images];
      }
      return init;
    }, []);
  return (
    <>
      {imageList && <Carousel imageList={imageList}></Carousel>}
      <ul>
        {/* {value.jobs.map((item, idx) => {
        return <CompanyDetailStack key={idx} val={item} />;
      })} */}
        <div>
          {/* {value.jobs.job_images.map((el, idx) => {
          return;
        })} */}
          {/* <li>{value.jobs.name}</li> */}
        </div>
        {/* <li>{value.jobs.headcount}</li>
      <li>{value.jobs.date_established}</li>
      <li>{value.jobs.identify_number}</li>
      <li>
      <link href={`${value.jobs.link}`} />
      </li>
    <li>{value.jobs.sales}</li> */}
      </ul>
    </>
  );
};
export default CompanyDetail;
