
import getElement from "./getElement.js";
import presentDrinks from './presentDrinks.js'

const searchForm=getElement('.search-form')
const input=getElement('[name="drink"]')
const baseUrl="https://www.thecocktaildb.com/api/json/v1/1/search.php?s="

searchForm.addEventListener('keyup', (e)=>{
    e.preventDefault();
    let value=input.value
   console.log(value)
    if(!value) return
    console.log(`${baseUrl}${value}`)
    presentDrinks(`${baseUrl}${value}`)
})
