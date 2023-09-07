import React from "react";
import styles from "./FormRoot.module.sass";

interface FormRootProps {
  children: React.ReactNode;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const FormRoot = ({ children, onSubmit }: FormRootProps) => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default FormRoot;
