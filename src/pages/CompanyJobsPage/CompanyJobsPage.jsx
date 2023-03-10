import { useState, useEffect, useCallback } from "react";
import { AxiosInstance } from "../../api/axios";
import { useParams } from "react-router";
import CompanyDetail from "../../components/CompanyDetail/CompanyDetail";
import CompanyJobs from "../../components/CompanyJobs/CompanyJobs";
import classes from "./CompanyJobsPage.module.css";
import SideBar from "../../components/Layout/SideBar/SideBar";

const CompanyJobsPage = () => {
  const params = useParams();
  const [detailData, setDetailData] = useState([]);
  const [detailError, setDetailError] = useState(false);
  const [isDetailLoading, setIsDetailLoading] = useState(false);

  const [jobsData, setJobsData] = useState("");
  const [jobsError, setJobsError] = useState(false);
  const [isJobsLoading, setIsJobsLoading] = useState(false);

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

      const jobsContent =
        fetchedData.data.jobs &&
        fetchedData.data.jobs.find((el) => {
          return el.id == params.id;
        });
      setJobsData(() => jobsContent);
      setIsJobsLoading(false);
    } catch (error) {
      setJobsError(() => error);
    }
    setIsJobsLoading(false);
  }, []);

  useEffect(() => {
    detailFetchData(`BCK_1/company-detail/1.0.0/companies/1`);
  }, [detailFetchData]);
  useEffect(() => {
    jobsFetchData(`wishket/company-jobs/1.0.0/companies/1/jobs`);
  }, [jobsFetchData]);

  console.log(jobsData);
  return (
    <div className={classes.totalFrame}>
      <section className={classes.detailFrame}>
        {!isJobsLoading && !isDetailLoading && (
          <CompanyJobs jobsData={jobsData} detailData={detailData} />
        )}
        {/* <article>
          <h3>?????? ??????</h3>
          {!isJobsLoading && <CompanyDetail value={jobsData} />}
        </article> */}
      </section>
      <SideBar value={detailData} />
    </div>
  );
};
export default CompanyJobsPage;
