import { useState, useEffect } from "react";
import { useRoutes, Link } from "react-router-dom";
import React from "react";
import "./App.css";

import PlayerDets from "./components/PlayerDets";
import Home from "./pages/Home";
function App() {
  const [playSelectedd, setplaySelectedd] = useState(null);
  const [playSelecteddFilename, setplaySelecteddfilename] = useState(null);
  let element = useRoutes([
    {
      path: "/player",
      element: <PlayerDets filename={playSelecteddFilename} />,
    },
    {
      path: "/",
      element:
        <Home
          setplaySelectedd={setplaySelectedd}
          setplaySelecteddfilename={setplaySelecteddfilename}
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
