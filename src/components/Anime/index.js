import React from "react";

// Carrossel e estilos
import styles from "../Style.module.css";
import Carrosel from "../Carrosel";

// imagens
import Titan from "./img/mini-1.jpg";
import Death from "./img/mini-2.jpg";
import Jojo from "./img/mini-3.jpg";
import Ghoul from "./img/mini-4.jpg";
import Emma from "./img/mini-5.jpg";
import Parasite from "./img/mini-6.jpg";
import BloodC from "./img/mini-7.jpg";
import Corpse from "./img/mini-8.jpg";
import Tanjiro from "./img/mini-9.jpg";
import Hell from "./img/mini-10.jpg";

function Animes() {
  return (
    <div className={styles.carroselFilmes} id="animes">
      <p className={styles.logo}>Animes</p>
      <Carrosel>
        <div className="item">
          <a
            href="https://www.youtube.com/watch?v=6MRxT8kz30k"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="Attack On Titan"
              src={Titan}
              className={styles.boxFilme}
            />
          </a>
        </div>

        <div className="item">
          <a
            href="https://www.youtube.com/watch?v=LM1VWi1-br8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="Death Note" src={Death} className={styles.boxFilme} />
          </a>
        </div>

        <div className="item">
          <a
            href="https://www.youtube.com/watch?v=fvSKmPdD2a4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="Jojo's Bizarre Adventure"
              src={Jojo}
              className={styles.boxFilme}
            />
          </a>
        </div>

        <div className="item">
          <a
            href="https://www.youtube.com/watch?v=ETHpMMV8rJU"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="Tokyo Ghoul" src={Ghoul} className={styles.boxFilme} />
          </a>
        </div>

        <div className="item">
          <a
            href="https://www.youtube.com/watch?v=ApLudqucq-s"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="The Promised Neverland"
              src={Emma}
              className={styles.boxFilme}
            />
          </a>
        </div>

        <div className="item">
          <a
            href="https://www.youtube.com/watch?v=JshPV43nur4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="Parasite: The Maxim"
              src={Parasite}
              className={styles.boxFilme}
            />
          </a>
        </div>

        <div className="item">
          <a
            href="https://www.youtube.com/watch?v=P6IJ4VLLUj4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="Blood-C" src={BloodC} className={styles.boxFilme} />
          </a>
        </div>

        <div className="item">
          <a
            href="https://www.youtube.com/watch?v=weMxaz2KqHk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="Corpse Party: Tortured Souls"
              src={Corpse}
              className={styles.boxFilme}
            />
          </a>
        </div>

        <div className="item">
          <a
            href="https://www.youtube.com/watch?v=VQGCKyvzIM4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="Demon Slayer" src={Tanjiro} className={styles.boxFilme} />
          </a>
        </div>

        <div className="item">
          <a
            href="https://www.youtube.com/watch?v=Zo5wuctIMWk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="Hell Girl" src={Hell} className={styles.boxFilme} />
          </a>
        </div>
      </Carrosel>
    </div>
  );
}

export default Animes;
