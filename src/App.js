import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Technologies />
    </div>
  );
}

function Header() {
  return (
    <div>
      <a href="#">Home - </a>
      <a href="#">News - </a>
      <a href="#">Contacts </a>
    </div>
  )
}

function Technologies() {
  return (
    <ul>
      <li>html</li>
      <li>css</li>
      <li>Javascript</li>
      <li>React.js</li>
    </ul>
  )
}

export default App;
