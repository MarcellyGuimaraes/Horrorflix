import React from "react";

// Carrossel e estilos
import styles from "../Style.module.css";
import Carrosel from "../Carrosel";

// Imagens
import img1 from "./img/mini-1.jpg";
import img2 from "./img/mini-2.jpg";
import img3 from "./img/mini-3.jpg";
import img4 from "./img/mini-4.jpg";
import img5 from "./img/mini-5.jpg";
import img6 from "./img/mini-6.jpg";
import img7 from "./img/mini-7.jpg";
import img8 from "./img/mini-8.jpg";
import img9 from "./img/mini-9.jpg";
import img10 from "./img/mini-10.jpg";

function Series() {
  return (
    <div className={styles.carroselFilmes} id="series">
      <p className={styles.logo}>Séries</p>
      <Carrosel>
        <div className="item">
          <img alt="Slasher" src={img1} className={styles.boxFilme} />
        </div>

        <div className="item">
          <img alt="Z Nation" src={img2} className={styles.boxFilme} />
        </div>

        <div className="item">
          <img alt="Lore" src={img3} className={styles.boxFilme} />
        </div>

        <div className="item">
          <img
            alt="Fear The Walking Dead"
            src={img4}
            className={styles.boxFilme}
          />
        </div>

        <div className="item">
          <img alt="Stan Against Evil" src={img5} className={styles.boxFilme} />
        </div>

        <div className="item">
          <img alt="The Dream Door" src={img6} className={styles.boxFilme} />
        </div>

        <div className="item">
          <img alt="Scream" src={img7} className={styles.boxFilme} />
        </div>

        <div className="item">
          <img
            alt="American Horror Story"
            src={img8}
            className={styles.boxFilme}
          />
        </div>

        <div className="item">
          <img alt="Dark" src={img9} className={styles.boxFilme} />
        </div>

        <div className="item">
          <img alt="Supernatural" src={img10} className={styles.boxFilme} />
        </div>
      </Carrosel>
    </div>
  );
}

export default Series;
