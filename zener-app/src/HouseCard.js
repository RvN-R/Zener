import React from "react"
import './App.css';

function HouseCard(props){
    // Need to fix what happens when 3 is generated, at present no image appears because no image exists
    // Sort issue with Octogon Card
    return(
        <div>
            <div className="house-card-container">
                <img className="house-card" src={require(`./assets/frontcard-${props.value}.png`)}/>
                <h1>{props.value}</h1>
            </div>
        </div>
    );
}

export default HouseCard;