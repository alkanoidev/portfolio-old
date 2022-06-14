import React from "react";
import { ReactComponent as WavesSVG } from "../../assets/WavesTransparent.svg";
import "./style.scss";
type Props = {};

export default function Waves({}: Props) {
  return <WavesSVG className="waves" />;
}
