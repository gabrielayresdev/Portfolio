import React from "react";
import styles from "./FormInput.module.sass";

interface IInput extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  icon?: React.ElementType;
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const FormTextarea = ({ icon, label, value, onChange, ...rest }: IInput) => {
  return (
    <div className={styles.inputWrapper}>
      <div className={styles.input + " " + styles.textarea}>
        <textarea
          value={value}
          onChange={onChange}
          {...rest}
          // Label acts like an placeholder
          placeholder=" "
        ></textarea>
        <label>{label}</label>
      </div>
    </div>
  );
};

export default FormTextarea;
