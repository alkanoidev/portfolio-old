import React from "react";
import { ReactComponent as WavesSVG } from "../../assets/waves.svg";
import "./style.scss";
type Props = {};

export default function Waves({}: Props) {
  return (
    <WavesSVG className="waves" />
  );
}
