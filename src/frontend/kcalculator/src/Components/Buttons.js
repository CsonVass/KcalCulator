import React from 'react';
import * as nutrient_service from '../Services/nutrient-service';
import * as diary_service from '../Services/diary-service';
import  Button  from 'react-bootstrap/Button';
import { TextField } from '@mui/material';

class Buttons extends React.Component {

    constructor(props){
        super(props);
        this.state =
       { name: "",
        id: ""};
    }

  render(){
    return(
      <div className="btn-group"> 
        <p className="fs-1">Nutrients</p>
        <Button type="button" className="btn btn-outline-primary" 
            onClick={()  => this.props.onClick((nutrient_service.getFoods().then(data => data)))}>Get Foods
        </Button>
        <Button type="button" className="btn btn-outline-primary" 
            onClick={()  => this.props.onClick((nutrient_service.getFoodByName(this.state.name).then(data => data)))}>Get FoodsByName
        </Button>
        <Button type="button" className="btn btn-outline-primary" 
            onClick={()  => this.props.onClick((nutrient_service.getFood(this.state.name, this.id).then(data => data)))}>Get Food
        </Button>

        <TextField onChange={(value) => this.setState({name: value})}>Name</TextField>
        <TextField onChange={(value) => this.setState({id: value})}>Id</TextField>
        
        <p className="fs-1">Diary</p>
        <Button type="button" className="btn btn-outline-primary" 
            onClick={()  => this.props.onClick((diary_service.getDiaries().then(data => data)))}>Get Diaries
        </Button>
      </div>
    )
  }

}

 

export default Buttons;
