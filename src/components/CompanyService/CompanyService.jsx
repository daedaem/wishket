import classes from "./CompanyService.module.css";
const CompanyService = (props) => {
  const description = props.value.description.split("\\n");
  return (
    <article className={classes.serviceDisc}>
      <div>
        <h4>
          {"< "}
          {props.value.name}
          {" >"}
        </h4>
      </div>
      <div>
        {description.map((el, idx) => {
          return <p key={idx}>{el}</p>;
        })}
      </div>
      {props.value.service_stacks.map((el, idx) => {
        return (
          <span key={idx} className={classes.stackTag}>
            {el.name}
          </span>
        );
      })}
    </article>
  );
};
export default CompanyService;
