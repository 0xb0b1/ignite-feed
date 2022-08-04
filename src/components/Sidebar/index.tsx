import { PencilLine } from "phosphor-react";
import background from "../../assets/background.svg";
import { Avatar } from "../Avatar";

import styles from "./styles.module.scss";

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={background} alt="background" />

      <div className={styles.profile}>
        <Avatar src="https://github.com/0xb0b1.png" hasBorder />
        <strong>Leslie Alexander</strong>
        <span>UI Designer</span>
      </div>

      <footer className={styles.footer}>
        <a href="#">
          <PencilLine size={20} />
          Editar Perfil
        </a>
      </footer>
    </aside>
  );
};
