import IntroductionPage from "./components/pages/IntroductionPage/IntroductionPage";
// import CompanyProvider from "./store/CompanyProvider";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import React from "react";
// import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import { routerObject } from "./components/router/router";

const App = () => {
  return (
    <>
      <RouterProvider router={routerObject}>
        <Header />
        <IntroductionPage />
      </RouterProvider>
      <Footer />
    </>
  );
};
export default App;
