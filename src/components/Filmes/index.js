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
            href="https://www.netflix.com/br/title/80206910"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="Eli" src={Eli} className={styles.boxFilme} />
          </a>
        </div>

        <div className="item">
          <a
            href="https://www.netflix.com/br/title/81325689"
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
            href="https://www.telecine.com.br/filme/Invoca%C3%A7%C3%A3o_do_Mal_24266?action=play_filme"
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
            href="https://www.amazon.com/Beware-Slenderman-Irene-Taylor-Brodsky/dp/B01MTAXIH3"
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
            href="https://www.netflix.com/br/title/80111413"
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
            href="https://tv.apple.com/br/movie/o-culto-de-chucky/umc.cmc.3zaflnly05sq41xd02izuuvc0"
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
            href="https://tv.apple.com/br/movie/sexta-feira-13-capitulo-final---parte-4/umc.cmc.752xl9w4xw2cqpxnrdeq0zwek"
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
            href="https://www.adorocinema.com/filmes/filme-1081/"
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
            href="netflix.com/fr-en/title/80993029"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="Halloween" src={Halloween} className={styles.boxFilme} />
          </a>
        </div>

        <div className="item">
          <a
            href="https://www.adorocinema.com/filmes/filme-208633/"
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
