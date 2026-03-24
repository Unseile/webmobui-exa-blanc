import {
  currentRecette,
  nextRecette,
  previousRecette,
} from "../inspiration.js";

customElements.define(
  "page-inspiration",
  class extends HTMLElement {
    static observedAttributes = ["image", "name", "description"];

    connectedCallback() {
      this.innerHTML = `
        <h4>Inspiration</h4>

        <div class="card card--recipe-details">
          <!-- .card--recipe-details img -->
          <img src="lalala" />

          <div class="card--recipe-details-details">
            <!-- .card--recipe-details h4 -->
            <h4>lalala</h4>

            <!-- .card--recipe-details p -->
            <p>
              lalalalala
            </p>
          </div>
        </div>

        <button class="card button--previous">
          ◂ Recette précédente
        </button>

        <button class="card button--next">
          Recette suivante ▸
        </button>
        `;
      this.selectElements();
      this.addEventListeners();
      getRecipes().then(() => {
    this.updateRecetteInfos()
  })
    }

    selectElements() {
      this.recetteImage = this.querySelector("img");
      this.recetteName = this.querySelector(".card--recipe-details-details h4");
      this.recetteDescription = this.querySelector("p");
      this.boutonNext = this.querySelector(".button--next");
      this.boutonPrevious = this.querySelector(".button--previous");
    }

    updateRecetteInfos() {
      if (!currentRecette) return;

      this.recetteImage.src = currentRecette.preview_url;
      this.recetteName.textContent = currentRecette.name;
      this.recetteDescription.textContent = currentRecette.description;
    }

    addEventListeners() {
      this.updateRecetteInfos = this.updateRecetteInfos.bind(this);

      this.boutonNext.addEventListener("click", () => {
        nextRecette();
        this.updateRecetteInfos();
      });
      this.boutonPrevious.addEventListener("click", () => {
        previousRecette();
        this.updateRecetteInfos();
      });
    }
  },
);
