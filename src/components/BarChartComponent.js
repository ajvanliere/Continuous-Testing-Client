import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';
import axios from 'axios'



export default class BarChartComponent extends Component
{
   constructor(props) {
      super(props);
      this.state ={
       }
  }
  componentDidMount() {
    axios.get(`http://localhost:4000/evaluations-by-question`)
      .then(res => {
        console.log('res', res)
        const evaluations = res.data.passedPerQuestion;
        console.log('evaluations:', evaluations)
        let questionId = [];        
        let studentsPassed = [];
        evaluations.map(element => {
          questionId.push(element.questionId);
          studentsPassed.push(element.studentsPassed);
        });
        this.setState({ 
          Data: {
            labels: questionId,
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
   render()
   {
      return(
         <div>
            <Bar  
            data = {this.state.Data}
            options = {{ maintainAspectRatio: false }} />
         </div>
      )
   }
}