import React from 'react';
import './PlayerDetail.css'; // Make sure to import the CSS file

function PlayerDetail({ name, batch, playerVer }) {
  let content;
  if (batch.hasOwnProperty(playerVer)) {
    const values = batch[playerVer];
    content = (
      <div className="player-c">
        <h2>{values[6]}</h2>
        <img
          src={values[values.length - 1]}
          alt={`Image of ${name}`}
          className="player-img"
        />
        <div className="player-in4">
          <p>Position: {values[7]}</p>
          <p>Overall: {values[8]}</p>
          <p>Potential: {values[9]}</p>
          <p>Club: {values[20]}</p>
          <p>Club jersey number: {values[22]}</p>
          <p>Nationality: {values[27]}</p>
          <p>Preferred foot: {values[31]}</p>
          <p>Weak foot: {values[32]}</p>
          <p>Pace: {values[41]}</p>
          <p>Shooting: {values[42]}</p>
          <p>Passing: {values[43]}</p>
          <p>Dribbling: {values[44]}</p>
          <p>Defending: {values[45]}</p>
        </div>
      </div>
    );
  } else {
    content = <p>No data available.</p>;
  }
  return <div>{content}</div>;
}

export default PlayerDetail;
