import React from 'react'

// Carrossel e estilos
import styles from '../Style.module.css'
import Carrosel from '../Carrosel'
import { creepypastas } from '../../assets/data'

// imagens

function Creepypastas() {
  return (
    <div className={styles.carroselFilmes} id="creepypastas">
      <p className={styles.logo}>Creepypastas</p>
      <Carrosel>
        {creepypastas.map((creepypasta) => (
          <div className="item" key={creepypasta.id}>
            <a
              href={creepypasta.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt={creepypasta.alt}
                src={creepypasta.image}
                className={styles.boxFilme}
              />
            </a>
          </div>
        ))}
      </Carrosel>
    </div>
  )
}

export default Creepypastas
