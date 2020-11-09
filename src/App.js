import logo from './logo.svg';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import SWAPI from "./components/SWAPI";
import Pokemon from "./components/Pokemon";
import {Link} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Navegador de urls
        </p>
        <ul className="button">
          <li><Link to = "/">Home</Link></li>
          <li><Link to = "/swapi">SWAPI</Link></li>
          <li><Link to = "/pokemon">POKEMON</Link></li>
        </ul>
      </header>
      <div>
      <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/swapi" component={SWAPI} />
            <Route path="/pokemon" component={Pokemon} />
        </Switch>
      </div>
    </div>
    
  );
}

export default App;
