import React, { Component } from 'react';
import store from './store';
import { Provider } from 'react-redux';
import './App.css';

import QuestionsChart from './components/QuestionsChart'
import StudentsChart from './components/StudentsChart'



class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <h1>BarChart</h1>
        <div className="Charts">
        <QuestionsChart />
        <StudentsChart />
        </div>
      </div>
      </Provider>
    );
  }
}

export default App;