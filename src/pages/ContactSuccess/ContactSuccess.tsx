import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Buttons/Button/Button";
import "./style.scss";
type Props = {};

export default function ContactSuccess({}: Props) {
  return (
    <div className="contact-success">
      <div className="form-submitted">
        <h1 className="text-headline">thank you!</h1>
        <h2 className="text-subh text-center">
          i will reach back to you shortly
        </h2>
        <img src="../cat.gif" alt="cat gif" />
        <Button variant="primary">
          <Link to="/contact">send-a-new-message</Link>
        </Button>
      </div>
    </div>
  );
}
