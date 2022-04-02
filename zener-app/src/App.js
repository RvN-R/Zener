import './App.css';
import React from "react"
import HouseCard from './HouseCard';
import RiverCard from './RiverCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import {nanoid} from "nanoid"


function App() {
  const [houseCard, setHouseCard] = React.useState(newHouseCard())
  const [riverCard, setRiverCard] = React.useState(newRiverCard())
  const [zener, setZener] = React.useState(false)

  function randomNum(){
    return Math.floor((Math.random() * 8) + 1)
  }

  function newHouseCard(){
    const newCard = {
      value : randomNum(),
      id: nanoid(),
      flipped: false
    }
    return newCard
  }

  function newRiverCard(){

    // Below creates a variable called houseCardArr that has the state of houseCard allocated to it
    // Then an empty array called newArray
    // Push the value of the houseCard to newArray so the one of the River cards will be the same as the house card.
    // Using a for loop to create a variable called X and allocatinig it a random number

    const houseCardArr = [houseCard]
    
    const newArray =[]
    newArray.push({
      value: houseCardArr[0].value,
      status: 0,
      id: nanoid()})
    

    for( let i = 0; i < 3; i ++){
       let x = randomNum()

       
      // conflictValue checks whether newArray value property are the same as x
      // if they match it returns true
      const conflictValue = newArray.some(num => num.value === x)
      
      // BELOW IF STATEMENT IS THE ONE WE WANT
      //Below if statement checks to see if conflictValue is true
      //If true then it re-sets the value of i to reloop the above for loop from the point it was true
      //If false then it pushes the value of x to the newArray array
      //Then pass the newArray through the rearrangedNewArray function which changes the order of the River Cards

      if(conflictValue === true){
        if(i >= 0){
          i = i-1;
        }else{
          i = 0;
        }
      }else{
        newArray.push({value: x, status: 0, id: nanoid()})
      } 
    }
    
    const randomNewIndex = Math.floor((Math.random() * 3) + 1)
    
    const rearrangedNewArray = arrayMove(newArray,0,randomNewIndex)
    
    console.table(rearrangedNewArray)

    return rearrangedNewArray
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

  // Need to get the House Card value and crosscheck that against the value imported in checkMatch function
  // if the value of the River Card matchs the value of the House Card and
  // The id of passed to the function matches the card.id then flip status of that card to 2
  //If they don't match it goes to 1
  function checkMatch(value, id){
    const houseCardArr = [houseCard]
    setRiverCard(preRiverCard => preRiverCard.map(card => {
      return houseCardArr[0].value === value & card.id === id?
      {...card, status: 2}:
      {...card, status: 1}
    }))

  }

  console.table(houseCard)
  console.table(riverCard)

  

  // This effect checks to see if any of the river card status's aren't 0
  // If so it returns houseCardReveal function.

  React.useEffect(() => {
    const riverCardStatus = riverCard.some(card => card.status === 1)
    if(riverCardStatus === true){
      setTimeout(houseCardReveal, 500) && setZener(true)
    }
  },[riverCard])

  // houseCardReveal function flips the houseCard flipped value
  // from the current value to the opposite of that value i.e false to true
  
  function houseCardReveal(){
    return setHouseCard(preHouseCard => ({
      ...preHouseCard, flipped: !preHouseCard.flipped
    }))
  }

  // zenerRefresh function checks to see if Zener is true 
  // if true its supposed to refresh the state of setHouseCard, setRiverCard and setZener
  // However its not doing this properly

  function zenerRefresh(){
    if (zener === true){
      setHouseCard(newHouseCard())
      setRiverCard(newRiverCard())
      setZener(false)
    }
  }


  const riverCardElements = riverCard.map((card) => (
    <RiverCard key={card.id}{...card} clickHandler={() => checkMatch(card.value, card.id)}/>
    ))
  
  return (
    <div className="container-fluid">
      {/* <button className='test-button' onClick={arrayMove}>Test Button</button> */}
      <HouseCard value = {houseCard.value} flipped ={houseCard.flipped}/>
      <div className='row'>
        <div className="col-12 d-flex justify-content-center mt-2">
          {zener && <button className="go-again-btn" onClick={zenerRefresh}>Go Again!</button>}
        </div>
      </div>
      <div className='row mt-5'>
        {riverCardElements}
        <div className='col-12 d-flex justify-content-center mt-4'>
          <h2>Choose one of the above cards that matches the house card above!</h2>
        </div>
      </div>      
    </div>
  );
}

export default App;
