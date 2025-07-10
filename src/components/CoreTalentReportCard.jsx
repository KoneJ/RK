import React from 'react';

const CoreTalentReportCard = ({ data }) => {
  if (!data) return null;

  const { type, rationale } = data;

  return (
    <div className="card core-talent-report-card">
      <div className="card-header">
        <h3 className="card-title">직군 별 핵심인재 도출</h3>
        <button className="card-button">상세</button>
      </div>
      <div className="card-content">
        <p className="report-summary">
          AI가 지원자의 데이터를 분석하여 직군 별 핵심인재 유형을 도출하고, 가장 적합한 유형을 제시합니다.
        </p>
        <div className="derived-type-section">
          <span className="derived-type-label">도출된 핵심인재 유형</span>
          <span className="derived-type-value">{type}</span>
        </div>
        <div className="rationale-section">
          <h4 className="rationale-title">주요 근거</h4>
          <ul className="rationale-list">
            {rationale.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CoreTalentReportCard; 