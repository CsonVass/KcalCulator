import React from 'react';
import { useState, useEffect } from 'react';
import DateSelect from './DateSelect';
import FoodList from './FoodList';
import NutrientReport from './NutrientReport';
import * as DiaryService from '../Services/diary-service';
import { useKeycloak } from "@react-keycloak/web";


export const Main = () => {
  const { keycloak } = useKeycloak();

  const [userId] = useState(keycloak.tokenParsed.preferred_username);
  const [foods, setFoods] = useState([])
  const [date, setDate] = useState(new Date())
  const [goals, setGoals] = useState([])
  const [sums, setSums] = useState({
    "calorie": 0,
    "carbs": 0,
    "protein": 0,
    "fat": 0,
    "fiber": 0

  })

  const formatDate = (date_) => {
    const [month, day, year]  = [String(date.getMonth() +1).padStart(2, '0'), String(date.getDate()).padStart(2, '0'), date.getFullYear()]; 
    return `${year}-${month}-${day}`
  }

  const calculateSums = () => {
    var cal = 0
    var car = 0
    var prot = 0
    var fat = 0
    var fib = 0
    foods.forEach(foodItem => {
      cal +=  foodItem.food.nutrients.calorie
      car +=  foodItem.food.nutrients.carbs
      prot += foodItem.food.nutrients.protein
      fat +=  foodItem.food.nutrients.fat
      fib +=  foodItem.food.nutrients.fiber
    });
    setSums({
     "calorie": parseFloat(cal.toFixed(2)),
     "carbs": parseFloat(car.toFixed(2)),
     "protein": parseFloat(prot.toFixed(2)),
     "fat": parseFloat(fat.toFixed(2)),
     "fiber": parseFloat(fib.toFixed(2))
   })
    
  }

  useEffect(() => {
    calculateSums()
  }, [foods]) 

  useEffect(() => {
    async function ascFucntion() {
      const diary = await DiaryService.getDiaryByDate(userId, formatDate(date))
      var records = diary?.records
      var loadFoods = []
      records.forEach(record => {
        var foodItem = {id: record.recordId, food: record.food, amount: record.quantity}
        loadFoods = [...loadFoods, foodItem]
      });
      setFoods(loadFoods)
    }
    ascFucntion()
  }, [userId, date])

  const findFoodKeyById = (foodId) => {
    var ret;
    var i = 0;
    foods.forEach(food => {
      if(food.id === foodId)
        ret = i
      i++
    });
    return ret
  }

  const addFood =  async (food, amount) => {

      var newFoodItem = {food, amount}
      try{
        const response = await DiaryService.postFoodItem(userId, formatDate(date), food, amount)
        newFoodItem.id = response.records.at(-1).recordId
        setFoods([...foods, newFoodItem])  
      }catch(e){
        console.log(e)
      }  
     
  }

  const editGoals = async (nutrients) => {
    try{
      const response = await DiaryService.putGoals(userId, nutrients)
      setGoals(response.goals)
    }catch(e){
      console.log(e)
    }
  }

  const editFood = async (foodId, amount) => {
    try{
      await DiaryService.putFood(userId, formatDate(date), foodId, parseFloat(amount))
      var newFoods = [...foods];
      newFoods[findFoodKeyById(foodId)].amount = amount
      setFoods(newFoods)
      
    }catch(e){
      console.log(e)
    }
  }

  const deleteFood = async (foodId) => {
    try{
      DiaryService.deleteFood(userId, "2022-04-19", foodId)
      setFoods(foods.filter((food) => food.id !== foodId))
    }catch(e){
      console.log(e)
    }
  }

useEffect(() => {
  async function ascFunction(){
    DiaryService.getDiary(userId).then(res => setGoals(res.goals))
  }
  ascFunction()
}, [userId]);


 return(
  <div className="Main row d-flex justify-content-around">
    <div className="col col-12 col-md-3 col-lg-2">
      <h1 className="d-flex justify-content-center">Date</h1>
        <DateSelect startDate={date} setDate={(date_) => setDate(date_)}/>
    </div>

    <div className="col col-12 col-md-3 col-lg-6">
     <h1 className="d-flex justify-content-center">Diary</h1>      
        <FoodList
        foods={foods}
        onAdd={(food, amount) => addFood(food, amount)}
        onDelete={(foodId) => deleteFood(foodId)}
        onEdit={(foodId, amount) => editFood(foodId, amount)}
        />
    </div>
   
    <div className="col col-12 col-md-2 col-lg-3">
      <h1 className="d-flex justify-content-center">Nutrient report</h1>

        <NutrientReport 
          sums={sums} 
          goals={goals}
          editGoals={editGoals}
          />
    </div>
  </div>
)
}

export default Main;
