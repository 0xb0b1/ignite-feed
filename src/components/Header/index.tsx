import React from "react";
import igniteLogo from "../../assets/ignite-logo.svg";

import styles from "./styles.module.scss";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Ignite Logo" />
      <span>Ignite Feed</span>
    </header>
  );
};
