import peliculas from './peliculas.js';
//documento este cargado
document.addEventListener("DOMContentLoaded", function () {
  function filtrarPorGenero(generoId) {
    return peliculas.filter(pelicula =>//filtra por geneId
      pelicula.genre_ids.includes(generoId)
    );
  }

  function mostrarPeliculas(generoId, contenedor) {
    const peliculasFiltradas = filtrarPorGenero(generoId);

    peliculasFiltradas.forEach(pelicula => {
      const divPelicula = document.createElement("div");
      const imgPelicula = document.createElement("img");
      const tituloPelicula = document.createElement("h3");

      imgPelicula.src = `https://image.tmdb.org/t/p/w500${pelicula.poster_path}`;//ancla la imagen
      imgPelicula.alt = pelicula.title;
      tituloPelicula.textContent = pelicula.title;

      divPelicula.appendChild(imgPelicula);
      divPelicula.appendChild(tituloPelicula);
      contenedor.appendChild(divPelicula);
    });
  }

  const contenedorAccion = document.getElementById("genero-28");
  const contenedorThriller = document.getElementById("genero-53");
  const contenedorAventura = document.getElementById("genero-12");

  mostrarPeliculas(28, contenedorAccion);
  mostrarPeliculas(53, contenedorThriller);
  mostrarPeliculas(12, contenedorAventura);
});