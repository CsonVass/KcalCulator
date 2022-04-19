import { ButtonGroup } from "react-bootstrap"

const Food = ({ foodName, amount, nutrients, onDelete }) => {


    return (
        <li className="food list-group-item">
            <h2 className="d-md-flex justify-content-md-center">{foodName} - {amount}g</h2>
            <div className="container">
                <div className="row">
                    <div className="col-6">Kcal: {nutrients.calorie}</div>
                </div>

                <div className="row">
                    <div className="col-6">Carbs: {nutrients.carbs}g</div>
                    <div className="col-6">Protein: {nutrients.protein}g</div>
 
                </div>

                <div className="row">
                    <div className="col-6">Fat: {nutrients.fat}g</div>
                    <div className="col-6">Fiber: {nutrients.fiber}</div>

                </div>

            </div>
            <ButtonGroup className="d-grid gap-2 d-md-flex justify-content-md-center">
                <div type="button" className="btn btn-outline-danger " onClick={() => onDelete()}>Delete</div>
                <div type="button" className="btn btn-outline-warning ">Edit</div>
            </ButtonGroup>
        </li>
    )
}

Food.defaultProps = {
    foodName: '',
    amount: 0,
    nutrients: {
        "calorie": 0,
        "carbs": 0,
        "protein": 0,
        "fat": 0,
        "fiber": 0
    }
    
}

export default Food