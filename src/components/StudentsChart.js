import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';
import axios from 'axios';


class StudentsChart extends Component {
  
  constructor(props) {
      super(props);
      this.state ={
        Data:{}
      }
  }

  getStudentsData = () => {
    return axios.get(`http://localhost:4000/evaluations-by-student`)
       .then(res => {
         // console.log('res', res)
         const evaluations = res.data.passedPerStudent;
         // console.log('evaluations:', evaluations)
         // console.log('students response', res)
         const evaluations = res.data.passedPerStudent;
         // console.log('students evaluations:', evaluations)
         let studentName = [];        
         let questionsPassed = [];
         evaluations.map(element => {
          studentName.push(element.studentName);
          questionsPassed.push(element.questionsPassed);
          return null
         });
         this.setState({ 
           Data: {
             labels: studentName,
             datasets:[
                {
                   label:'Number of passed questions per student',
                   data: questionsPassed ,
                   backgroundColor:[
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
                  text: 'No. of passed questions by student',
                  fontSize:25
                },
                legend: {
                  display: false,
                  position: 'bottom', 
                },
                maintainAspectRatio: true,
                scales: {
                  yAxes: [{
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


export default StudentsChart;