import React from 'react';
import { Line, Chart } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const Graph = ({data1, data2}) => {
  // Generate data points for the equation y = x^2
  const data = {
    labels: [],
    datasets: [
      {
        label: 'y = x^2',
        data: [],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
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
        risk = risk * 0.50;
    }
    //assign a percent risk for missing the flight for each x

    console.log(risk);

    const y = (x * data1) + (risk * data2);
    data.labels.push(x);
    data.datasets[0].data.push(y);
  }

  return <Line data={data} />;
};

export default Graph;
