import React from "react";
import styles from "./Filme-principal.module.css";

function FilmePrincipal() {
  return (
    <main>
      <div className={styles.filmePrincipal}>
        <div className={styles.container}>
          <h3 className={styles.titulo}>STRANGER THINGS</h3>

          <p className={styles.descricao}>
            Quando um garoto desaparece, a cidade toda participa nas buscas. Mas
            o que encontram são segredos, forças sobrenaturais e uma menina.
            Assista agora a nova temporada de Stranger Things.
          </p>

          <div className={styles.botoes}>
            <a
              href="https://www.netflix.com/br/title/80057281"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={styles.botao}>
                <i className="fas fa-play-circle"></i>
                ASSISTIR AGORA
              </button>
            </a>

            <a
              href="https://pt.wikipedia.org/wiki/Stranger_Things"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={styles.botao}>
                <i className="fas fa-info-circle"></i>
                MAIS INFORMAÇÕES
              </button>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default FilmePrincipal;
