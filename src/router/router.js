import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import IntroductionPage from "../pages/IntroductionPage/IntroductionPage";
import CompanyJobsPage from "../pages/CompanyJobsPage/CompanyJobsPage";
import RootLayout from "./../components/Layout/Root";
import ErrorPage from "../pages/Error/Error";
export const routerObject = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/companies/:companyId",
        element: <IntroductionPage />,
        errorElement: <ErrorPage />,
      },
      {
        //TODO
        path: "/companies/:companyId/jobs/:id",
        // path: "/companies",
        element: <CompanyJobsPage />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);
