import { createBrowserRouter, RouterProvider } from "react-router-dom";
import IntroductionPage from "../pages/IntroductionPage/IntroductionPage";
import CompanyJobsPage from "../pages/CompanyJobsPage/CompanyJobsPage";
import Header from "../Layout/Header";
import RootLayout from "../Layout/Root";
export const routerObject = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <IntroductionPage /> },
      {
        path: "/companies/:id/jobs",
        element: <CompanyJobsPage />,
      },
    ],
  },
]);
