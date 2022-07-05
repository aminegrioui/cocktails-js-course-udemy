import fetchDrinks from "./src/fetchDrinks.js";
import displaySingleDrink from './src/displaySingleDrink.js'

const url='https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='
const presentDrink = async ()=>{
    const id=localStorage.getItem('drink');
    const drink=await fetchDrinks(`${url}${id}`)
    displaySingleDrink(drink)
}
window.addEventListener('DOMContentLoaded',presentDrink)