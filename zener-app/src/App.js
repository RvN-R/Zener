import logo from './logo.svg';
import './App.css';
import React from "react"
import HouseCard from './HouseCard';
import RiverCard from './RiverCard';


function App() {
  const [houseCard, setHouseCard] = React.useState(newHouseCard())
  const [riverCard, setRiverCard] = React.useState()

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
    // Push the value of the houseCard to newArray so the one of the River cards will be the same as the house card.
    // Using a for loop to create a variable called X and allocatinig it a random number

    const houseCardArr = [houseCard]
    const newArray =[]
    newArray.push({value: houseCardArr[0].value})
    console.table(newArray)

    for( let i = 0; i < 3; i ++){
       let x = randomNum()
       
      // conflictValue checks whether newArray value property are the same as x
      // if they match it returns true
      const conflictValue = newArray.some(num => num.value === x)
      

      // BELOW IF STATEMENT IS THE ONE WE WANT
      //Below if statement checks to see if conflictValue is true
      //If true then it re-sets the value of i to reloop the above for loop from the point it was true
      //If false then it pushes the value of x to the newArray array

      if(conflictValue === true){
        console.log("Conflict Value is",conflictValue, "Value of x is", x)
        if(i >= 0){
          i = i-1;
        }else{
          i = 0;
        }
      }else{
        newArray.push({value: x})
      } 
    }
    console.table(newArray)
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
