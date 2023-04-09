import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Link, redirect, RouterProvider } from "react-router-dom";
import "./index.css";
import LandingPage from "./pages/LandingPage";
import Model from "./pages/Model";
import Result from "./pages/Result";

const ErrorPage = ()=>{
  return <div className="w-full h-full flex justify-center items-center">
    <p className="text-4xl">Something is wrong</p>
  </div>
}


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
    errorElement: <>
      <div className="flex flex-col w-full h-screen justify-center items-center gap-4">
        <p className="text-3xl font-bold">Some thing is wrong!</p>
        <Link to={'/'} className="text-xl py-2 px-8 bg-blue-500 hover:bg-blue-700 rounded-lg">Go back to home page</Link>
      </div>
    </>
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
