import { showLoading } from "./toggleLoading.js";
const fetchDrinks = async (url)=>{
    showLoading()
    try {
        const reponse=await fetch(url);
        const drinks=await reponse.json();
        return drinks; 
    } catch (error) {
        console.log('error')
    }
 
}

export default fetchDrinks;