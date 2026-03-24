customElements.define(
  "genres-item",
  class extends HTMLElement {
    static observedAttributes = ["id", "title", "image",  "recette"];

    connectedCallback() {
      this.render();
    }

    attributeChangedCallback() {
      this.render();
    }

    render() {
      this.innerHTML = `
          <a href="#${this.getAttribute('id')}" class="genre-card">
            <div class="card__buttons">
              <!-- le plus simple est d'utiliser .starred-button comme querySelector pour le sélectionner -->
              <button type="button" class="icon-button like-button">
                <span class="material-icons">thumb_up_off_alt</span> <!-- utiliser "thumb_up" pour la version pleine -->
              </button>
            </div>

            <img src="${this.getAttribute('image')}" class="card__thumbnail" />

            <div class="card__title">${this.getAttribute('title')}</div>
            <!-- penser à garder l'écriture "[count] recettes" -->
            <div class="card__count">${this.getAttribute('recette')} recettes</div>
          </a>
    `;
    }
  },
);
