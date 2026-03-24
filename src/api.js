import data from './api.json' assert { type: 'json' }

const getGenres = () => Promise.resolve(data.genres);

const getRecipes = () => {
  const recipes = data.genres.flatMap(genre => genre.recipes);
  return Promise.resolve(recipes);
}

const getRecipesByGenre = (genreId) => {
  const genre = data.genres.find(genre => genre.id === genreId);
  return Promise.resolve(genre ? genre.recipes : []);
}

const getGenreById = (genreId) => {
  const genre = data.genres.find(genre => genre.id === genreId);
  return Promise.resolve(genre);
}

export { getGenres, getRecipes, getRecipesByGenre, getGenreById }