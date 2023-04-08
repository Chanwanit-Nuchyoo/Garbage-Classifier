import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import LandingPage from "./pages/LandingPage";
import Model from "./pages/Model";
import Result from "./pages/Result";

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "model",
    element: <Model />,
  },
  {
    path: "result",
    element: <Result />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="z-10 max-w-[100%] min-h-screen bg-BGdarkblue-500 text-white overflow-x-hidden">
      <div className="relative z-20">
        <RouterProvider router={myRouter} />
      </div>
      <div className="z-10 fixed rounded-full w-[919px] h-[919px] -top-[525px] left-[914px] bg-[#0DAFD4CF] opacity-30 blur-[500px]" />
      <div className="z-10 fixed rounded-full w-[919px] h-[919px] left-[0px] top-[700px] bg-[#FF6FE880] opacity-30 blur-[1000px]" />
    </div>
  </React.StrictMode>
);
