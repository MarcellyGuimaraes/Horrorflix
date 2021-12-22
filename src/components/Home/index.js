import React from "react";
import Header from "../Header";
import FilmePrincipal from "../FilmePrincipal";
import Filmes from "../Filmes";
import Series from "../Series";
import Animes from "../Anime";
import Creepypastas from "../Creepypastas";
import Footer from "../Footer";
import Jogos from "../Jogos";

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
  );
}

export default App;
