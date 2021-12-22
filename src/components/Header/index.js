import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <header>
        <div className={styles.content}>
          <a href="/" className={styles.logo}>
            HORRORFLIX
          </a>
          <nav>
            <a href="#filmes" className={styles.a}>
              Filmes
            </a>
            <a href="#series" className={styles.a}>
              Séries
            </a>
            <a href="#animes" className={styles.a}>
              Animes
            </a>
            <a href="#creepypastas" className={styles.a}>
              Creepypastas
            </a>
            <a href="#jogos" className={styles.a}>
              Jogos
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
