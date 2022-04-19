import React, { useState } from "react";

const NutrientReport = ({sums, goals}) => {


  const [kcal, setKcal] = useState([sums.calorie, goals.calorie])
  const [carbs, setCarbs] = useState([sums.carbs, goals.carbs])
  const [protein, setProtein] = useState([sums.protein, goals.protein])
  const [fat, setFat] = useState([sums.fat, goals.fat])
  const [fiber, setFiber] = useState([sums.fiber, goals.fiber])


  return (
    <>
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
    </>
  )
}

export default NutrientReport