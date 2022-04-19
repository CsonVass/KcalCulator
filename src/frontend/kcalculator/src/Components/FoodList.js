import Food from "./Food"
import NewFoodDialog from './NewFoodDialog';

const FoodList = ({onAdd}) => {

  return (
      <div className="d-flex flex-column ">
          <NewFoodDialog />
    <ul className="col list-group">     
    </ul>
    </div>
  )
}

export default FoodList