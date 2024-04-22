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
        // const jsonData = await respDat.json();
        setData(respDat.data);
        // console.log(respDat)
        // setData(respDat.default);
        // console.log(filename);
        // console.log(respDat.default);
        // const jsonData = await response.json();
        // setData(jsonData);
        console.log(respDat.data);
      } catch (error) {
        console.error("error in fetching data ", error);
      }
    };
    fetchDat();
  }, [filename]);
  return (
    <div className="player-details">
      {data.map((player, index) => (
        <div key={index}>
          <h2>{player[5]}</h2> 
          <p>Position: {player[7]}</p>
          <p>Age: {player[12]}</p>
          <p><br /></p>
        </div>
      ))}
    </div>
  );
};
export default PlayerDets;