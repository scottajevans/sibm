import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

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

  clickedNext = () => {
    let nextPos = this.state.gamePos === games.length - 1 ? 0 : this.state.gamePos + 1;
    this.setState({
      gamePos : nextPos,
      currentGame : games[nextPos]
    })
  }

  clickedRandomise = () => {
    this.setState({
      games : games.sort(() => 0.5 - Math.random()),
      currentGame : games[0]
    })
  }

  render() {
    return (
    <div className="App">
      <link rel="stylesheet" href="//brick.a.ssl.fastly.net/Roboto:400"/>
      <CSSTransition
          in={true}
          appear={true}
          timeout={800}
          classNames="fade"
        >
        <div>
          <header className="App-header">
            <h1>S.I.B.M.</h1>
            <h2>For Super Import Business Meeting use only</h2>
            <TransitionGroup>
              <CSSTransition
              key={this.state.currentGame.name}
              timeout={{ enter: 1000, exit: 500 }}
              classNames="slide"
              >
                <Game game={this.state.currentGame} />
              </CSSTransition>
            </TransitionGroup>
            <div style={{'margin-top': '300px'}}>
              <Button variant="primary" size="lg" className="next-btn" onClick={this.clickedNext}>Next</Button>
              <Button variant="primary" size="lg" className="randomise-btn" onClick={this.clickedRandomise}>Randomize</Button>
            </div>
          </header>
        </div>
      </CSSTransition>
    </div>
    );
  }
}

export default App;
