import getElement from "./getElement.js";
import { hideLoading } from './toggleLoading.js';


const displaySingleDrink = ({drinks})=>{
    const section=document.querySelector('.single-drink')
    
    if(drinks){
        hideLoading()
        const drink=drinks[0];
        const {strDrinkThumb:image,strInstructions:desc,strDrink:name}=drink
        const list=[drink.strIngredient1,
            drink.strIngredient2,
            drink.strIngredient3,
            drink.strIngredient4, drink.strIngredient5]
       document.title=name;
       const gridians=list.map((item)=>{
         if(!item) return;
        return `<li> <i class="far fa-check-square"></i> ${item} </li>`
       }).join('')
        section.innerHTML= `<img src="${image}" alt="${name}" class="drink-img">
        <article class="drink-info">
              <h2 class="drink-name">${name}</h2>
              <p class="drink-desc">${desc}</p>
              <ul class="drink-ingrediens">${gridians}</ul>
              <a href="index.html" class="btn">all cocktails</a>
        </article>` 
    }

}

export default displaySingleDrink;