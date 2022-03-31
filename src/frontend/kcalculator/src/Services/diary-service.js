const axios = require('axios');

export function getDiaries(){
    try{
        const promise = axios.get('https://localhost:44352/api/diaries')
        const dataPromise = promise.then((response) => response.data)
        return dataPromise
    }catch (err) {
        console.log(err);
    }
}

export function getDiary(id){
    try{
        const promise = axios.get(`https://localhost:44352/api/diaries/${id}`)
        const dataPromise = promise.then((response) => response.data)
        return dataPromise
    }catch (err) {
        console.log(err);
    }
}