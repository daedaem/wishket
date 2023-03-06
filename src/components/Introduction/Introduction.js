import { useState, useEffect } from "react";
import { AxiosInstance } from "../../api/axios";
import CompanyDetail from "../CompanyDetail/CompayDetail";
const Introduction = () => {
  const [data, setData] = useState("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    const fetchedData = await AxiosInstance.get(
      "BCK_1/company-detail/1.0.0/companies/1"
    );
    console.log(fetchedData.data);
    setData(() => [fetchedData.data]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section>
      {data &&
        data.map((item) => {
          return <CompanyDetail key={item.id} value={item} />;
        })}
    </section>
  );
};
export default Introduction;
