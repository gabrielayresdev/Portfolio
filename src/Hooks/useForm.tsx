import React from "react";

type Types = {
  [key: string]: {
    regex: RegExp;
    message: string;
  };
};

const types: Types = {
  cep: {
    regex: /^\d{5}-?\d{3}$/,
    message: "Cep inválido",
  },
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Email inválido",
  },
};

type inputType = "cep" | "email";

const useForm = (type: string | false) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState<string | null>(null);

  function validate(value: string) {
    if (type === false) return true;
    if (value.length === 0) {
      setError("Preencha um valor");
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({
    target,
  }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    error,
    onChange,
    onBlur: () => validate(value),
    validate: () => validate(value),
  };
};

export default useForm;
