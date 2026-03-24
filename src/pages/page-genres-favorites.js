import { getGenres } from "../api.js";
import { toggleFavorite, getFavorite } from '../lib/local-storage.js'

export class PageGenres extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }


  render() {
    this.getData().then((genres) => {
      this.innerHTML = `
        <h4>${this.getTitle(genres)}</h4>
        <div class="genres">
        </div>
        `;

      const genresList = this.querySelector(".genres");

      console.log(genres);
      genres.forEach((genre) => {
        const genresItem = document.createElement('genres-item')
        genresItem.setAttribute('id', genre.id)
        genresItem.setAttribute('title', genre.title)
        genresItem.setAttribute('image', genre.thumbnail_url)
        genresItem.setAttribute('recette', genre.count)
        genresItem.setAttribute('favorite', getFavorite(genre.id) ? 'true' : 'false');
        genresItem.addEventListener('favoriteGenre', () => {
          toggleFavorite(genre);
          genresItem.setAttribute('favorite', getFavorite(genre.id) ? 'true' : 'false')
        })
        genresList.append(genresItem)
      });
    });
  }
}
