import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement);

const StaffChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Turf Registrations',
        data: [10, 20, 15, 25, 30, 28, 35],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: 'Turf Registrations Over Time',
      },
    },
  };

  return (
    <div>
      <h3>Turf Registrations Chart</h3>
      <Line data={data} options={options} />
    </div>
  );
};

export default StaffChart;