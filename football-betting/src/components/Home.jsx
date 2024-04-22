import React, { useState } from 'react';
import PlayerCard from './PlayerCard';
import searchNameInJson from '../searchEngine';
import playerJSON from 'C:/Users/admin/OneDrive/Desktop/COP3530/P3-COP3530/tree_structure.json'
function Home() {
  const [jsonData, setJsonData] = useState(null);
  const [userInput, setUserInput] = useState('');

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const searchPlayer = () => {
    const searchResult = searchNameInJson(playerJSON, userInput);
    if (searchResult) {
      setJsonData(searchResult);
    } else {
      setJsonData(null);
      console.log('Player not found');
    }
  };

  return (
    <div className="home">
      <div className='search-container'>
        <input
          type='text'
          placeholder='Search players...'
          className='searchbar'
          value={userInput}
          onChange={handleChange}
        />
        <button className='searchbutton' onClick={searchPlayer}>
          Search
        </button>
      </div>
      <div className="player-cards">
        {jsonData ? (
          <ul>
            {jsonData.map((player) => (
              <li key={player.filename}>
                <PlayerCard
                  name={player.name}
                  filename={player.filename}
                />
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}

export default Home;
