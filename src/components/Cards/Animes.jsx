import React from 'react'

// Carrossel e estilos
import styles from '../Style.module.css'
import Carrosel from '../Carrosel'
import { animes } from '../../assets/data'

function Animes() {
  return (
    <div className={styles.carroselFilmes} id="animes">
      <p className={styles.logo}>Animes</p>
      <Carrosel>
        {animes.map((anime) => (
          <div className="item" key={anime.id}>
            <a href={anime.link} target="_blank" rel="noopener noreferrer">
              <img
                alt={anime.alt}
                src={anime.image}
                className={styles.boxFilme}
              />
            </a>
          </div>
        ))}
      </Carrosel>
    </div>
  )
}

export default Animes
