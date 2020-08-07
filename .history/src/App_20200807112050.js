import React from 'react';
import logo from './logo.svg';
import './App.css';
import Scoreboard from './components/scoreboard/Scoreboard'
import Game from './components/game/Game'
import Team from './components/team/Team'

function App() {
  return (
    <div className="App">
      <Scoreboard />
      <Game />
      <Team />

    </div>
  );
}

export default App;
