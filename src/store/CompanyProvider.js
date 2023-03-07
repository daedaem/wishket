import { useState, useEffect } from "react";
import CompanyContext from "./company-context";
const CompanyProvider = (props) => {
  const [companyState, setCompanyState] = useState("");
  const detailChangeHandler = (data) => {
    setCompanyState((prev) => (prev = data));
  };
  const serviceChangeHandler = (data) => {
    setCompanyState((prev) => (prev = data));
  };
  const teamsChangeHandler = (data) => {
    setCompanyState((prev) => (prev = data));
  };
  const jobsChangeHandler = (data) => {
    setCompanyState((prev) => (prev = data));
    };
    
  const companyContext = {
    companyDetail: companyState.companyDetail,
    companyService: companyState.companyService,
    companyTeams: companyState.companyTeams,
    companyJobs: companyState.companyJobs,
    detailChangeHandler,
    serviceChangeHandler,
    teamsChangeHandler,
    jobsChangeHandler,
  };
  return (
    <CompanyContext.Provider value={companyContext}>
      {props.children}
    </CompanyContext.Provider>
  );
};
export default CompanyProvider;
