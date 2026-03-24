import { getGenreById, getRecipesByGenre } from "../api.js";

customElements.define(
  "page-recettes",
  class extends HTMLElement {
    static observedAttributes = ["genre_id"];

    async getGenreData() {
      const genreId = this.getAttribute("genre_id");
      return getRecipesByGenre(genreId);
    }

    connectedCallback() {
      this.getGenreData().then((recettes) => {
        this.innerHTML = `
        <section id="section-recipes">
        <h4>Genres de recettes</h4>

        <div class="recipes">
        </div>
      </section>
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
