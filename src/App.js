import React, {Component} from 'react';

import './App.css';
import {Game} from './components/game.js';

let games = require('./games.json');

class App extends Component {
  constructor(){
    super();

    games.sort(() => 0.5 - Math.random());

    this.state = {
      gamePos : 0,
      currentGame : games[0],
      games : games
    }
  }

  gamesDisplay = () => {
    return <Game game={this.state.currentGame}></Game>
  }

  clickedButton = () => {
    let nextPos = this.state.gamePos === games.length - 1 ? 0 : this.state.gamePos + 1;
    this.setState({
      gamePos : nextPos,
      currentGame : games[nextPos]
    })
  }

  render() {
    return (
    <div className="App">
      <header className="App-header">
        <h1>S.I.B.M.</h1>
        <h4>For Super Import Business Meeting use only</h4>
        {this.gamesDisplay()}
        <div>
          <button onClick={this.clickedButton}>Next</button>
        </div>
      </header>
    </div>
    );
  }
}

export default App;
