import React from "react"
import './App.css';

function HouseCard(props){
    
    function houseCardFlip(){
        if(props.flipped === true){
            return require(`./assets/frontcard-${props.value}.png`)
        }else{
            return require(`./assets/backofcard-${props.value}.png`)
        }
    }

    return(
        <div className="row">
            <div className="col-12 d-flex justify-content-center">
                <img className="house-card" src={houseCardFlip()}/>
            </div>
        </div>
    );
}

export default HouseCard;