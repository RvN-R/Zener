import React from "react"

function RiverCard(props){

    const greenBorder = {
        borderColor: "green",
        borderStyle: "solid",
        borderWidth: "medium"
    }

    const redBorder = {
        borderColor: "red",
        borderStyle: "solid",
        borderWidth: "medium"
    }

    const blackBorder = {
        borderColor: "black",
        borderStyle: "solid"
    }

    const status = props.status

    // This function checks to see the value of status
    // Then changes the color border according to the value of status
    function borderColorDecider(){
        if(status === 2){
            return greenBorder
        }else if(status === 1){
            return redBorder
        }else{
            return blackBorder
        }
    }
    

    return(
    <div className="col-3 d-flex justify-content-center">
        <img 
        className="river-card" 
        src={require(`./assets/frontcard-${props.value}.png`)} onClick={props.clickHandler}
        style={borderColorDecider()}
        />
    </div>
    );
}

export default RiverCard;