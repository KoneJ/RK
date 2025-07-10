import React from 'react';
import { Radar } from 'react-chartjs-2';

const AnalysisSection = ({ title, data, options }) => (
  <div className="analysis-section">
    <div className="chart-wrapper">
      <Radar data={data} options={options} />
    </div>
    <div className="description-wrapper">
      <h4 className="description-title">{title}</h4>
    </div>
  </div>
);

const SimilarityAnalysisCard = ({ data, options }) => {
  if (!data) return null;

  const { talent, jobFit } = data;

  return (
    <div className="card similarity-analysis-card">
      <div className="card-header">
        <h3 className="card-title">PAS - People Analytics Scoring</h3>
        <p className="card-subtitle">지원자의 역량을 다각도로 분석하여 People Analytics 스코어를 제공합니다.</p>
      </div>
      <div className="analysis-container">
        <AnalysisSection
          title="핵심인재와의 유사도"
          data={talent}
          options={options}
        />
        <div className="divider"></div>
        <AnalysisSection
          title="직무 적합도"
          data={jobFit}
          options={options}
        />
      </div>
    </div>
  );
};

export default SimilarityAnalysisCard; 