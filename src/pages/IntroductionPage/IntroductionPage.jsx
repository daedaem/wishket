import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router";
import { AxiosInstance } from "../../api/axios";
import CompanyDetail from "../../components/CompanyDetail/CompanyDetail";
import CompanyJobsCard from "../../components/CompanyJobsCard/CompanyJobsCard";
import CompanyService from "../../components/CompanyService/CompanyService";
import classes from "./IntroductionPage.module.css";
import SideBar from "../../components/Layout/SideBar/SideBar";

const IntroductionPage = () => {
  const params = useParams();
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
    detailFetchData(`BCK_1/company-detail/1.0.0/companies/${params.companyId}`);
  }, [detailFetchData]);
  useEffect(() => {
    jobsFetchData(
      `wishket/company-jobs/1.0.0/companies/${params.companyId}/jobs`
    );
  }, [jobsFetchData]);
  useEffect(() => {
    serviceFetchData(
      `wishket/company-services/1.0.0/companies/${params.companyId}/services`
    );
  }, [serviceFetchData]);

  return (
    <div className={classes.totalFrame}>
      <section className={classes.detailFrame}>
        {!isDetailLoading && (
          <article className={classes.companyTitle}>
            <img className={classes.companyLogo} src={`${detailData.logo}`} />
            <h1 className={classes.companyName}>{detailData.name}</h1>
          </article>
        )}
        {!isJobsLoading && (
          <article>
            <CompanyJobsCard value={jobsData} detailData={detailData} />
          </article>
        )}
        <article>
          <h3>회사 소개</h3>
          {!isJobsLoading && <CompanyDetail value={jobsData} />}
          {!isServiceLoading && (
            <article>
              <h4>주요 서비스</h4>
              {serviceData.map((item, idx) => {
                return <CompanyService key={idx} value={item} />;
              })}
            </article>
          )}
        </article>
      </section>
      <SideBar value={detailData} />
    </div>
  );
};
export default IntroductionPage;
