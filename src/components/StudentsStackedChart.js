import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';
import axios from 'axios';


class StudentsStackedChart extends Component {
  
  constructor(props) {
      super(props);
      this.state ={
        Data:{}
      }
  }

  getStudentsData = () => {
    return axios.get(`http://localhost:4000/stack-evaluations-by-student`)
       .then(res => {
         // console.log('res', res)
         const evaluations = res.data.attemptedPerStudent;
        // console.log('evaluations:', evaluations)
         // console.log('students response', res)
        // console.log('students evaluations:', evaluations)
         let studentName = [];        
         let questionsPassed = [];
         let questionsFailed = [];
         evaluations.map(element => {
          studentName.push(element.studentName);
          questionsPassed.push(element.questionsPassed);
          questionsFailed.push(element.questionsFailed)
          return null
         });
         this.setState({ 
           Data: {
             labels: studentName,
             datasets:[
                {
                   label:'Passed questions',
                   data: questionsPassed ,
                   backgroundColor: 'rgba(90,178,255,0.6)'
                },
                {
                  label:'Failed questions',
                  data: questionsFailed ,
                  backgroundColor: 'rgba(240,134,67,0.6)'
               }
             ]
          }
          });
       })
  }
  componentDidMount() {
    this.getStudentsData()
    //makes another request to the server every 30 seconds
    setInterval(this.getStudentsData, 30000)
   }
    render()
    {
       return(
          <div>
             <Bar  
             data = {this.state.Data}
             width = {500}
             height = {500}
             options = {{
                title: {
                  display: true,
                  text: 'No. of passed and failed questions by student',
                  fontSize:25
                },
                legend: {
                  display: false,
                  position: 'bottom', 
                },
                maintainAspectRatio: true,
                scales: {
                  yAxes: [{
                      stacked: true,
                      ticks: {
                          beginAtZero: true,
                          userCallback: function(label, index, labels) {
                              // when the floored value is the same as the value we have a whole number
                              if (Math.floor(label) === label) {
                                  return label;
                              }
          
                          },
                      }
                  }],
                  xAxes: [{
                    stacked: true,
                    scaleLabel: {
                       display: true,
                       labelString: 'Student name'
                     }
                 }],
              },
                layout: {
                 padding:{
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


export default StudentsStackedChart;