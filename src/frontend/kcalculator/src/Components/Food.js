import { ButtonGroup } from "react-bootstrap"
import { useState } from "react"

const Food = ({ foodName, amount, nutrients, onDelete, onEdit }) => {

    const [isEdited, setIsEdited] = useState(false);
    const [amount_, setAmount_] = useState(amount);

    const handleSave = () => {
        onEdit(amount_)
        setIsEdited(false);
    }

    return (
        <li className="food list-group-item">
            <h2 className="d-md-flex justify-content-md-center">{foodName} - {isEdited ? 
            <input type="number" defaultValue={amount} onChange={(e) => setAmount_(e.target.value)}/> :  amount}g</h2>
            <div className="container">
                <div className="row">
                    <div className="col-6">Kcal: {parseFloat(nutrients.calorie.toFixed(2))}</div>
                </div>

                <div className="row">
                    <div className="col-6">Carbs: {parseFloat(nutrients.carbs.toFixed(2))}g</div>
                    <div className="col-6">Protein: {parseFloat(nutrients.protein.toFixed(2))}g</div>
 
                </div>

                <div className="row">
                    <div className="col-6">Fat: {parseFloat(nutrients.fat.toFixed(2))}g</div>
                    <div className="col-6">Fiber: {parseFloat(nutrients.fiber.toFixed(2))}</div>

                </div>

            </div>
            <div className="d-flex justify-content-end"> 
                           
               {isEdited ? 
                <div type="button" className="btn btn-outline-primary btn-md" onClick={() => handleSave()}>Save</div>
               :  
               <ButtonGroup className="gap-2"> 
                <div type="button" className="btn btn-outline-warning btn-md" onClick={() => setIsEdited(true)}>Edit</div>
                    <div type="button" className="btn btn-outline-danger btn-md" onClick={() => onDelete()}>Delete</div>
                </ButtonGroup>}
            </div>
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