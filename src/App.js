import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <ItemListContainer greeting='Bienvenidos!' />
        <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
