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
    axios.get(`http://localhost:4000/evaluations`)
      .then(res => {
        console.log('res', res)
        const evaluations = res.data.evaluationArray;
        console.log('evaluations:', evaluations)
        let studentName = [];
        let questionKey = [];
        evaluations.map(element => {
          console.log('element.fulfillmentValue.student.gitName', element.fulfillmentValue[0].student.gitName)
          studentName.push(element.fulfillmentValue[0].student.gitName);
          questionKey.push(element.fulfillmentValue[0].question.key[1]);
        });
        this.setState({ 
          Data: {
            labels: questionKey,
            datasets:[
               {
                  label:'Number of passed tests per student',
                  data: [3,5,6,8,1,3,5,6] ,
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