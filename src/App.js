import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state={
    url: null
  }

  onClick = event => {
    console.log('hello!')
    // try code to download from S3 here
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            click to download item:
          </p>
          {/* <a
            className="App-link"
            href="./download.png"
            download="download.png"
          >
            download
          </a> */}
          <button
            onClick={this.onClick}
          >
            download
          </button>
        </header>
      </div>
    );
  }

}

export default App;
