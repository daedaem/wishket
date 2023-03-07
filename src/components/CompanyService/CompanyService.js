const CompanyService = (props) => {
  const description = props.value.description.split("\\n");
  return (
    <>
      {/* 모달로 가져가자 */}
      <h4>{props.value.name}</h4>
      {/* <div>
        {description.map((el, idx) => {
          return <div key={idx}>{el}</div>;
        })}
      </div>
      <div>
        {props.value.service_stacks.map((el, idx) => {
          return <span key={idx}>#{el.name} </span>;
        })}
      </div> */}
    </>
  );
};
export default CompanyService;
