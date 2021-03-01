import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import playerData from './Data/playerData.js'
import Player from './Components/Player/Player';
import { useEffect, useState } from 'react';
import Team from './Components/Player/Team/Team';

function App() {
  const [players, setPlayers] = useState([])
  const [team, setTeam] = useState([])
  useEffect(() => {
    setPlayers(playerData)
  }, [])
  const addToTeam = (player) => {
    if (team.indexOf(player) >= 0) {
      console.log('Players is already in the team.')
    } else if (team.length === 11) {
      alert("You already have 11 players in your team. Remove someone.")
    } else {
      const newTeam = [...team, player]
      setTeam(newTeam)
    }
  }
  const removePlayer = (player) => {
    const newTeam = team.filter(ply => ply.name !== player.name);
    setTeam(newTeam)
  }
  const totalCost = team.reduce((cost, player) => cost + player.salary, 0)
  return (
    <div className="App">
      <FontAwesomeIcon icon={faCoffee} />
      <h1>Dream Team, Build Your Alltime T20 team.</h1>
      <main className="row">
        <div className="col-md-9">
          <h2>Select Player to build your team.</h2>
          <div className="allplayers">
            {
              players.map(player => <Player player={player} event={addToTeam} key={player.id}></Player>)
            }
          </div>
        </div>
        <div className="myteam col-md-3">
          <h2>Your team</h2>
          <h4>Player added: {team.length}</h4>
          <p>Total Cost: {totalCost}</p>
          <ul>
            {
              team.map(player => <Team key={player.id} event={removePlayer} player={player}></Team>)
            }
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
