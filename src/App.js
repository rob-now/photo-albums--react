import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from './routes/Routes'
import {AlbumsProvider} from './contexts/Albums';

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
