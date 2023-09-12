import React from "react";
import styles from "./Menu.module.sass";
import burguer from "../../assets/bars-solid.svg";

import { Link } from "react-scroll";

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
    } else document.body.removeAttribute("style");
  }, [active]);

  return (
    <header className={styles.menu + " sticky"}>
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
            {["projetos", "tecnologias", "certificados", "contato"].map(
              (value) => (
                <li key={value}>
                  <Link
                    to={value}
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    onClick={() => setActive(false)}
                  >
                    {value}
                  </Link>
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
