import { useState, useEffect } from "react";
import { AxiosInstance } from "../../../api/axios";
import CompanyDetail from "../../CompanyDetail/CompanyDetail";
import CompanyJobs from "../../CompanyJobs/CompanyJobs";
import CompanyService from "../../CompanyService/CompanyService";
import classes from "./IntroductionPage.module.css";

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

  const fetchData = {
    detailFetchData: async (url) => {
      setIsDetailLoading(true);
      try {
        const fetchedData = await AxiosInstance.get(url);
        setDetailData((prev) => fetchedData.data);
        setIsDetailLoading(false);
      } catch (error) {
        setDetailError(() => error);
      }
      setIsDetailLoading(false);
    },

    jobsFetchData: async (url) => {
      setIsJobsLoading(true);
      try {
        const fetchedData = await AxiosInstance.get(url);
        setJobsData(() => fetchedData.data.jobs);
        setIsJobsLoading(false);
      } catch (error) {
        setJobsError(() => error);
      }
      setIsJobsLoading(false);
    },
    serviceFetchData: async (url) => {
      setIsServiceLoading(true);
      try {
        const fetchedData = await AxiosInstance.get(url);
        setServiceData(() => fetchedData.data.services);
        setIsServiceLoading(false);
      } catch (error) {
        setServiceError(() => error);
      }
      setIsServiceLoading(false);
    },
  };
  useEffect(() => {
    fetchData.detailFetchData("BCK_1/company-detail/1.0.0/companies/1");
    fetchData.jobsFetchData("wishket/company-jobs/1.0.0/companies/1/jobs");
    fetchData.serviceFetchData(
      "wishket/company-services/1.0.0/companies/1/services"
    );
  }, []);

  // const comDetail = jobsData.reduce((init, item, idx) => {
  //   return item.jobs;
  // }, {});

  // console.log(1, comDetail);
  // console.log(2, jobsData);
  return (
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
        <h3>기업 소개</h3>

        {!isServiceLoading && (
          <article>
            <h4>주요 서비스</h4>
            {serviceData.map((item, idx) => {
              return <CompanyService key={idx} value={item} />;
            })}
          </article>
        )}
      </section>
      {!isJobsLoading && <CompanyDetail value={jobsData} />}
    </div>
  );
};
export default IntroductionPage;
