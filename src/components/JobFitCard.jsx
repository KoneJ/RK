import React from 'react';
import { Bar } from 'react-chartjs-2';

const JobFitCard = ({ data }) => {
  if (!data) return null;

  const chartData = {
    labels: ['AI', 'Digital', 'DX Eng.', 'Cloud'],
    datasets: [
      {
        label: '직무 적합도',
        data: [data.ai, data.digital, data.dx, data.cloud],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        min: 0,
        max: 100,
        ticks: {
          callback: function (value) {
            return value + '%';
          },
        },
      },
    },
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">직무 적합도</h3>
        <button className="card-button">상세</button>
      </div>
      <div className="job-fit-chart">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default JobFitCard; 