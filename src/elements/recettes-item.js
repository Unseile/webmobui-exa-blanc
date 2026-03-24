customElements.define("recettes-item", class extends HTMLElement {
    static observedAttributes = ["image",  "name"];

    connectedCallback() {
        this.render
    }

    attributeChangedCallback() {
      this.render();
    }

    render() {
        this.innerHTML = `
        <div>
            <img class="recipes__elem__preview" src="${this.getAttribute('image')}" />
            <div class="recipes__elem__name">${this.getAttribute('name')}</div>
        </div>
        `
    }
})