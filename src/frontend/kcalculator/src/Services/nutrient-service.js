const axios = require('axios');

export function getFoods(){
    try{
        const promise = axios.get('https://localhost:63545/api/nutrient')
        const dataPromise = promise.then((response) => response.data)
        return dataPromise
    }catch (err) {
        console.log(err);
    }
}

export function getFoodByName(name){
    try{
        const promise = axios.get(`https://localhost:63545/api/nutrient/${name}`)
        const dataPromise = promise.then((response) => response.data)
        return dataPromise
    }catch (err) {
        console.log(err);
    }
}


export function getFood(name, id){
    try{
        const promise = axios.get(`https://localhost:63545/api/nutrient/${name}/${id}`)
        const dataPromise = promise.then((response) => response.data)
        return dataPromise
    }catch (err) {
        console.log(err);
    }
}