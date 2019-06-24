import React, { Component } from 'react';
import store from './store';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import BarChartComponent from './components/BarChartComponent'



class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <div className="App-header">
        <Route path="/" exact component={Home} />
        <h1>BarChart</h1>
        <BarChartComponent/>
        </div>
      </div>
      </Provider>
    );
  }
}

export default App;