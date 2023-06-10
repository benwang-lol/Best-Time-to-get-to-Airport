import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const AnimatedGraph = () => {
  const [data, setData] = useState({
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
  });

  useEffect(() => {
    const animateGraph = () => {
      let x = 0;
      const interval = setInterval(() => {
        if (x > 10) {
          clearInterval(interval);
          return;
        }

        const y = Math.pow(x, 2);
        setData(prevData => ({
          ...prevData,
          labels: [...prevData.labels, x],
          datasets: [
            {
              ...prevData.datasets[0],
              data: [...prevData.datasets[0].data, y]
            }
          ]
        }));

        x++;
      }, 100);
    };

    animateGraph();
  }, []);

  return <Line data={data} />;
};

export default AnimatedGraph;