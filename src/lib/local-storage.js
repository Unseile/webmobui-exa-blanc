const setItem = (id, value) => localStorage.setItem(id, JSON.stringify(value))

const getItem = (id) => JSON.parse(localStorage.getItem(id))

const getItems = () => Object.keys(localStorage).map(getItem)

const removeItem = (id) => localStorage.removeItem(id)

const FAVORITES_KEY = 'favorites'

const getFavorites = () => {
    console.log('test')
    return getItem(FAVORITES_KEY) ?? [];
}

const addFavorite = (genre) => {
    const favs = getFavorites();
    favs.push(genre);
    setItem(FAVORITES_KEY, favs);
}

const getFavorite = (id) => {
    const favs = getFavorites()
    return favs.find(el => el.id === id)
}

const removeFavorite = (id) => {
    const favs = getFavorites();
    const newFavs = favs.filter(el => el.id !== id);
    setItem(FAVORITES_KEY, newFavs);
}

const toggleFavorite = (genre) => {
    getFavorite(genre.id) ? removeFavorite(genre.id) : addFavorite(genre);
}

export {toggleFavorite, getFavorites, getFavorite}