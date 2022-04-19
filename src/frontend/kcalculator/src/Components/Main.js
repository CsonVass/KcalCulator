import React from 'react';
import DateSelect from './DateSelect';
import FoodList from './FoodList';
import NutrientReport from './NutrientReport';

export const Main = () => {
  const addFood = () => {
      console.log("added food")
  }

 return(
  <div className="Main row d-flex justify-content-around">
    <div className="col col-12 col-md-6 col-lg-3">
    <h1 className="d-flex justify-content-center">Diary</h1>
      <DateSelect />
      <FoodList onAdd={() => addFood()}/>
    </div>
    <div className="col col-0 col-md-6 col-lg-3">
    <h1 className="d-flex justify-content-center">Nutrient report</h1>

      <NutrientReport />
    </div>
  </div>
)
}

export default Main;
