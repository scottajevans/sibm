import './App.css';
import {Game} from './components/game.js';
let games = require('./games.json');

function App() {
  console.log(games)
  const gamesDisplay = Object.values(games).map((game, index) => {
    return (<li key={index}>
      <Game game={game}></Game>
    </li>)
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>S.I.B.M.</h1>
        <h4>For Super Import Business Meeting use only</h4>
        <ul>
          {gamesDisplay}
        </ul>
      </header>
    </div>
  );
}

export default App;
