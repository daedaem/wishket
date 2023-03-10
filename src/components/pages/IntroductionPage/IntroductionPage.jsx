import { useState, useEffect, useCallback } from "react";
import { AxiosInstance } from "../../../api/axios";
import CompanyDetail from "../../CompanyDetail/CompanyDetail";
import CompanyJobs from "../../CompanyJobs/CompanyJobs";
import CompanyService from "../../CompanyService/CompanyService";
import classes from "./IntroductionPage.module.css";
import SideBar from "../../Layout/SideBar/SideBar";

const IntroductionPage = () => {
  const [detailData, setDetailData] = useState([]);
  const [detailError, setDetailError] = useState(false);
  const [isDetailLoading, setIsDetailLoading] = useState(false);

  const [jobsData, setJobsData] = useState("");
  const [jobsError, setJobsError] = useState(false);
  const [isJobsLoading, setIsJobsLoading] = useState(false);

  const [serviceData, setServiceData] = useState([]);
  const [serviceError, setServiceError] = useState(false);
  const [isServiceLoading, setIsServiceLoading] = useState(false);

  const detailFetchData = useCallback(async (url) => {
    setIsDetailLoading(true);
    try {
      const fetchedData = await AxiosInstance.get(url);
      setDetailData(() => fetchedData.data);
      setIsDetailLoading(false);
    } catch (error) {
      setDetailError(() => error);
    }
    setIsDetailLoading(false);
  }, []);

  const jobsFetchData = useCallback(async (url) => {
    setIsJobsLoading(true);
    try {
      const fetchedData = await AxiosInstance.get(url);
      setJobsData(() => fetchedData.data.jobs);
      setIsJobsLoading(false);
    } catch (error) {
      setJobsError(() => error);
    }
    setIsJobsLoading(false);
  }, []);
  const serviceFetchData = useCallback(async (url) => {
    setIsServiceLoading(true);
    try {
      const fetchedData = await AxiosInstance.get(url);
      setServiceData(() => fetchedData.data.services);
      setIsServiceLoading(false);
    } catch (error) {
      setServiceError(() => error);
    }
    setIsServiceLoading(false);
  }, []);

  useEffect(() => {
    detailFetchData("BCK_1/company-detail/1.0.0/companies/1");
  }, [detailFetchData]);
  useEffect(() => {
    jobsFetchData("wishket/company-jobs/1.0.0/companies/1/jobs");
  }, [jobsFetchData]);
  useEffect(() => {
    serviceFetchData("wishket/company-services/1.0.0/companies/1/services");
  }, [serviceFetchData]);

  // const comDetail = jobsData.reduce((init, item, idx) => {
  //   return item.jobs;
  // }, {});

  return (
    <div className={classes.main}>
      <div className={classes.totalFrame}>
        {!isDetailLoading && (
          <section className={classes.companyTitle}>
            <img className={classes.companyLogo} src={`${detailData.logo}`} />
            <h1 className={classes.companyName}>{detailData.name}</h1>
          </section>
        )}
        {!isJobsLoading && (
          <section>
            <CompanyJobs value={jobsData} />
          </section>
        )}
        <section>
          <h3>회사 소개</h3>
          {!isJobsLoading && <CompanyDetail value={jobsData} />}
          {!isServiceLoading && (
            <article>
              <h3>주요 서비스</h3>
              {serviceData.map((item, idx) => {
                return <CompanyService key={idx} value={item} />;
              })}
            </article>
          )}
        </section>
      </div>
      <SideBar value={detailData} />
    </div>
  );
};
export default IntroductionPage;
