import React from 'react';
import logo from './logo.svg';
import './App.css';
import Scoreboard from './components/scoreboard/Scoreboard'
import Game from './components/game/Game'
import Team from './components/team/Team'

function App(props){
  const covid = {
      name: 'Covid 19s',
      logoSrc: "./assets/images/team1.jpg",
  }
  const heros = {
      name: 'Corporate Heros',
      logoSrc: './assets/images/team2.jpg',
  }
  const nih = {
      name: 'NIH',
      logoSrc: "<div classNa</div>/assets/images/NIH.jpg",
  }
  const mutation = {
      name: 'Mutations',
      logoSrc: "./assets/images/mutation.png"
  }


  return (
    <div className="App">
        <Game 
          venue="Johns Hopkins" 
          homeTeam={covid}
          visitingTeam={heros}
        />
        <Game 
        venue="The Mayo Clinic" 
        homeTeam={nih}
        visitingTeam={mutation}
        />
    </div>
  )
}

export default App;
