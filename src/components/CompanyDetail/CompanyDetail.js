import CompanyDetailStack from "./CompanyDetailStack";
const CompanyDetail = ({ value }) => {
  return (
    <ul>
      {value.company_stacks.map((item, idx) => {
        return <CompanyDetailStack key={idx} val={item} />;
      })}
      <div>
        <img src={`${value.logo}`} />
        <li>{value.name}</li>
      </div>
      <li>{value.headcount}</li>
      {/* <li>{value.id}</li> */}
      <li>{value.date_established}</li>
      <li>{value.identify_number}</li>
      <li>
        <link href={`${value.link}`} />
      </li>
      <li>{value.sales}</li>
    </ul>
  );
};
export default CompanyDetail;
