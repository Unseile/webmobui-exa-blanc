import { getGenreById, getRecipesByGenre } from "../api.js";

customElements.define(
  "page-recettes",
  class extends HTMLElement {
    static observedAttributes = ["genre_id"];

    connectedCallback() {
      const genreId = this.getAttribute("genre_id");

      Promise.all([getGenreById(genreId), getRecipesByGenre(genreId)])
        .then(([genre, recettes]) => {
          this.innerHTML = `
            <h4>Genres de recettes > ${genre.title} (${recettes.length})</h4>
            <div class="recipes"></div>
          `;
          const recettesList = this.querySelector(".recipes");

          recettes.forEach((recette) => {
            recettesList.innerHTML += `
              <recettes-item image="${recette.preview_url}" name="${recette.name}"></recettes-item>
            `;
          });
        });
    }
  },
);