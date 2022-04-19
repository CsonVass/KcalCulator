import Food from "./Food"
import NewFoodDialog from './NewFoodDialog';

const FoodList = ({foods, onAdd, onDelete}) => {

  const foodItems = () => {
    var foodList = []
    if(foods){
      var key_ = 0
    foods.forEach(foodItem => {
      foodList.push(<Food 
        key = {key_++}
        foodName = {foodItem.food.foodName}
        amount = {foodItem.amount}
        nutrients = {{
          "calorie": foodItem.food.nutrients.calorie,
          "carbs": foodItem.food.nutrients.carbs,
          "protein": foodItem.food.nutrients.protein,
          "fat": foodItem.food.nutrients.fat,
          "fiber": foodItem.food.nutrients.fiber}
        }

        onDelete={() => onDelete(foodItem.id)}
          
        
      ></Food>)
    });
  }
    return foodList;
  }

  return (
      <div className="d-flex flex-column ">
          <NewFoodDialog onAdd={(food, amount) => onAdd(food, amount)}/>
    <ul className="col list-group">
      {foodItems()}     
    </ul>
    </div>
  )
}

export default FoodList