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

  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
    sendEmail: VoidFunction
  ) {
    event.preventDefault();

    if (email.validate() && name.validate() && message.validate()) {
      sendEmail();
      if (!loading && !error) {
        email.setValue("");
        name.setValue("");
        message.setValue("");
      }
    } else {
      console.log("Não enviou");
    }
  }

  return (
    <section id="contato" className={styles.form + " container"}>
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
        <Form.Root
          onSubmit={handleSubmit}
          setLoading={setLoading}
          setError={setError}
        >
          <Form.Input
            label="E-mail"
            value={email.value}
            error={email.error}
            onBlur={email.onBlur}
            onChange={email.onChange}
            name="user_email"
          />
          <Form.Input
            label="Nome"
            value={name.value}
            onChange={name.onChange}
            name="user_name"
          />
          <Form.Textarea
            label="Mensagem"
            value={message.value}
            onChange={message.onChange}
            name="message"
          />

          <Form.Button disabled={loading ? true : false}>Enviar</Form.Button>
        </Form.Root>
      </div>
    </section>
  );
};

export default Contact;
