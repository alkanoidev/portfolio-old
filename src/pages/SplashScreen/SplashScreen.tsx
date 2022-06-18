import React, { Component, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Avatar from "../../assets/avatar.png";

function LoadingMessage() {
  return (
    <div className="w-full h-full absolute z-10 bg-bg dark:bg-bg-dark flex items-center justify-center">
      <img src={Avatar} alt="Loading..." className="w-24 h-24" />
    </div>
  );
}

function withSplashScreen(WrappedComponent: React.FC) {
  return function (props: any) {
    const [loading, setLoading] = useState<boolean>(true);
    const { pathname } = useLocation();

    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }, [pathname]);

    if (loading) {
      return <LoadingMessage />;
    }
    return <WrappedComponent {...props} />;
  };
}

export default withSplashScreen;
