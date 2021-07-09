import './App.css';
import Nav from './Components/Nav/Nav';
import Profile from './Components/Profile/Profile';
import Header from './Components/Header/Header';
import Dialogs from './Components/Dialogs/Dialogs';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';




function App(props) {
  return (
    <Router>
      <div className="App">
        <Header />
        <Nav />
        <Switch>
          <Route path='/profile'>
            <Profile posts={props.state.profilePage.postsData} />
          </Route>
          <Route path='/messages'>
            <Dialogs
              data={props.state.dialogsPage} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
