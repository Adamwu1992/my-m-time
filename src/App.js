import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './containers/Header';
import SubHeader from './containers/SubHeader';
import routes from './routes';
import store from './store/reducer';
import { Provider } from 'react-redux';
import 'antd-mobile/dist/antd-mobile.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
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
      </Provider>
    );
  }
}

export default App;
