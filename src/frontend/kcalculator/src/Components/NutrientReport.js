import EditGoalsDialog from "./EditGoalsDialog";
import { postEmail } from "../Services/email-service";
import { Button } from "react-bootstrap";

const NutrientReport = ({sums, goals, editGoals}) => {

  const handleSend = () => {
      postEmail("vasscsongor2000@gmail.com", "Nutrient report", 
      `Hi!\n\n` + 
      `Your daily report goes like this:\n\n` +
      `Kcal: ${sums.calorie} / ${goals.calorie}\n` +
      `Carbs: ${sums.carbs} / ${goals.carbs}\n` +
      `Protein: ${sums.protein} / ${goals.protein}\n` +
      `Fat: ${sums.fat} / ${goals.fat}\n` +
      `Fiber: ${sums.fiber} / ${goals.fiber}\n\n` +

      `Have a nice day!\n\n` +

      `KCalCulator`)
  }


  return (
    <div className="d-flex flex-column">
    <EditGoalsDialog
       goals ={goals}
       editGoals = {editGoals}
        />
   <Button variant="warning" className="mb-3" onClick={handleSend}>
      Send nutrient report
    </Button>
    <div className="card text-center">
          <div className="card-body">
        <h5 className="card-title">Kcal</h5>
        <p className="card-text">{sums.calorie} / {goals.calorie}</p>
      </div>
    </div>
    <div className="card text-center">
          <div className="card-body">
        <h5 className="card-title">Carbs</h5>
        <p className="card-text">{sums.carbs} / {goals.carbs}</p>
      </div>
    </div>
    <div className="card text-center">
          <div className="card-body">
        <h5 className="card-title">Protein</h5>
        <p className="card-text">{sums.protein} / {goals.protein}</p>
      </div>
    </div>
    <div className="card text-center">
          <div className="card-body">
        <h5 className="card-title">Fat</h5>
        <p className="card-text">{sums.fat} / {goals.fat}</p>
      </div>
    </div>
    <div className="card text-center">
          <div className="card-body">
        <h5 className="card-title">Fiber</h5>
        <p className="card-text">{sums.fiber} / {goals.fiber}</p>
      </div>
    </div>
    </div>
  )
}

export default NutrientReport