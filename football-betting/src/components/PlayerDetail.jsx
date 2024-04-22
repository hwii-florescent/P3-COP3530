import React from 'react';
import './PlayerDetail.css'; // Make sure to import the CSS file

function PlayerDetail({ name, batch, playerVer }) {
  let content;
  if (batch.hasOwnProperty(playerVer)) {
    const values = batch[playerVer];
    content = (
      <div className="player-c">
        <h2>{name}</h2>
        <img
          src={values[values.length - 1]}
          alt={`Image of ${name}`}
          className="player-img"
        />
        <div className="player-in4">
          <p>Position: {values[7]}</p>
          <p>Overall: {values[8]}</p>
          <p>Club: {values[20]}</p>
          <p>Nationality: {values[27]}</p>
        </div>
      </div>
    );
  } else {
    content = <p>No data available.</p>;
  }
  return <div>{content}</div>;
}

export default PlayerDetail;
