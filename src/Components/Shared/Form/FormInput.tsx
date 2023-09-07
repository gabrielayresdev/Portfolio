import React from "react";
import styles from "./FormInput.module.sass";

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ElementType;
  label: string;
  value: string;
  error?: string | null;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const FormInput = ({
  icon,
  label,
  error,
  value,
  onChange,
  ...rest
}: IInput) => {
  return (
    <div className={styles.inputWrapper}>
      <div className={styles.input}>
        <input
          type="text"
          value={value}
          onChange={onChange}
          {...rest}
          // Label acts like an placeholder
          placeholder=" "
        ></input>
        <label>{label}</label>
      </div>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default FormInput;
