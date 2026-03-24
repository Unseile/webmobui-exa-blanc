import { getRecipes } from './api.js'

let currentRecetteList = []
let currentRecette = null

getRecipes().then(recipes => {
  currentRecetteList = recipes
  currentRecette = recipes[0]
})

const nextRecette = () => {
  let newIndex = currentRecetteList.indexOf(currentRecette) + 1

  if (newIndex == currentRecetteList.length)
    newIndex = 0
currentRecette = currentRecetteList[newIndex] 
}

const previousRecette = () => {
  let newIndex = currentRecetteList.indexOf(currentRecette) - 1

  if (newIndex == -1)
    newIndex = currentRecetteList.length - 1
currentRecette = currentRecetteList[newIndex] 
}

export { currentRecette, nextRecette, previousRecette }