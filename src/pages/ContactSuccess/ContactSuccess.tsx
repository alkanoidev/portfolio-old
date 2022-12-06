import { Link } from "react-router-dom";
import Button from "../../components/Buttons/Button";
import "./style.scss";
import useAnimateBlock from "../../utils/hooks/useAnimateBlock";


export default function ContactSuccess() {
  const { divRef } = useAnimateBlock(0.5);
  return (
    <div className="contact-success">
      <div
        className="form-submitted"
        ref={divRef}
      >
        <h1 className="text-headline mt-[70px] sm:mt-0">
          thank you!
        </h1>
        <h2 className="text-subh text-center">
          i will reach back to you shortly
        </h2>
        <img src="../cat.gif" alt="cat gif" loading="lazy" />
        <Button variant="primary">
          <Link to="/contact">send-a-new-message</Link>
        </Button>
      </div>
    </div>
  );
}
