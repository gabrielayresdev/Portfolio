import React from "react";
import styles from "./Contact.module.sass";
import whatsapp from "../../../assets/whatsapp.svg";
import emailIcon from "../../../assets/envelope-regular.svg";
import Form from "../../Shared/Form/Index";
import useForm from "../../../Hooks/useForm";

const Contact = () => {
  const email = useForm("email");
  const name = useForm(false);
  const message = useForm(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (email.validate() && name.validate() && message.validate()) {
      console.log("Enviou");
    } else {
      console.log("Não enviou");
    }
  }

  return (
    <div className={styles.form}>
      <div className={styles.leftWrapper}>
        <h2 className={styles.title}>Vamos trabalhar juntos!</h2>
        <span>
          <img src={emailIcon} alt="E-mail" />
          gabriel.ar.fort@gmail.com
        </span>
        <span>
          <img src={whatsapp} alt="Whatsapp" />
          +55 021 967213085
        </span>
      </div>
      <div className={styles.rightWrapper}>
        <Form.Root onSubmit={handleSubmit}>
          <Form.Input
            label="E-mail"
            value={email.value}
            error={email.error}
            onBlur={email.onBlur}
            onChange={email.onChange}
          />
          <Form.Input
            label="Nome"
            value={name.value}
            onChange={name.onChange}
          />
          <Form.Textarea
            label="Mensagem"
            value={message.value}
            onChange={message.onChange}
          />

          <Form.Button>Enviar</Form.Button>
        </Form.Root>
      </div>
    </div>
  );
};

export default Contact;
