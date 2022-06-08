import React from "react";
import Navbar from "../Navbar/Navbar";
import "./style.scss";

type Props = {
  children?: any;
};

export default function Layout({ children }: Props) {
  return (
    <div className="Layout">
      <Navbar />
      {children}
      {/* <div className="blobs">
        <div className="blob"></div>
        <div className="blob" id="blob1"></div>
      </div> */}
    </div>
  );
}
