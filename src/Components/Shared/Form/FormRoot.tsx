import React from "react";
import styles from "./FormRoot.module.sass";
import emailjs from "@emailjs/browser";

interface FormRootProps {
  children: React.ReactNode;
  onSubmit: (
    event: React.FormEvent<HTMLFormElement>,
    sendEmail: VoidFunction
  ) => void;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
}

const FormRoot = ({
  children,
  onSubmit,
  setLoading,
  setError,
}: FormRootProps) => {
  const formRef = React.useRef<HTMLFormElement | null>(null);

  const sendEmail = () => {
    if (formRef.current) {
      setLoading(true);
      setError(false);

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
            setError(error);
          }
        )
        .finally(() => setLoading(false));
    }
  };

  return (
    <form
      className={styles.form}
      onSubmit={(event) => {
        onSubmit(event, sendEmail);
      }}
      ref={formRef}
    >
      {children}
    </form>
  );
};

export default FormRoot;
