import React from 'react'
import Header from './components/Header'
import FilmePrincipal from './components/FilmePrincipal'
import Footer from './components/Footer'

import Filmes from './components/Cards/Filmes'
import Series from './components/Cards/Series'
import Animes from './components/Cards/Animes'
import Creepypastas from './components/Cards/Creepypastas'
import Jogos from './components/Cards/Jogos'

function App() {
  return (
    <div id="home">
      <Header />
      <FilmePrincipal />
      <Filmes />
      <Series />
      <Animes />
      <Creepypastas />
      <Jogos />

      <Footer />
    </div>
  )
}

export default App
