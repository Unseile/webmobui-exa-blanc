import { getFavorites } from '../lib/local-storage.js'
import { PageGenres } from "./page-genres-favorites.js"

customElements.define("page-favorites", class extends PageGenres {

    getTitle(genres){
        return `Favoris`;
    }

    getData() {
    const favs = getFavorites()
    console.log('favoris:', favs)  // ← tableau vide [] ou données ?
    return Promise.resolve(favs)
}
})