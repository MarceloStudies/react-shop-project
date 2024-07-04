import React from "react";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const { error } = useRouteError();
  console.log(error);
  return (
    <div className=" w-full h-screen flex flex-col justify-center items-center gap-4 bg-gradient-to-b from-slate-100 to-slate-300">
      <h1 className="font-bold text-4xl ">Oops!</h1>
      <p className="font-semibold text-3xl ">Something went wrong</p>
      <p className="text-stone-600">
        <i>{error.message || error.statusText}</i>
      </p>
    </div>
  );
}

export default ErrorPage;
