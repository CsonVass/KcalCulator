import { ButtonGroup } from "react-bootstrap"

const Food = ({ foodName, amount, nutrients }) => {
    return (
        <li className="food list-group-item">
            <h2 className="d-md-flex justify-content-md-center">{foodName} - {amount}g</h2>
            <div className="container">
                <div className="row">
                    <div className="col-6">Kcal: {nutrients.Kcal} g</div>
                </div>

                <div className="row">
                    <div className="col-6">Carbs: {nutrients.Carbs} g</div>
                    <div className="col-6">Protein: {nutrients.Protein} g</div>
 
                </div>

                <div className="row">
                    <div className="col-6">Fat: {nutrients.Fat} g</div>
                    <div className="col-6">Fiber: {nutrients.Fiber} g</div>

                </div>

            </div>
            <ButtonGroup className="d-grid gap-2 d-md-flex justify-content-md-center">
                <div type="button" className="btn btn-outline-danger ">Delete</div>
                <div type="button" className="btn btn-outline-warning ">Edit</div>
            </ButtonGroup>
        </li>
    )
}

Food.defaultProps = {
    foodName: '',
    amount: 0,
    nutrients: {
        "Kcal": 0,
        "Carbs": 0,
        "Protein": 0,
        "Fat": 0,
        "Fiber": 0
    }
}

export default Food