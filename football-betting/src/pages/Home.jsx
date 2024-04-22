import searchNameInJson from "../searchEngine";
import playerJSON from "C:/Users/admin/OneDrive/Desktop/COP3530/P3-COP3530/tree_structure.json";
import PlayerCard from "../components/PlayerCard";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Home.css";

function Home({ setplaySelectedd, setplaySelecteddfilename }) {
  const [jsonData, setjsonData] = useState(null);
  const [userInput, setuserInput] = useState("");

  const handleChange = (e) => {
    setuserInput(e.target.value);
  };
  const handlePclick = (name, filename) => {
    console.log("Player clicked:", name, filename);

    setplaySelectedd({ name, filename });
    setplaySelecteddfilename({ filename });
  };

  const searchPlayer = () => {
    //take value from the dataset and display the player
    const searchResult = searchNameInJson(playerJSON, userInput);
    if (searchResult) {
      console.log("Player found: ", searchResult);
      setjsonData(searchResult);
      setplaySelectedd(null);
      console.log(jsonData);
    } else {
      setplaySelectedd(null);
      console.log("Player not found");
    }
  };
  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search players..."
          className="searchbar"
          value={userInput}
          onChange={handleChange}
        />
        <button className="searchbutton" onClick={searchPlayer}>
          Search
        </button>
      </div>
      <div>
        {jsonData
          ? jsonData.map((player) => (
              <ul key={player.filename}>
                <PlayerCard
                    key={player.filename}
                    name={player.name}
                    filename={player.filename}
                    
                  />
                <Link to="/player">
                <button onClick={() => handlePclick(player.name, player.filename)}> See Details </button>
                </Link>
              </ul>
            ))
          : null}
      </div>
    </div>
  );
}

export default Home;
