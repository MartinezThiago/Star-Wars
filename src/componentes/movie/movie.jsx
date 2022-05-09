import React from "react";
import './movie.css';

const Movie=(props)=>{
    console.log(props);
    return(
        <div id="movie">
            <h1 id="movie-name">{props.filmReq.title}</h1>
            <p><b>EPISODE: </b>{props.filmReq.episode_id}</p>
            <p><b>DIRECTOR: </b>{props.filmReq.director}</p>
            <p><b>PRODUCER BY: </b>{props.filmReq.producer}</p>
            <p><b>RELEASE DATE: </b>{props.filmReq.release_date}</p>
        </div>
    );
}

export default Movie;