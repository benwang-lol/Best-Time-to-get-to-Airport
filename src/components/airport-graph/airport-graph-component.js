import React from 'react';
import { Line, Chart } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import OptimalHour from '../literally-a-sentence/optimal-hour-sentence';
import './airport-graph-component.css';

const Graph = ({data1, data2}) => {
  // Generate data points for the equation y = x^2
  const data = {
    labels: [],
    datasets: [
      {
        label: 'Hours Early vs. Net Utils',
        data: [],
        fill: false,
        borderColor: '#0047AB',
        // borderColor: 'rgb(75, 192, 192)',
        tension: 0.3,
        backgroundColor: 'transparent',
        pointBorderWidth: 0
      }
    ]
  };

  let risk = 0;

  for (let x = 0; x <= 10; x++) {
    //x is # hours early
    //if x == 0 --> we want risk to be 100%:
    if (x === 0) {
        risk = 1;
    } else {
        risk = risk * 0.25;
    }
    //assign a percent risk for missing the flight for each x

    // console.log(risk);

    const y = (x * -data1) + (risk * (-data2));
    data.labels.push(x);
    data.datasets[0].data.push(y);
  }

  //now we want to find the PEAK util num 
  const maxUtil = Math.max(...data.datasets[0].data);
  let optimalHourIndex = 0;
  for (let i = 0; i <= data.datasets[0].data.length; i++) {
    if (data.datasets[0].data[i] === maxUtil) {
      optimalHourIndex = i;
    }
  }
  const optimalHour = data.labels[optimalHourIndex];

  return (
    <div>
      <Line data={data} />
      <OptimalHour oH={optimalHour} />
    </div>
  )
};

export default Graph;
