// import Axios from 'axios';


// const axios = Axios.create({
//     baseURL: 'http://kcalculator.localhost/api',
//     withCredentials: true,
// })

import axios from 'axios';

//GET
export function getDiaries(){
    try{
        const promise = axios.get('http://kcalculator.localhost/api/diaries')
        const dataPromise = promise.then((response) => response.data)
        return dataPromise
    }catch (err) {
        console.log(err);
    }
}

export function getDiary(id){
    try{
        const promise = axios.get(`http://kcalculator.localhost/api/diaries/${id}`)
        const dataPromise = promise.then((response) => response.data)
        return dataPromise
    }catch (err) {
        console.log(err);
    }
}

    export function getDiaryByDate(id, date){
    try{
        const promise = axios.get(`http://kcalculator.localhost/api/diaries/${id}/${date}`)
        const dataPromise = promise.then((response) => response.data)
        return dataPromise  
    }catch (err) {
        console.log(err);
    }
}



//POST
export function postFoodItem(id, date, food, amount){
    try{ 
        const promise = axios.post(`http://kcalculator.localhost/api/diaries/${id}/dailyrecords/${date}`, {
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

//PUT
export function putGoals(id, goals){   
    try{
    const promise = axios.put(`http://kcalculator.localhost/api/diaries/${id}`, {
        calorie: goals.calorie || 0,
        protein: goals.protein || 0,
        fat: goals.fat || 0,
        carbs: goals.carbs || 0,
        fiber: goals.fiber || 0

      });
      const dataPromise = promise.then((respone) => respone.data)  
    return dataPromise; 
    }catch(error) {
        console.log(error.response);
      }
}


export function putFood(id, date, foodid, amount){   
    try{
    const promise = axios.put(`http://kcalculator.localhost/api/diaries/${id}/dailyrecords/${date}`, {
        recordId: foodid,
        userId: id,
        quantity: amount, 
        date: date

      });
      const dataPromise = promise.then((respone) => respone.data)  
    return dataPromise; 
    }catch(error) {
        console.log(error.response);
      }
}


//DELETE
export function deleteAccount(id){
    try{
        axios.delete(`http://kcalculator.localhost/api/diaries/${id}`)
    }catch (err) {
        console.log(err);
    }
}

export function deleteFood(id, date, recordid){
    try{
        axios.delete(`http://kcalculator.localhost/api/diaries/${id}/dailyrecords/${date}/records/${recordid}`)
    }catch (err) {
        console.log(err);
    }
}