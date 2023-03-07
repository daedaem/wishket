import CompanyDetailStack from "./CompanyDetailStack";
const CompanyDetail = ({ value }) => {
  const datas = value.jobs.reduce((init, item, idx) => {
    if (init != item) {
      return (init = { ...init, item });
      // return (init[item] = item);
    }
    return init;
  }, {});
  return (
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
  );
};
export default CompanyDetail;
