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
            href="https://animesonline.cc/anime/shingeki-no-kyojin/"
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
            href="https://animesonline.cc/anime/death-note/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="Death Note" src={Death} className={styles.boxFilme} />
          </a>
        </div>

        <div className="item">
          <a
            href="https://animesonline.cc/anime/jojo-no-kimyou-na-bouken-stardust-crusaders-1993/"
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
            href="https://animesonline.cc/anime/tokyo-ghoul/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="Tokyo Ghoul" src={Ghoul} className={styles.boxFilme} />
          </a>
        </div>

        <div className="item">
          <a
            href="https://animesonline.cc/anime/yakusoku-no-neverland/"
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
            href="https://animesonline.cc/anime/kiseijuu-sei-no-kakuritsu/"
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
            href="https://animesonline.cc/anime/blood-c/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="Blood-C" src={BloodC} className={styles.boxFilme} />
          </a>
        </div>

        <div className="item">
          <a
            href="https://animesonehd.xyz/35094/"
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
            href="https://animesonline.cc/anime/kimetsu-no-yaiba/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="Demon Slayer" src={Tanjiro} className={styles.boxFilme} />
          </a>
        </div>

        <div className="item">
          <a
            href="https://www.crunchyroll.com/pt-br/hell-girl-fourth-twilight"
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
