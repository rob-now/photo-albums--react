import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from './Routes/Routes'
import {AlbumsProvider} from "./contexts/Albums";

class App extends Component {
  render() {
    return (
      <AlbumsProvider>
        <Router>
          <Routes/>
        </Router>
      </AlbumsProvider>
    )
  }
}

export default App;
