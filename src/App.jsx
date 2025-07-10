import React, { useState } from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from 'chart.js';
import './App.css';
import { FAKE_APPLICANTS } from './fakeData';

import JobFitCard from './components/JobFitCard';
import AcdReportCard from './components/AcdReportCard';
import SimilarityAnalysisCard from './components/SimilarityAnalysisCard';
import CoreTalentReportCard from './components/CoreTalentReportCard';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

const radarOptions = {
  scales: {
    r: {
      angleLines: {
        display: true,
      },
      suggestedMin: 0,
      suggestedMax: 5,
      ticks: {
        display: false,
        stepSize: 1,
      },
      pointLabels: {
        font: {
          size: 10,
        },
        color: '#6b7280',
      }
    },
  },
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        boxWidth: 12,
        padding: 20,
        font: {
            size: 10,
        }
      }
    },
  },
  maintainAspectRatio: false,
};

export default function Dashboard() {
  const [selectedApplicantId, setSelectedApplicantId] = useState('hong');
  const selectedApplicant = FAKE_APPLICANTS[selectedApplicantId];

  const handleApplicantChange = (e) => {
    setSelectedApplicantId(e.target.value);
  };

  return (
    <div className="dashboard-container">
      <div className="header">
        <select onChange={handleApplicantChange} value={selectedApplicantId}>
          {Object.values(FAKE_APPLICANTS).map(applicant => (
            <option key={applicant.id} value={applicant.id}>{applicant.name}</option>
          ))}
        </select>
        <button>상세</button>
      </div>

      <div className="grid-container">
        <div className="grid-col grid-col-span-2">
          <AcdReportCard data={selectedApplicant.acd} />
        </div>
        <div className="grid-col grid-col-span-2">
          <SimilarityAnalysisCard
            data={selectedApplicant.pas}
            options={radarOptions}
          />
        </div>
        <div className="grid-col grid-col-span-2">
          <JobFitCard data={selectedApplicant.jobFitCard} />
        </div>
        <div className="grid-col grid-col-span-2">
          <CoreTalentReportCard data={selectedApplicant.coreTalent} />
        </div>
      </div>
    </div>
  );
}