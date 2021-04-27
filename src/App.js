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

    this.state = {
      loading : true,
      gamePos : 0,
      currentAnimation : "slide",
      buttonsEnabled : true,
      enterDelay : 800,
      exitDelay : 400
    }
  }

  componentDidMount() {
    fetch('https://scottajevans.github.io/sibmdata/data.json')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        data.sort(() => 0.5 - Math.random());
        this.setState({
          loading : false,
          games : data,
          currentGame : data[0]
        });
      });
        
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
      currentAnimation : "slip",
      enterDelay : 400,
      exitDelay : 200,
      buttonsEnabled : false,
      games : games.sort(() => 0.5 - Math.random()),
      currentGame : games[0]
    })
    setTimeout(() => {
      this.setState({
        currentGame : games[1]
      });
      setTimeout(() => {
        this.setState({
          currentGame : games[2],
        });
        setTimeout(() => {
          this.setState({
            currentGame : games[3]
          });
          setTimeout(() => {
            this.setState({
              currentGame : games[4]
            });
            setTimeout(() => {
              this.setState({
                buttonsEnabled : true,
                enterDelay : 800,
                exitDelay : 400,
                currentAnimation : "slide"
              })
            }, 400)
          }, 400)
        }, 400)
      }, 400);
    }, 400);
  }

  render() {
    return (
    <div className="App">
      <link rel="stylesheet" href="//brick.a.ssl.fastly.net/Roboto:400"/>
      { !this.state.loading && <CSSTransition
          in={true}
          appear={true}
          timeout={800}
          classNames="fade"
        >
        <div>
          <header className="App-header">
            <h1>S.I.B.M.</h1>
            <h2>For Super Import Business Meeting use only</h2>
          </header>
          <body className="App-body">
            <TransitionGroup>
              <CSSTransition
              ref={this.gameRef}
              key={this.state.currentGame.name}
              timeout={{ enter: this.state.enterDelay, exit: this.state.exitDelay }}
              classNames={this.state.currentAnimation}
              >
                <Game game={this.state.currentGame} />
              </CSSTransition>
            </TransitionGroup>
            <div style={{'marginTop': '300px'}}>
              <Button variant="primary" size="lg" className="next-btn" onClick={this.clickedNext} disabled={!this.state.buttonsEnabled}>Next</Button>
              <Button variant="primary" size="lg" className="randomise-btn" onClick={this.clickedRandomise} disabled={!this.state.buttonsEnabled}>Randomize</Button>
            </div>
          </body>
        </div>
      </CSSTransition> }
    </div>
    );
  }
}

export default App;
