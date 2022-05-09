import React from "react";
import './vehicle.css';

const Vehicle=(props)=>{
    return(
        <div id="vehicle">
            <h1 id="vehicle-name">{props.vehiReq.name}</h1>
            <p>MODEL: {props.vehiReq.model}</p>
            <p>PASSENGERS: {props.vehiReq.director}</p>
            <p>CREW: {props.vehiReq.crew}</p>
            <p>COST IN CREDITS: {props.vehiReq.cost_in_credits}</p>
        </div>
    );
}
export default Vehicle;