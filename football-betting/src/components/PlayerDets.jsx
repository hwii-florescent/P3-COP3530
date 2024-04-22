import React, { useEffect, useState } from "react";
import axios from "axios";

const PlayerDets = ({ filename }) => {
  console.log("PlayerDets component rendered");
  console.log("Filename received in PlayerDets:", filename);

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDat = async () => {
      if (!filename) return;
      try {
        console.log(`Player: ${filename}`);
        const filenameString = filename.filename;
        const respDat = await axios.get(`/api/${filenameString}`);
        setData(respDat.data);
        console.log(respDat.data);
      } catch (error) {
        console.error("error in fetching data ", error);
      }
    };
    fetchDat();
  }, [filename]);

  return (
    <div className="player-details">
      {data ? (
        data.map((player, index) => (
          <div key={index}>
            <h2>{player[5]}</h2> 
            <p>Position: {player[7]}</p>
            <p>Age: {player[12]}</p>
            <p>League Id: {player[16]}</p>
            <p>League Name: {player[17]}</p>
            <p>League Level: {player[18]}</p>
            <p>Club Team: {player[19]}</p>
            <p>Club Name: {player[20]}</p>
            <p>Club Position: {player[21]}</p>

            <p><br /></p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PlayerDets;
