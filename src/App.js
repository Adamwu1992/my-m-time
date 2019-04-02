import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './componnets/Header';
import SubHeader from './componnets/SubHeader';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Header />
            <SubHeader />
          </header>

          <div className="main-box">
            {routes}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
