import './App.css';
import React from "react"
import HouseCard from './HouseCard';
import RiverCard from './RiverCard';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [houseCard, setHouseCard] = React.useState(newHouseCard())
  const [riverCard, setRiverCard] = React.useState(newRiverCard())

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
    // const randomSpliceIndex = Math.floor((Math.random() * 3) + 1)
    const newArray =[]
    newArray.push({value: houseCardArr[0].value})
    

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
        if(i >= 0){
          i = i-1;
        }else{
          i = 0;
        }
      }else{
        newArray.push({value: x})
      } 
    }
    return newArray
  }

  //Found a useful function on Stackoverflow that will rearrange an array.
  //Need to Incorporate this into newRiverCard function
  function arrayMove(arr, old_index, new_index){
    if (new_index >= arr.length){
      var k = new_index - arr.length +1;
      while(k--){
        arr.push(undefined);
      }
    }
    arr.splice(new_index, 0, arr.splice(old_index,1)[0]);
    return arr;
  }
  
  
  const riverCardElements = riverCard.map((card) => (
  <RiverCard {...card}/>
  ))
  
  return (
    <div className="container-fluid">
      <button className='test-button' onClick={arrayMove}>Test Button</button>
      <HouseCard value = {houseCard.value}/>
      <div className='row mt-5'>
        {riverCardElements}
      </div>      
    </div>
  );
}

export default App;
