import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      <link rel="stylesheet" href="//brick.a.ssl.fastly.net/Roboto:400"/>
      <header className="App-header">
        <h1>S.I.B.M.</h1>
        <h4>For Super Import Business Meeting use only</h4>
        {this.gamesDisplay()}
        <div>
          <Button variant="primary" size="lg" className="next-btn" onClick={this.clickedButton}>Next</Button>
        </div>
      </header>
    </div>
    );
  }
}

export default App;
