const CompanyDetail = ({ value }) => {
  return (
    <ul>
      {value.company_stacks.map((el, idx) => {
        return (
          <ul key={idx}>
            <li>{el.category}</li>
            <li>{el.flag}</li>
            <li>{el.name}</li>
            <p>경계</p>
          </ul>
        );
      })}
      <li>{value.headcount}</li>
      <li>{value.id}</li>
      <li>{value.name}</li>
      <li>{value.date_established}</li>
      <li>{value.identify_number}</li>
      <li>
        <link href={`${value.link}`} />
      </li>

      <li>
        <img src={`${value.logo}`} />
      </li>
      <li>{value.name}</li>
      <li>{value.sales}</li>
    </ul>
  );
};
export default CompanyDetail;
