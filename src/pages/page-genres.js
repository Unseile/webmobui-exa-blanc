import { getGenres } from '../api.js'

customElements.define("page-genres", class extends HTMLElement {

    connectedCallback(){
        let count = 0

        getGenres()
    .then((genres) => {
        count = genres.reduce((acc, genre) => acc + genre.count, 0);

      this.innerHTML =
        `
        <h4>Genres de recettes (${count}) </h4>
        <div class="genres">
        </div>
        `
    
        const genresItem = this.querySelector('.genres');

        
       
      console.log(genres);
      genres.forEach(genre => {
        genresItem.innerHTML += `
          <genres-item id="genres/${genre.id}" title="${genre.title}" image="${genre.thumbnail_url}" recette="${genre.count}"></genres-item>
        `
      })
    })
    }

})