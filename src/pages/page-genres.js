import { PageGenres } from "./page-genres-favorites.js";
import { getGenres } from "../api.js";

customElements.define(
  "page-genres",
  class extends PageGenres {

    getTitle(genres) {
      return `Genre de recettes (${genres.length})`;
    }

    getData() {
        return getGenres();
    }
  },
);
