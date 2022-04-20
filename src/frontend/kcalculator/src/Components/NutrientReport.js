
import EditGoalsDialog from "./EditGoalsDialog";

const NutrientReport = ({sums, goals, editGoals}) => {


  return (
    <div className="d-flex flex-column">
    <EditGoalsDialog
       goals ={goals}
       editGoals = {editGoals}
        />
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