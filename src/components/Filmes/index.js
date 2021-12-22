import React from "react";

// Carrossel e estilos
import styles from "../Style.module.css";
import Carrosel from "../Carrosel";

// imagens
import Eli from "./img/mini-1.jpg";
import Fear1 from "./img/mini-2.jpg";
import Invocação from "./img/mini-3.jpg";
import Slender from "./img/mini-4.jpg";
import Blair from "./img/mini-5.jpg";
import Chucky from "./img/mini-6.jpg";
import Friday13 from "./img/mini-7.jpg";
import Poltergeist from "./img/mini-8.jpg";
import Halloween from "./img/mini-9.jpg";
import Pennywise from "./img/mini-10.jpg";

function Filmes() {
  return (
    <div className={styles.carroselFilmes} id="filmes">
      <p className={styles.logo}>Filmes</p>
      <Carrosel>
        <div className="item">
          <a
            href="https://www.youtube.com/watch?v=ndsKKudvygk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="Eli" src={Eli} className={styles.boxFilme} />
          </a>
        </div>

        <div className="item">
          <a
            href="https://www.youtube.com/watch?v=ZoVM-Ol_7O4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="Fear Street Pt. 1"
              src={Fear1}
              className={styles.boxFilme}
            />
          </a>
        </div>

        <div className="item">
          <a
            href="https://www.youtube.com/watch?v=wlXAkTjQEi4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="Invocação do Mal 1"
              src={Invocação}
              className={styles.boxFilme}
            />
          </a>
        </div>

        <div className="item">
          <a
            href="https://www.youtube.com/watch?v=5tJcmjG0VFA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="_Beware The Slenderman"
              src={Slender}
              className={styles.boxFilme}
            />
          </a>
        </div>

        <div className="item">
          <a
            href="https://www.youtube.com/watch?v=zgPiiaLQD5Y"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="A Bruxa de Blair"
              src={Blair}
              className={styles.boxFilme}
            />
          </a>
        </div>

        <div className="item">
          <a
            href="https://www.youtube.com/watch?v=o28wfpyrkoM"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="O Culto de Chucky"
              src={Chucky}
              className={styles.boxFilme}
            />
          </a>
        </div>

        <div className="item">
          <a
            href="https://www.youtube.com/watch?v=iw07xY0dLxg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="Sexta-Feira 13 Capitulo Final"
              src={Friday13}
              className={styles.boxFilme}
            />
          </a>
        </div>

        <div className="item">
          <a
            href="https://www.youtube.com/watch?v=9eZgEKjYJqA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="Poltergeist"
              src={Poltergeist}
              className={styles.boxFilme}
            />
          </a>
        </div>

        <div className="item">
          <a
            href="https://www.youtube.com/watch?v=ek1ePFp-nBI"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="Halloween" src={Halloween} className={styles.boxFilme} />
          </a>
        </div>

        <div className="item">
          <a
            href="https://www.youtube.com/watch?v=Zs0hLEHAoSs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="It, A Coisa: Capitulo 2"
              src={Pennywise}
              className={styles.boxFilme}
            />
          </a>
        </div>
      </Carrosel>
    </div>
  );
}

export default Filmes;
