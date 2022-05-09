import React from "react";
import './card-pj.css';

const Card=(props)=>{  
    return(
        <div className="card">
            <h1>{props.character.name}</h1>
            <p><b>Gender:</b> {props.character.gender}</p>
            <p><b>n° Films:</b> {props.character.films.length}</p>
            <button id="more-info" onClick={props.callback}>More Info ❯❯</button>
        </div>
    );
}
export default Card;