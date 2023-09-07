import React from "react";
import styles from "./FormButton.module.sass";

interface FormButtonInterface
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const FormButton = ({ children, ...rest }: FormButtonInterface) => {
  return (
    <button className={styles.button} {...rest}>
      {children}
    </button>
  );
};

export default FormButton;
