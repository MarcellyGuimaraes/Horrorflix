import React from 'react'

// Carrossel e estilos
import styles from '../Style.module.css'
import Carrosel from '../Carrosel'
import { jogos } from '../../assets/data'

// imagens

function Filmes() {
  return (
    <div className={styles.carroselFilmes} id="jogos">
      <p className={styles.logo}>Jogos</p>
      <Carrosel>
        {jogos.map((jogo) => (
          <div className="item" key={jogo.id}>
            <a href={jogo.link} target="_blank" rel="noopener noreferrer">
              <img
                alt={jogo.alt}
                src={jogo.image}
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
