const CompanyDetailStack = ({ val }) => {
  return (
    <ul>
      <li>{val.category}</li>
      <li>{val.flag}</li>
      <li>{val.name}</li>
      <p>경계</p>
    </ul>
  );
};
export default CompanyDetailStack;
