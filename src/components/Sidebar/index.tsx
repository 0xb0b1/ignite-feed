import styles from "./styles.module.scss";
import background from "../../assets/background.svg";
import profile from "../../assets/profile.svg";
import profileButton from "../../assets/profile-button.svg";

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <header>
        <img src={background} alt="background" />
      </header>

      <section className={styles.content}>
        <div className={styles.profile}>
          <img src={profile} alt="profile" />
        </div>
        <div className={styles.info}>
          <p>Leslie Alexander</p>
          <span>UI Designer</span>
        </div>
      </section>

      <button className={styles.profileEdit}>
        <img src={profileButton} alt="Editar perfil" />
        Editar Perfil
      </button>
    </aside>
  );
};
