import React from "react";
import './starship.css';

const Starship=(props)=>{
    return(
        <div id="starship">
            <h1 id="starship-name">{props.starReq.name}</h1>
            <p>MODEL: {props.starReq.model}</p>
            <p>PASSENGERS: {props.starReq.director}</p>
            <p>CREW: {props.starReq.crew}</p>
            <p>COST IN CREDITS: {props.starReq.cost_in_credits}</p>
        </div>
    );
}
export default Starship;