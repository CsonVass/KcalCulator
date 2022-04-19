import React, { useState } from "react";

const NutrientReport = () => {
  return (
    <>
    <div className="card text-center">
          <div className="card-body">
        <h5 className="card-title">Kcal</h5>
        <p className="card-text">num / num</p>
      </div>
    </div>
    <div className="card text-center">
          <div className="card-body">
        <h5 className="card-title">Carbs</h5>
        <p className="card-text">num / num</p>
      </div>
    </div>
    <div className="card text-center">
          <div className="card-body">
        <h5 className="card-title">Protein</h5>
        <p className="card-text">num / num</p>
      </div>
    </div>
    <div className="card text-center">
          <div className="card-body">
        <h5 className="card-title">Fat</h5>
        <p className="card-text">num / num</p>
      </div>
    </div>
    <div className="card text-center">
          <div className="card-body">
        <h5 className="card-title">Fiber</h5>
        <p className="card-text">num / num</p>
      </div>
    </div>
    </>
  )
}

export default NutrientReport