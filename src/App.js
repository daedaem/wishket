import React from "react";
import { RouterProvider } from "react-router";
import { routerObject } from "./router/router";

const App = () => {
  return (
    <>
      <RouterProvider router={routerObject}></RouterProvider>
    </>
  );
};
export default App;
