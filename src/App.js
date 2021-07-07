import './App.css';
import Header from './Components/Header';
import Technologies from './Components/Technologies';

function App() {
  return (
    <div className="App">
      <header className='header'>
        <img src="../public/logo_neu_de.png" alt="" />
      </header>
      <nav className="side">
        <div>Profile</div>
        <div>Messages</div>
        <div>News</div>
        <div>Music</div>
      </nav>
      <main className="main">
        <Header />
        <Technologies />
      </main>

    </div>
  );
}


export default App;
