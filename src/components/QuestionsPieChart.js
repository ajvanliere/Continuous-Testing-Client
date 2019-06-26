import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';

export default class QuestionsPieChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Data:{}
    }
  }
  componentDidMount() {
    axios.get(`http://localhost:4000/evaluations-by-question-student`)
      .then(res => {
        let questions = res.data.questions
        let students = res.data.students
        let totalPassed = res.data.questionsPassed
        let maxPassed = questions * students
        let totalFailed = maxPassed - totalPassed
        let pctQuestionsPassed = totalPassed / maxPassed * 100
        let pctQuestionsFailed = totalFailed / maxPassed * 100

        
        this.setState({
          Data: {
            labels: ['Questions Passed', 'Questions failed'],
            datasets: [
              {
                data: [ pctQuestionsPassed, pctQuestionsFailed],
                backgroundColor: [
                  'rgba(255,105,145,0.6)',
                  'rgba(155,100,210,0.6)',
                  'rgba(90,178,255,0.6)',
                  'rgba(240,134,67,0.6)',
                  'rgba(120,120,120,0.6)',
                  'rgba(250,55,197,0.6)'
                ]
              }
            ]
          }
        });
      })
  }
  render() {
    return (
      <div>
        <Pie
          type= 'pie'
          data={this.state.Data}
          height = {350}
          width = {350}
          options={{
            title: {
              display: true,
              text: '% of questions passed by students',
              fontSize: 35
            },
            legend: {
              display: true,
              position: 'bottom',
            },
            tooltips: {
              callbacks: {
              label: function(tootipItem, data) {
                const dataItem = data.datasets[tootipItem.datasetIndex].data[tootipItem.index] || '';
                return ` ${Math.round(dataItem)}%`;
              }
            } 
            },
            maintainAspectRatio: false,
            layout: {
              padding: {
                top: 0,
                bottom: 0,
                right: 0,
                left: 50
              }
            }
          }} />
      </div>
    )
  }
}