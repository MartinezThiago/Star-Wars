import React, { useEffect, useState } from "react";
import "./character.css";
import { Link, useParams } from "react-router-dom";
import Movie from "../movie/movie";
import Loading from "../loading/loading";
import Vehicle from "../vehicle/vehicle";
import Starship from "../starship/starship";

const CharacterDescription = (props) => {
  const [world, setWorld] = useState(); //HOME WORLD
  const [spec, setSpec] = useState(null); //SPECIE
  const [star, setStar] = useState(null); //STARSHIPS
  const [vehi, setVehi] = useState(null); //VEHICLES
  const [movies, setMovies] = useState([]); //FILMS
  //const [loadingMovies, setLoadingMovies] = useState(true);
  //const [loadingStarships, setLoadingStarships] = useState(true);
  //const [loadingVehicles, setLoadingVehicles] = useState(true);
  const { character } = useParams();
  let fil = props.status.filter((x) => x.name === character);
  let data = fil[0];
  const makeTheRequests = () => {
    waitRequestWorld(data.homeworld); //HOME WORLD
    if (data.species.length === 1) {
      //SPECIE
      waitRequestSpec(data.species[0]);
    }
    //waitRequestStar();//STARSHIPS
    //waitRequestVehi();//VEHICLE
    getDataMovie(data.films);
    // getDataStarship(data.starships);
    // getDataVehicle(data.vehicles);
  };
  useEffect(() => {
    makeTheRequests();
  }, []);

  useEffect(() => {
    console.log(movies);
  }, [movies]);
  
  // const cardsMovies = movies.map((e) => {
  //   //debugger;
  //   return (
  //     <Movie
  //       key={e.episode_id}
  //       filmReq={e}
  //     ></Movie>
  //     );
  // });
  

  // const cardsStarships = star.map((e) => {
  //   return (<Starship key={e.name} starReq={e}></Starship>);
  // });
  // const cardsVehicles = vehi.map((e) => {
  //   return (<Vehicle key={e.name} vehiReq={e}></Vehicle>);
  // });

  async function getDataMovie(films) {
    const data=await getDataM(films);
    setMovies(data);
  }

  async function getDataStarship(starships) {
    setStar(await getDataS(starships));
  }
  async function getDataVehicle(vehicles) {
    setVehi(await getDataV(vehicles));
  }
  async function getDataM(data) {
    let arrRes = [];
    data.map(async (url) => {
      const req=await makeRequest(url);
      arrRes.push(req);
    });
    return arrRes;
  }
  async function getDataS(data) {
    let arrRes = [];
    data.map(async (url) => {
      arrRes.push(await makeRequest(url));
    });
   
    return arrRes;
  }
  async function getDataV(data) {
    let arrRes = [];
    data.map(async (url) => {
      arrRes.push(await makeRequest(url));
    });
  
    return arrRes;
  }
  async function waitRequestWorld(url) {
    setWorld(await makeRequest(url));
  }
  async function waitRequestSpec(url) {
    setSpec(await makeRequest(url));
  }
  // async function waitRequestStar(url) {
  //   setStar(await makeRequest(url));
  // }
  // async function waitRequestVehi(url) {
  //   setVehi(await makeRequest(url));
  // }
  async function makeRequest(url) {
    return fetch(url).then((resp) => resp.json());
  }
  return (
    <div>
      <Link to="/" id="btn-bth">
        <b>❮❮ Back To Home</b>
      </Link>
      <h1 className="title">{character}</h1>
      <div id="char-description-wrapper">
        <p>
          <b className="char-desc-title">Birth Year: </b>
          {data.birth_year}
        </p>
        <p>
          <b className="char-desc-title">Eye Color: </b>
          {data.eye_color}
        </p>
        <p>
          <b className="char-desc-title">Gender: </b> {data.gender}
        </p>
        <p>
          <b className="char-desc-title">Hair Color: </b>
          {data.hair_color}
        </p>
        <p>
          <b className="char-desc-title">Height: </b>
          {data.height}
        </p>
        <p>
          <b className="char-desc-title">Home World: </b>
          {world ? world.name : null}
        </p>
        <p>
          <b className="char-desc-title">Movies: </b>
          {data.films.length} appearances
        </p>
        <p>
          <b className="char-desc-title">Mass: </b>
          {data.mass}
        </p>
        <p>
          <b className="char-desc-title">Skin Color: </b>
          {data.skin_color}
        </p>
        <p>
          <b className="char-desc-title">Specie: </b>
          {spec ? spec.name : "none"}
        </p>
        <p>
          <b className="char-desc-title">Starships: </b>
          {data.starships.length}
        </p>
        <p>
          <b className="char-desc-title">Vehicles: </b>
          {data.vehicles.length}
        </p>
      </div>
      <h1 className="title">PELICULAS</h1>
      {
        movies.map((e,i) => {
          console.log(e);
        return (
          <Movie
            key={i}
            filmReq={e}
          />
          );
      })}
      <h1 className="title">STARSHIPS</h1>
      <div>{<Loading></Loading>}</div>
      <h1 className="title">VEHICLES</h1>
      <div>{<Loading></Loading>}</div>
    </div>
  );
};

export default CharacterDescription;
