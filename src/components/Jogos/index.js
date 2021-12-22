import React from "react";

// Carrossel e estilos
import styles from "../Style.module.css";
import Carrosel from "../Carrosel";

// imagens
import Silent from "./img/mini-1.jpg";
import Resident from "./img/mini-2.jpg";
import Until from "./img/mini-3.jpg";
import Amnesia from "./img/mini-4.jpg";
import Granny from "./img/mini-5.jpg";
import Phasmophobia from "./img/mini-6.jpg";
import Outlast from "./img/mini-7.jpg";
import Daylight from "./img/mini-8.jpg";
import TLOU from "./img/mini-9.jpg";
import Metro from "./img/mini-10.jpg";

function Filmes() {
  return (
    <div className={styles.carroselFilmes} id="jogos">
      <p className={styles.logo}>Jogos</p>
      <Carrosel>
        <div className="item">
          <a
            href="https://www.youtube.com/watch?v=9s5t6R3aWwY"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="Silent Hill 3" src={Silent} className={styles.boxFilme} />
          </a>
        </div>

        <div className="item">
          <a
            href="https://www.youtube.com/watch?v=W1OUs3HwIuos"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="Resident Evil 7: Biohazard "
              src={Resident}
              className={styles.boxFilme}
            />
          </a>
        </div>

        <div className="item">
          <a
            href="https://www.youtube.com/watch?v=NOVXqlx8aHk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="Until Dawn" src={Until} className={styles.boxFilme} />
          </a>
        </div>

        <div className="item">
          <a
            href="https://www.youtube.com/watch?v=u1nY_5-UrY4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="Amnesia: The Dark Descent"
              src={Amnesia}
              className={styles.boxFilme}
            />
          </a>
        </div>

        <div className="item">
          <a
            href="https://www.youtube.com/watch?v=4rsXOjQshJs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="Granny" src={Granny} className={styles.boxFilme} />
          </a>
        </div>

        <div className="item">
          <a
            href="https://www.youtube.com/watch?v=sRa9oeo5KiY"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="Phasmophobia"
              src={Phasmophobia}
              className={styles.boxFilme}
            />
          </a>
        </div>

        <div className="item">
          <a
            href="https://www.youtube.com/watch?v=uKA-IA4locM"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="Outlast" src={Outlast} className={styles.boxFilme} />
          </a>
        </div>

        <div className="item">
          <a
            href="https://www.youtube.com/watch?v=JGhIXLO3ul8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="Dead by Daylight"
              src={Daylight}
              className={styles.boxFilme}
            />
          </a>
        </div>

        <div className="item">
          <a
            href="https://www.youtube.com/watch?v=kE7li_u1nmg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="The Last Of Us" src={TLOU} className={styles.boxFilme} />
          </a>
        </div>

        <div className="item">
          <a
            href="https://www.youtube.com/watch?v=j-GmGxjPnP4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="Metro Exodus" src={Metro} className={styles.boxFilme} />
          </a>
        </div>
      </Carrosel>
    </div>
  );
}

export default Filmes;
