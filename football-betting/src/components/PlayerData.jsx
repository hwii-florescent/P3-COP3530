import React, { useEffect } from "react";
import "./PlayerData.css";
import { Link } from "react-router-dom";

function PlayerData({ jsonData, matchValue, setPlayerVer }) {
  useEffect(() => {
    // Find the first match and update the version
    const entry = Object.entries(jsonData).find(
      ([key, value]) => value[6] === matchValue
    );
    if (entry) {
      const [key, value] = entry;
      setPlayerVer(value[1]); // Update outside of the render method
    }
  }, [jsonData, matchValue, setPlayerVer]); // Dependency array

  return (
    <div className="player-container">
      {Object.entries(jsonData).map(([key, value]) => {
        if (value[6] === matchValue) {
          return (
            <div key={key} className="player-entry">
              <div className="player-info">
                <p>Version: {value[1]}</p>
                <p>Full Name: {value[6]}</p>
              </div>
              <img
                src={value[value.length - 1]}
                alt={`Image of ${value[6]}`}
                className="player-image"
              />
              <Link to="Details">
                <button>Show Details</button>
              </Link>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

export default PlayerData;
