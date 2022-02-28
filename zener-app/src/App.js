import logo from './logo.svg';
import './App.css';
import React from "react"
import HouseCard from './HouseCard';
import RiverCard from './RiverCard';


function App() {
  const [houseCard, setHouseCard] = React.useState(newHouseCard())
  const [riverCard, setRiverCard] = React.useState(newHouseCard())

  function randomNum(){
    return Math.floor((Math.random() * 8) + 1)
  }

  function newHouseCard(){
    const newCard = {
      value : randomNum()
    }
    return newCard
  }

  function newRiverCard(){


    // Below creates a variable called houseCardArr allocation the state of houseCard to it
    // Then an empty array called newArray
    // Using a for loop to create a variable called X and allocatinig it a random number
    // if statement checks to see whether it matches the value of houseCard it does it prints a statement.
    // if it doesn't it pushes the valye to newArray array. 

    const houseCardArr = [houseCard]
    // console.table(houseCardArr)
    const newArray =[]
    for( let i = 0; i < 3; i ++){
       let x = randomNum()
      
      // if (x === houseCardArr[0].value){
      //   console.log("Matched House Card ")
      // } else{
      //   newArray.push({value: x})
      // }

      // BELOW IF STATEMENT IS THE ONE WE WANT
      //Below if statement says if newArray includes value of x it console.log
      // I want it perform the loop again
      if(newArray.includes(x)){
        console.log("Value X matches newArray")
      }else{
        newArray.push(x)
      } 
    }
    console.table(newArray)
    
      // Below if statement needs to check to see if the value from the for loop
      // matches the exisiting value's in newArray
      // At the moment I can't get it to carry on looping if they do match. 
      
      // if([i] === houseCardArr[0].value){
      //   console.log("There the same")
      // }else{
      //   houseCardArr.push({value: randomNum()})
      // }
    
    
  }
  
  

  return (
    <div className="App">
      <button className='test-button' onClick={newRiverCard}>Test Button</button>
      <HouseCard value = {houseCard.value}/>
      <RiverCard />
    </div>
  );
}

export default App;
