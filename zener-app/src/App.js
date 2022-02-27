import logo from './logo.svg';
import './App.css';
import React from "react"
import HouseCard from './HouseCard';
import RiverCard from './RiverCard';


function App() {
  const [houseCard, setHouseCard] = React.useState(newHouseCard())

  function randomNum(){
    return Math.floor((Math.random() * 8) + 1)
  }

  function newHouseCard(){
    const newCard = {
      value : randomNum()
    }
    return newCard
  }
 

  return (
    <div className="App">
      <HouseCard value = {houseCard.value}/>
      <RiverCard />
    </div>
  );
}

export default App;
