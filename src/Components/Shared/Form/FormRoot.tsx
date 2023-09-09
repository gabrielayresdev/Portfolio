import React from "react";
import styles from "./FormRoot.module.sass";
import emailjs from "@emailjs/browser";

interface FormRootProps {
  children: React.ReactNode;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const FormRoot = ({ children, onSubmit }: FormRootProps) => {
  const formRef = React.useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (formRef.current)
      emailjs
        .sendForm(
          "service_nypjud5",
          "template_5ardvmk",
          formRef.current,
          "LGzh_069h3ckxc6iB"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
  };

  return (
    <form className={styles.form} onSubmit={sendEmail} ref={formRef}>
      {children}
    </form>
  );
};

export default FormRoot;
