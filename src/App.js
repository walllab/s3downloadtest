import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          click to download item:
        </p>
        <a
          className="App-link"
          href="./download.png"
          download="download.png"
        >
          download
        </a>
      </header>
    </div>
  );
}

export default App;
