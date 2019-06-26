import React, { Component } from 'react';
import store from './store';
import { Provider } from 'react-redux';
// import { Route } from 'react-router-dom';
import './App.css';

import QuestionsChart from './components/QuestionsChart'
import StudentsChart from './components/StudentsChart'
import QuestionsPieChart from './components/QuestionsPieChart'



class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <h1>Student's Progress</h1>
        <div className="Charts">
        <QuestionsChart />
        <StudentsChart />
        <QuestionsPieChart />
        </div>
      </div>
      </Provider>
    );
  }
}

export default App;