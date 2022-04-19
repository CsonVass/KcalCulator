const axios = require('axios');

//GET
export function getDiaries(){
    try{
        const promise = axios.get('https://localhost:60088/api/diaries')
        const dataPromise = promise.then((response) => response.data)
        return dataPromise
    }catch (err) {
        console.log(err);
    }
}

export function getDiary(id){
    try{
        const promise = axios.get(`https://localhost:60088/api/diaries/${id}`)
        const dataPromise = promise.then((response) => response.data)
        return dataPromise
    }catch (err) {
        console.log(err);
    }
}

    export function getDiaryByDate(id, date){
    try{
        const promise = axios.get(`https://localhost:60088/api/diaries/${id}/${date}`)
        const dataPromise = promise.then((response) => response.data)
        return dataPromise  
    }catch (err) {
        console.log(err);
    }
}



//POST
export function postFoodItem(id, date, food, amount){
    try{ 
        const promise = axios.post(`https://localhost:60088/api/diaries/${id}/dailyrecords/${date}`, {
                food: food,
                userId: id,
                quantity: amount,
                date: date

            });
        const dataPromise = promise.then((respone) => respone.data)  
        return dataPromise;            
    }catch (error) {
        console.log(error.response)
      }
}


//DELETE
export function deleteFood(id, date, recordid){
    try{
        axios.delete(`https://localhost:60088/api/diaries/${id}/dailyrecords/${date}/records/${recordid}`)
    }catch (err) {
        console.log(err);
    }
}