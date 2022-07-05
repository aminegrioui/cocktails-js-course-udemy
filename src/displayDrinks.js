import getElement from './getElement.js'
import { hideLoading } from './toggleLoading.js';
// console.log(sectioncenter)
const displayDrinks = ({drinks})=>{
    const sectioncenter=getElement('.section-center');
    const title=getElement('.title')
    if(!drinks){
        hideLoading()
        title.textContent='Sorry, no drinks matched your search ';
        sectioncenter.innerHTML=null;
    }
    const display=drinks.map((drink)=>{
         const {idDrink,id,strDrinkThumb:img,strDrink:name}=drink;
        return `
        <a href="./drink.html">
        <article class="cocktail" data-id="${idDrink}">
          <img src="${img}" alt="${name}">
          <h3>${name}</h3>
        </article>
      </a>`

    }).join('')
    hideLoading()
    sectioncenter.innerHTML=`${display}`
    return sectioncenter;
}

export default displayDrinks;