import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Buttons/Button";
import "./style.scss";
import useAnimateBlock from "../../utils/hooks/useAnimateBlock";

type Props = {};
type FormValuesProps = {
  name: string | undefined;
  email: string | undefined;
  message: string | undefined;
};
export default function Contact({}: Props) {
  const navigate = useNavigate();
  const { divRef } = useAnimateBlock(0.5);

  const [formValues, setFormValues] = useState<FormValuesProps | null>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.currentTarget;
    setFormValues((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formValues }),
    })
      .then(() => {
        navigate("/contact/success");
      })
      .catch((error) => {});
  };

  const encode = (data: any) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  return (
    <div className="contact">
      <div ref={divRef} className="contact-form">
        <h1 className="mt-[70px] sm:mt-0">Get in touch</h1>
        <form onSubmit={handleSubmit}>
          <input type="hidden" name="form-name" value="contact" />
          <div>
            <p>
              <label>name:</label>
              <input
                type="text"
                name="name"
                value={formValues?.name}
                onChange={handleChange}
                required
              />
            </p>
            <p>
              <label>email:</label>
              <input
                type="email"
                name="email"
                value={formValues?.email}
                onChange={handleChange}
                required
              />
            </p>
          </div>
          <p>
            <label>message:</label>
            <textarea
              name="message"
              value={formValues?.message}
              onChange={handleChange}
              rows={5}
              required
            />
          </p>
          <p>
            <Button type="submit" variant="primary">
              Submit Message
            </Button>
          </p>
        </form>
      </div>
    </div>
  );
}
