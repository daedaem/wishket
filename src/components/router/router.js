import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import IntroductionPage from "../pages/IntroductionPage/IntroductionPage";
import CompanyJobsPage from "../pages/CompanyJobsPage/CompanyJobsPage";
import RootLayout from "../Layout/Root";
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
        path: "/companies/:companyId/jobs",
        // path: "/companies",
        element: <CompanyJobsPage />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);
