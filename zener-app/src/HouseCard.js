import React from "react"
import './App.css';

function HouseCard(props){
    // Need to fix what happens when 3 is generated, at present no image appears because no image exists
    // Sort issue with Octogon Card
    return(
        <div className="row">
            <div className="col-12 d-flex justify-content-center">
                <img className="house-card" src={require(`./assets/frontcard-${props.value}.png`)}/>
            </div>
        </div>
    );
}

export default HouseCard;