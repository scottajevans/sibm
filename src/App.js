import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import './App.css';
import { Game } from './components/game.js';

let localGames = require('./games.json');

export const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [gamePos, setGamePos] = useState(0);
  const [buttonsEnabled, setButtonsEnabled] = useState(true);
  const [games, setGames] = useState(localGames);
  const [currentGame, setCurrentGame] = useState(localGames[0]);

  let currentAnimation = "slide";
  let enterDelay = 800;
  let exitDelay = 400;

  useEffect(() => {
    fetch('https://scottajevans.github.io/sibmdata/data.json')
      .then(response => response.json())
      .then(data => {
        data.sort(() => 0.5 - Math.random());
        setIsLoading(false);
        setGames(data);
        setCurrentGame(data[0]);
      });
  }, [])

  const clickedNext = () => {
    const nextPos = gamePos === games.length - 1 ? 0 : gamePos + 1;
    setGamePos(nextPos);
    setCurrentGame(games[nextPos]);
  }

  const clickedRandomise = () => {
    setButtonsEnabled(false);
    currentAnimation = "slip";
    enterDelay = 400;
    exitDelay = 200;

    for (let i = 0; i < 4; i++) {
      setTimeout(() => {
        setCurrentGame(games[i]);
      }, i * 400);
    }

    setGames(games.sort(() => 0.5 - Math.random()));
    setCurrentGame(games[0]);

    setButtonsEnabled(true)
    enterDelay = 800;
    exitDelay = 400;
    currentAnimation = "slide"
  }

  return (
    <div className="App">
      <link rel="stylesheet" href="brick.a.ssl.fastly.net/Roboto:400" />
      {isLoading ? (
        <div>Games are loading</div>
      ) : (
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
          </header>
          <body className="App-body">
            <TransitionGroup>
              <CSSTransition
                ref={React.createRef()}
                key={currentGame.name}
                timeout={{ enter: enterDelay, exit: exitDelay }}
                classNames={currentAnimation}
              >
                <Game game={currentGame} />
              </CSSTransition>
            </TransitionGroup>
            <div style={{
              'marginTop': '300px'
            }}>
              <Button variant="primary" size="lg" className="next-btn" onClick={clickedNext} disabled={!buttonsEnabled}>Next</Button>
              <Button variant="primary" size="lg" className="randomise-btn" onClick={clickedRandomise} disabled={!buttonsEnabled}>Randomize</Button>
            </div>
          </body>
        </div>
      </CSSTransition>
      )}
    </div>
  );
}

export default App;
