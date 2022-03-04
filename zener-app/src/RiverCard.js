import React from "react"

function RiverCard(props){
    return(
    <div className="col-3 d-flex justify-content-center">
        <img className="river-card" src={require(`./assets/frontcard-${props.value}.png`)} onClick={props.clickHandler}/>
    </div>
        
    );
}

export default RiverCard;