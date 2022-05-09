import { useEffect, useState } from "react";
import "../App.css";
import Card from "../componentes/card/card-pj.js";
import Loading from "../componentes/loading/loading.js";
import { Route, Routes, useNavigate } from "react-router-dom";
import CharacterDescription from "../componentes/character/character";

function makeRequest(id) {
  return fetch(`https://swapi.dev/api/people/?page=${id}`).then((resp) =>
    resp.json()
  );
}
function App() {
  //HOOK USESTATE
  const [loading, setLoading] = useState(true);
  const [nextapi, setNextApi] = useState(true);
  const [status, setStatus] = useState([]);
  let navigate = useNavigate();
  //HOOK USEEFFECT
  useEffect(() => {
    setLoading(true);
    getDataStatus();
  }, []);
  async function getDataStatus() {
    setStatus(await getData());
    setLoading(false);
  }
  async function getData() {
    let id = 1;
    let arrRes = [];
    while (nextapi) {
      const response = await makeRequest(id);
      response.results.forEach((e) => {
        arrRes.push(e);
      });
      if (response.next == null) {
        setNextApi(false);
        break;
      }
      id++;
    }
    return arrRes;
  }
  const cards = status.map((e) => {
    //console.log(e);
    return (
      <Card
        key={e.url}
        callback={() => {
          navigate(e.name);
        }}
        character={e}
      ></Card>
    );
  });
  //console.log(cards);
  const Home = () => {
    return (
      <div>
        <h1 className="title">Star Wars CHARACTERS</h1>
        <div id="characters">
          {loading ? <Loading></Loading> : <div id="allchars">{cards}</div>}
        </div>
      </div>
    );
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/:character"
          element={<CharacterDescription status={status} />}
        />
      </Routes>
    </div>
  );
}

export default App;
