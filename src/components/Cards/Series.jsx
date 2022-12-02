import React from 'react'

// Carrossel e estilos
import styles from '../Style.module.css'
import Carrosel from '../Carrosel'
import { series } from '../../assets/data'

// Imagens

function Series() {
  return (
    <div className={styles.carroselFilmes} id="series">
      <p className={styles.logo}>Séries</p>
      <Carrosel>
        {series.map((serie) => (
          <div className="item" key={serie.id}>
            <a href={serie.link} target="_blank" rel="noopener noreferrer">
              <img
                alt={serie.alt}
                src={serie.image}
                className={styles.boxFilme}
              />
            </a>
          </div>
        ))}
      </Carrosel>
    </div>
  )
}

export default Series
