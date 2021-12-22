import React from "react";

// Carrossel e estilos
import styles from "../Style.module.css";
import Carrosel from "../Carrosel";

// imagens
import Jeff from "./img/mini-1.jpg";
import Slenderman from "./img/mini-2.jpg";
import Ticci from "./img/mini-3.jpg";
import Ben from "./img/mini-4.jpg";
import Eyeless from "./img/mini-5.jpg";
import Sally from "./img/mini-6.jpg";
import Jack from "./img/mini-7.jpg";
import Siren from "./img/mini-8.jpg";
import Jane from "./img/mini-9.jpg";
import Jill from "./img/mini-10.jpg";

function Creepypastas() {
  return (
    <div className={styles.carroselFilmes} id="creepypastas">
      <p className={styles.logo}>Creepypastas</p>
      <Carrosel>
        <div className="item">
          <a
            href="https://www.youtube.com/watch?v=798f9Up4hfc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="Jeff the Killer" src={Jeff} className={styles.boxFilme} />
            História do Jeff the Killer
          </a>
        </div>

        <div className="item">
          <a
            href="https://www.youtube.com/watch?v=HwLPaYN18iE"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="Slenderman"
              src={Slenderman}
              className={styles.boxFilme}
            />
            História do Slenderman
          </a>
        </div>

        <div className="item">
          <a
            href="https://www.youtube.com/watch?v=T9QOc-SBLK8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="Ticci Toby" src={Ticci} className={styles.boxFilme} />
            História do Ticci Toby
          </a>
        </div>

        <div className="item">
          <a
            href="https://www.youtube.com/watch?v=bVqu26WZi5E"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="Ben Drowned" src={Ben} className={styles.boxFilme} />
            História do Ben Drowned
          </a>
        </div>

        <div className="item">
          <a
            href="https://www.youtube.com/watch?v=eMMuMVkewuI"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="Eyeless Jack" src={Eyeless} className={styles.boxFilme} />
            História do Eyeless Jack
          </a>
        </div>

        <div className="item">
          <a
            href="https://www.youtube.com/watch?v=oGiDhR-3j5g"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="Sally a Suja" src={Sally} className={styles.boxFilme} />
            História da Sally a Suja
          </a>
        </div>

        <div className="item">
          <a
            href="https://www.youtube.com/watch?v=UFo9bV88kZ4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="Jack Risonho" src={Jack} className={styles.boxFilme} />
            História do Jack Risonho
          </a>
        </div>

        <div className="item">
          <a
            href="https://www.youtube.com/watch?v=dlcRkl79DZU"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="Siren Head" src={Siren} className={styles.boxFilme} />
            História do Siren Head
          </a>
        </div>

        <div className="item">
          <a
            href="https://www.youtube.com/watch?v=ueU7EQLQkKA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="Jane the Killer" src={Jane} className={styles.boxFilme} />
            História da Jane the Killer
          </a>
        </div>

        <div className="item">
          <a
            href="https://www.youtube.com/watch?v=3mSTLhZozoM"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="Jill Risonha" src={Jill} className={styles.boxFilme} />
            História Jill Risonha
          </a>
        </div>
      </Carrosel>
    </div>
  );
}

export default Creepypastas;
