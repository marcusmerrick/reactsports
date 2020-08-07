import React from 'react';
import './App.css';
import Game from './components/game/Game'

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
      logoSrc: "../assets/images/NIH.jpg",
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
