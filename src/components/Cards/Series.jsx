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
          <a
            href="https://www.netflix.com/br/title/80105452"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="Slasher" src={img1} className={styles.boxFilme} />
          </a>
        </div>

        <div className="item">
          <a href="https://www.netflix.com/br/title/80008434" target="_blank" rel="noopener noreferrer">
            <img alt="Z Nation" src={img2} className={styles.boxFilme} />
          </a>
        </div>

        <div className="item">
          <a href="https://www.primevideo.com/detail/0HBSJWFIHCW6RDKSPFSX0YILCW/ref=atv_dp_amz_det_c_UTPsmN_1_7?language=pt_BR" target="_blank" rel="noopener noreferrer">
            <img alt="Lore" src={img3} className={styles.boxFilme} />
          </a>
        </div>

        <div className="item">
          <a href="https://www.primevideo.com/detail/amzn1.dv.gti.6ab57cdb-36be-f57a-1c28-58350bb20daf?ref_=dvm_pds_tit_br_dc_s_g_mkw_swZAuZg7X-dc_pcrid_464563812425&mrntrk=slid__pgrid_110125654078_pgeo_1001521_x__ptid_kwd-295560765054" target="_blank" rel="noopener noreferrer">
            <img
              alt="Fear The Walking Dead"
              src={img4}
              className={styles.boxFilme}
            />
          </a>
        </div>

        <div className="item">
          <a href="imdb.com/title/tt5722214/" target="_blank" rel="noopener noreferrer">
            <img alt="Stan Against Evil" src={img5} className={styles.boxFilme} />
          </a>
        </div>

        <div className="item">
          <a href="https://www.primevideo.com/region/na/detail/0F73QZ6UQGXC04X1BLFIC5YQHS/ref=atv_dp?language=pt_BR" target="_blank" rel="noopener noreferrer">
            <img alt="The Dream Door" src={img6} className={styles.boxFilme} />
          </a>
        </div>

        <div className="item">
          <a href="https://www.netflix.com/br/title/80053653" target="_blank" rel="noopener noreferrer">
            <img alt="Scream" src={img7} className={styles.boxFilme} />
          </a>
        </div>

        <div className="item">
          <a href="https://globoplay.globo.com/american-horror-story/t/1mMXdhBKwP/" target="_blank" rel="noopener noreferrer">
            <img
              alt="American Horror Story"
              src={img8}
              className={styles.boxFilme}
            />
          </a>
        </div>

        <div className="item">
          <a href="https://www.netflix.com/br/title/80100172" target="_blank" rel="noopener noreferrer">
            <img alt="Dark" src={img9} className={styles.boxFilme} />
          </a>
        </div>

        <div className="item">
          <a href="https://www.primevideo.com/detail/amzn1.dv.gti.8cb9656a-d78c-83f3-c8e2-c4a285375df6?ref_=dvm_pds_tit_br_dc_s_g_mkw_sc5GgTTl1-dc_pcrid_487566238557&mrntrk=slid__pgrid_117146301962_pgeo_1001521_x__ptid_kwd-11132732" target="_blank" rel="noopener noreferrer">
            <img alt="Supernatural" src={img10} className={styles.boxFilme} />
          </a>
        </div>
      </Carrosel>
    </div>
  );
}

export default Series;
