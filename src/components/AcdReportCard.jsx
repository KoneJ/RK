import React from 'react';

const AcdReportCard = ({ data }) => {
  if (!data) return null;

  const { percentage, coverLetter, suspectedSentences } = data;

  return (
    <div className="card acd-report-card">
      <div className="card-header">
        <h3 className="card-title">ACD - AI Content Detection</h3>
        <span className="ai-usage-tag">{`GPT 사용률 ${percentage}%`}</span>
      </div>
      <div className="acd-content">
        <h4 className="content-title">전체 자기소개서</h4>
        <div className="cover-letter-box" dangerouslySetInnerHTML={{ __html: coverLetter.replace(/\n/g, '<br />') }}></div>
        <h4 className="content-title">GPT 사용 의심 문장</h4>
        <ul className="gpt-sentences-list">
          {suspectedSentences.map((sentence, index) => (
            <li key={index}>{sentence}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AcdReportCard; 