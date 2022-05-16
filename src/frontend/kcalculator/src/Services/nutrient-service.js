// import Axios from 'axios';


// const axios = Axios.create({
//     baseURL: 'http://kcalculator.localhost/api',
//     withCredentials: true,
// })
import axios from 'axios';

export function getFoods(){
    try{
        const promise = axios.get('http://kcalculator.localhost/api/nutrient')
        const dataPromise = promise.then((response) => response.data)
        return dataPromise
    }catch (err) {
        console.log(err);
    }
}

export function getFoodByName(name){
    try{
        const promise = axios.get(`http://kcalculator.localhost/api/nutrient/${name}`)
        const dataPromise = promise.then((response) => response.data)
        return dataPromise
    }catch (err) {
        console.log(err);
    }
}


export function getFood(name, id){
    try{
        const promise = axios.get(`http://kcalculator.localhost/api/nutrient/${name}/${id}`)
        const dataPromise = promise.then((response) => response.data)
        return dataPromise
    }catch (err) {
        console.log(err);
    }
}