import React from 'react';
import { Line, Chart } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const Graph = () => {
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

  for (let x = -10; x <= 10; x++) {
    const y = Math.pow(x, 2);
    data.labels.push(x);
    data.datasets[0].data.push(y);
  }

  return <Line data={data} />;
};

export default Graph;
