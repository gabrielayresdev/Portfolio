import React from "react";
import styles from "./Menu.module.sass";
import burguer from "../../assets/bars-solid.svg";

const Menu = () => {
  const [active, setActive] = React.useState(false);

  const closeModal: React.MouseEventHandler<HTMLElement> = ({
    target,
    currentTarget,
  }) => {
    if (currentTarget === target) setActive(false);
  };

  return (
    <header className={styles.menu}>
      <h1>{`<Gabriel Ayres />`}</h1>
      <nav className={active ? styles.active : ""}>
        <img
          src={burguer}
          alt=""
          className={styles.menuBtn}
          onClick={() => {
            setActive((current) => !current);
          }}
        />
        <div className={styles.ulContainer} onClick={closeModal}>
          <ul>
            {["tecnologias", "projetos", "certificados", "contato"].map(
              (value) => (
                <li key={value}>
                  <a onClick={() => setActive(false)}>{value}</a>
                </li>
              )
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Menu;
