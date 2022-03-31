import React from 'react';
import Buttons from './Buttons'
class Main extends React.Component {

  render(){
    return(
      <div>
        <Buttons 
          onClick = {(response) =>  console.log(response)}
        />
      </div>
    )
  }

}

 

export default Main;
