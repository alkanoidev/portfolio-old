import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Buttons/Button/Button";
import "./style.scss";

export default function Page404() {
  return (
    <div className="flex justify-center mt-24 sm:mt-32">
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-headline">oh no! you got lost ;(</h1>
        <Button variant="primary">
          <Link to="/">back_to_safety</Link>
        </Button>
      </div>
    </div>
  );
}
