import axios from "axios";

const BASE_URL = "https://virtserver.swaggerhub.com/";
const COMPANY_DETAIL = `${BASE_URL}/BCK_1/company-detail/1.0.0/`;
const COMPANY_SERVICE = `${BASE_URL}/wishket/company-services/1.0.0/`;
const COMPANY_TEAM = `${BASE_URL}/wishket/company-teams/1.0.0/`;
const COMPANY_JOBS = `${BASE_URL}/wishket/company-jobs/1.0.0`;

export const AxiosInstance = axios.create({
  baseURL: `${BASE_URL}`,
});
