import React, { Suspense } from "react";
import "./style.scss";

const ProfilePage = React.lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return import("./ProjectPage");
});

export default function Project() {
  return (
    <Suspense fallback={<Skeleton />}>
      <ProfilePage />
    </Suspense>
  );
}

function Skeleton() {
  return (
    <div className="flex justify-center items-center flex-col mt-12 sm:mt-12">
      <div className="max-w-[700px] w-full flex justify-center items-start flex-col">
        <div className="w-1/2 h-5 dark:bg-bg/50 bg-bg-dark/50 rounded-md mb-5"></div>
        <div className="w-full h-4 dark:bg-bg/40 bg-bg-dark/40 rounded-md mb-3"></div>
        <div className="w-full h-4 dark:bg-bg/40 bg-bg-dark/40 rounded-md mb-3"></div>
        <div className="w-full h-4 dark:bg-bg/40 bg-bg-dark/40 rounded-md mb-3"></div>
        <div className="w-full h-[200px] dark:bg-bg/30 bg-bg-dark/30 rounded-md mb-4"></div>
        <div className="w-1/3 h-5 dark:bg-bg/50 bg-bg-dark/50 rounded-md mb-5"></div>
        <div className="w-full h-4 dark:bg-bg/40 bg-bg-dark/40 rounded-md mb-3"></div>
        <div className="w-full h-4 dark:bg-bg/40 bg-bg-dark/40 rounded-md mb-3"></div>
        <div className="w-full h-4 dark:bg-bg/40 bg-bg-dark/40 rounded-md mb-3"></div>
        <div className="w-full h-4 dark:bg-bg/40 bg-bg-dark/40 rounded-md mb-3"></div>
        <div className="w-full h-4 dark:bg-bg/40 bg-bg-dark/40 rounded-md mb-3"></div>
        <div className="w-5/12 h-5 dark:bg-bg/50 bg-bg-dark/40 rounded-md mb-5"></div>
        <div className="w-full h-4 dark:bg-bg/40 bg-bg-dark/40 rounded-md mb-3"></div>
        <div className="w-full h-4 dark:bg-bg/40 bg-bg-dark/40 rounded-md mb-3"></div>
        <div className="w-full h-4 dark:bg-bg/40 bg-bg-dark/40 rounded-md mb-3"></div>
        <div className="w-full h-4 dark:bg-bg/40 bg-bg-dark/40 rounded-md mb-3"></div>
        <div className="w-full h-4 dark:bg-bg/40 bg-bg-dark/40 rounded-md mb-3"></div>
        <div className="w-full h-4 dark:bg-bg/40 bg-bg-dark/40 rounded-md mb-3"></div>
        <div className="w-full h-4 dark:bg-bg/40 bg-bg-dark/40 rounded-md mb-3"></div>
        <div className="w-full h-[200px] dark:bg-bg/30 bg-bg-dark/30 rounded-md mb-4"></div>
      </div>
    </div>
  );
}
