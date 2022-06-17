import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Buttons/Button/Button";
import CodeSnippet from "../../components/CodeSnippet/CodeSnippet";
import "./style.scss";

type Props = {};
type FormValuesProps = {
  name: string | undefined;
  email: string | undefined;
  message: string | undefined;
};
export default function Contact({}: Props) {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState<FormValuesProps | null>({
    name: "",
    email: "",
    message: "",
  });
  const [code, setCode] = useState<string>("");

  const handleChange = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.currentTarget;
    setFormValues((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    // fetch("/", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //   body: encode({ "form-name": "contact", ...formValues }),
    // })
    //   .then(() => {
    //     navigate("/contact/success");
    //   })
    //   .catch((error) => alert(error));
    navigate("success");
    e.preventDefault();
  };

  const encode = (data: any) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  useEffect(() => {
    setCode(`// submit message
    const button = document.querySelector("#sendBtn");

    const message = {
      name: "${formValues?.name}",
      email: "${formValues?.email}",
      message: ${"`" + formValues?.message + "`"},
    };
    
    button.addEventListener("click", () => {
      form.send(message);
    }); `);
  }, [formValues?.email, formValues?.name, formValues?.message]);

  return (
    <div className="contact">
      <div className="contact-form">
        <h1>Contact me</h1>
        <form onSubmit={handleSubmit}>
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>name:</label>
            <input
              type="text"
              name="name"
              value={formValues?.name}
              onChange={handleChange}
            />
          </p>
          <p>
            <label>email:</label>
            <input
              type="email"
              name="email"
              value={formValues?.email}
              onChange={handleChange}
            />
          </p>
          <p>
            <label>message:</label>
            <textarea
              name="message"
              value={formValues?.message}
              onChange={handleChange}
              rows={5}
            />
          </p>
          <p>
            <Button type="submit" variant="primary">
              submit_message
            </Button>
          </p>
        </form>
      </div>
      <div className="code">
        <CodeSnippet code={code} language="javascript" showLineNumbers />
      </div>

      <div id="blob1"></div>
      <div id="blob2"></div>
    </div>
  );
}
