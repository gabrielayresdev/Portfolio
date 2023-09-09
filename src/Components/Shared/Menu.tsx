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

  React.useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    } else document.body.style.overflow = "auto";
  }, [active]);

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
                  <a href={`#${value}`} onClick={() => setActive(false)}>
                    {value}
                  </a>
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
