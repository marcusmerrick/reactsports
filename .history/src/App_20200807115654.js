import React from 'react';
import './App.css';
import Game from './components/game/Game'
import Nih from './components/assets/images/NIH.jpg'
import 

function App(props){
  const covid = {
      name: 'Covid 19s',
      logoSrc: "./components/assets/images/team1.jpg",
  }
  const heros = {
      name: 'Corporate Heros',
      logoSrc: './components/assets/images/team2.jpg',
  }
  const nih = {
      name: 'NIH',
      logoSrc: Nih,
  }
  const mutation = {
      name: 'Mutations',
      logoSrc: './components/assets/images/mutation.png'
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
