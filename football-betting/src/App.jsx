import { useState, useEffect } from "react";
import { useRoutes, Link } from "react-router-dom";
import React from "react";
import "./App.css";
import PlayerDetail from "./components/PlayerDetail";
import Home from "./pages/Home";
function App() {
  const [name, setName] = useState(null);
  const [batch, setBatch] = useState(null);
  const [playerVer, setPlayerVer] = useState(null);
  let element = useRoutes([
    {
      path: "/Details",
      element: <PlayerDetail name={name} batch={batch} playerVer={playerVer}/>,
    },
    {
      path: "/",
      element:
        <Home
          setName={setName}
          setBatch={setBatch}
          setPlayerVer={setPlayerVer}
        />,
    },
  ]);

  return (
    <div className="App">
      <h1 className="header">Soccer Player Stats Searcher</h1>
      <Link to="/">
        <button className="headerBtn">Home</button>
      </Link>
      {element}
    </div>
  );
}

export default App;
