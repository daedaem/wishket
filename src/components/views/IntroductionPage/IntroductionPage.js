import { useState, useEffect } from "react";
import { AxiosInstance } from "../../../api/axios";
import CompanyDetail from "../../CompanyDetail/CompanyDetail";
import CompanyJobs from "../../CompanyJobs/CompanyJobs";
const IntroductionPage = () => {
  const [data, setData] = useState("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const fetchedData = await AxiosInstance.get(
        "BCK_1/company-detail/1.0.0/companies/1"
      );
      setData(() => [fetchedData.data]);
      setIsLoading(false);
    } catch (error) {
      setError(() => error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <section>
        <div>로고</div>
        <h1>title</h1>
      </section>
      <section>
        <CompanyJobs />
      </section>
      <section>
        {data &&
          data.map((item) => {
            return <CompanyDetail key={item.id} value={item} />;
          })}
      </section>
    </>
  );
};
export default IntroductionPage;
