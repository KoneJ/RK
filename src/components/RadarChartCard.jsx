import React from 'react';
import { Radar } from 'react-chartjs-2';

const RadarChartCard = ({ title, data, options, description }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
        <button className="card-button">상세</button>
      </div>
      <div className="chart-container">
        <Radar data={data} options={options} />
      </div>
      {description && (
        <div className="chart-description">
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default RadarChartCard; 