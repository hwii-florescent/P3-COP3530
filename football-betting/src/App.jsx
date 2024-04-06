import {useState,useEffect} from 'react'
import './App.css'
function App() {
  const [userInput, setuserInput] = useState('');
  const [tabactive, settabactive]= useState('home');
  const funcclickedTab = (clickedtab) =>
  {
    settabactive(clickedtab);
  }

  const handleChange = (e) => {
    setuserInput(e.target.value);
  }

  const searchPlayer = () => {
    //take value from the dataset and display the player
  }

  return (
    <div className='mainbackground'>
      <nav className='navigate1'>
        <div className='navigateContain'></div>
        <ul className='navigatetabs'>
          <li className={tabactive=== 'home'?'active':'' }onClick={() => funcclickedTab('home')}>
            Home          
          </li>
          <li className={tabactive=== 'leaderboard'?'active':'' }onClick={() => funcclickedTab('leaderboard')}>
            Leaderboard
          </li>
          <li className={tabactive=== 'team'?'active':'' }onClick={() => funcclickedTab('team')}>
            Team
          </li>
          <li className={tabactive=== 'individ'?'active':'' }onClick={() => funcclickedTab('individ')}>
            Individual
          </li>
        </ul>
      </nav>
      <div className='displaypages'>
      {tabactive === 'home' && <div>Home</div>}
      {tabactive === 'leaderboard' && <div>Leaderboard</div>}
      {tabactive === 'team' && <div>Team</div>}
      {tabactive === 'individ' && <div>Individual</div>}
    </div>
    <div className='search-container'>
      <input type='text' placeholder='Search players...' className='searchbar' value={userInput} onChange={handleChange}/>
      <button className='searchbutton' onClick={searchPlayer}>Search</button>
    </div>

    </div>
  )
}

export default App
