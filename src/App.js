import './App.css';
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

  // const teamCombo = {
  //   batsman: Team.filter(ply => ply.role === 'Batsman'),
  //   bowler: Team.filter(ply => ply.role === 'Bowler'),
  //   wk: Team.filter(ply => ply.role === 'WK Batsman'),
  //   allrounder: Team.filter(ply => ply.role === 'Allrounder')
  // }

  return (
    <div className="App">
      <header>
        <h1>Dream Team, Build Your Alltime T20 team.</h1>
      </header>
      <main className="row">
        <div className="col-md-9 player-container">
          <h3 className="text-center">Select Player to build your team.</h3>
          <div className="allplayers">
            {
              players.map(player => <Player player={player} event={addToTeam} key={player.id}></Player>)
            }
          </div>
        </div>
        <div className="myteam col-md-3">
          <h3>Your team</h3>
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
