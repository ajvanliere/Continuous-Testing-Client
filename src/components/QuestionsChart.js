import React, { Component } from 'react';
import {HorizontalBar} from 'react-chartjs-2';
import axios from 'axios'



export default class QuestionsChart extends Component {
   constructor(props) {
      super(props);
      this.state ={
         Data:{}
       }
  }

  componentDidMount() {
    axios.get(`http://localhost:4000/evaluations-by-question`)
      .then(res => {
        // console.log('res', res)
        const evaluations = res.data.passedPerQuestion;
        // console.log('evaluations:', evaluations)
        let questionKey = [];        
        let studentsPassed = [];
        evaluations.map(element => {
          questionKey.push(element.questionKey);
          studentsPassed.push(element.studentsPassed);

  getQuestionsData = () => {
     return axios.get(`http://localhost:4000/evaluations-by-question`)
     .then(res => {
       console.log('questions response', res)
       const evaluations = res.data.passedPerQuestion;
       console.log('questions evaluations:', evaluations)
       let questionKey = [];        
       let studentsPassed = [];
       evaluations.map(element => {
         questionKey.push(element.questionKey);
         studentsPassed.push(element.studentsPassed);
         return null
       });
       this.setState({ 
         Data: {
           labels: questionKey,
           datasets:[
              {
                 label:'Number of passed students per question',
                 data: studentsPassed ,
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
     this.getQuestionsData()
     //makes another request to the server every 30 seconds
     setInterval(this.getQuestionsData, 30000)
  }

   render()
   {
      return(
         <div>
            <HorizontalBar  
            data = {this.state.Data}
            width = {500}
            height = {500}
            options = {{
               title: {
                 display: true,
                 text: 'No. of students that passed each question',
                 fontSize:25
               },
               legend: {
                 display: false,
                 position: 'bottom', 
               },
               maintainAspectRatio: true,
               scales: {
                  xAxes: [{
                     scaleLabel: {
                        display: true,
                        labelString: 'Number of students'
                      },
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
                  yAxes: [{
                     scaleLabel: {
                        display: true,
                        labelString: 'Question key'
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