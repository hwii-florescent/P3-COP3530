import searchNameInJson from "../searchEngine";
import playerJSON from "../../tree_structure.json";
import PlayerData from "../components/PlayerData";
import React from "react";
import { useState } from "react";
import "./Home.css";

function Home({ setName, setBatch, setPlayerVer }) {
  const [jsonData, setjsonData] = useState(null);
  const [userInput, setuserInput] = useState("");

  const handleChange = (e) => {
    setuserInput(e.target.value);
  };

  const loadJSONData = async (filePath) => {
    await fetch(filePath)
      .then((response) => response.json())
      .then((data) => {
        console.log("Data loaded successfully", data);
        // You can call other functions here to use the data
        setjsonData(data); // Assuming setjsonData is a function to handle the data
        setBatch(data);
      })
      .catch((error) => console.error("Failed to load JSON data", error));
  };
  const searchPlayer = () => {
    //take value from the dataset and display the player
    const searchResult = searchNameInJson(playerJSON, userInput);
    if (searchResult) {
      console.log("File found: ", searchResult);
      loadJSONData(searchResult);
      setName(userInput);
    } else {
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
        {jsonData ? (
          <PlayerData
            jsonData={jsonData}
            matchValue={userInput}
            setPlayerVer={setPlayerVer}
          />
        ) : null}
      </div>
    </div>
  );
}

export default Home;
