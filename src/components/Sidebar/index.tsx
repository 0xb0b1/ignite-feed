import background from "../../assets/background.svg";
import profileButton from "../../assets/profile-button.svg";

import styles from "./styles.module.scss";

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={background} alt="background" />

      <div className={styles.profile}>
        <strong>Leslie Alexander</strong>
        <span>UI Designer</span>
      </div>

      <footer className={styles.footer}>
        <a href="#">
          <img src={profileButton} alt="Editar perfil" />
          Editar Perfil
        </a>
      </footer>
    </aside>
  );
};
