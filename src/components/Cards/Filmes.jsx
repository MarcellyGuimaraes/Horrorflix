import React from 'react'

// Carrossel e estilos
import styles from '../Style.module.css'
import Carrosel from '../Carrosel'
import { filmes } from '../../assets/data'

function Filmes() {
  return (
    <div className={styles.carroselFilmes} id="filmes">
      <p className={styles.logo}>Filmes</p>
      <Carrosel>
        {filmes.map((filme) => (
          <div className="item" key={filme.id}>
            <a href={filme.link} target="_blank" rel="noopener noreferrer">
              <img
                alt={filme.alt}
                src={filme.image}
                className={styles.boxFilme}
              />
            </a>
          </div>
        ))}
      </Carrosel>
    </div>
  )
}

export default Filmes
