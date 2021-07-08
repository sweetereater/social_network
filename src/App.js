import './App.css';
import Nav from './Components/Nav/Nav';
import Profile from './Components/Profile/Profile';
import Header from './Components/Header/Header';
import Dialogs from './Components/Dialogs/Dialogs';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Nav />

        <Switch>
          <Route exact path='/'>
            <Profile />
          </Route>
          <Route path='/profile'>
            <Profile />
          </Route>
          <Route path='/messages'>
            <Dialogs />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
