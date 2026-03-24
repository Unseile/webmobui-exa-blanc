import { displaySection, activateLink } from "./helpers.js";

//pages
import "./pages/page-genres.js";
import "./pages/page-recettes.js";
//elements
import "./elements/genres-item.js";
import "./elements/recettes-item.js";

const main = document.querySelector("main");

const routeur = () => {
  const hash = window.location.hash || "#genres";
  const hashs = hash.split("/");

  // Colorie le lien
  activateLink(hashs[0]);

  switch (hashs[0]) {
    case "#genres":
      if (hashs[1]) {
        main.innerHTML = `<page-recettes genre_id="${hashs[1]}"></page-recettes>`;
      } else {
        main.innerHTML = "<page-genres></page-genres>";
      }
      break;

    case "#inspiration":
      displaySection("inspiration");
      break;

    case "#liked":
      displaySection("genres");
      break;
  }
};

// On veut être averti des changements
window.addEventListener("hashchange", routeur);

// on exécute une première fois au chargement de la page pour afficher la bonne section
routeur();
