import { createBrowserRouter, RouterProvider } from "react-router-dom";
import IntroductionPage from "../pages/IntroductionPage/IntroductionPage";
import CompanyJobsPage from "../pages/CompanyJobsPage/CompanyJobsPage";
import RootLayout from "../Layout/Root";
import ErrorPage from "../pages/Error/Error";
export const routerObject = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <IntroductionPage /> },
      {
        path: "/companies/:id/jobs",
        element: <CompanyJobsPage />,
      },
    ],
  },
]);
