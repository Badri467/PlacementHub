import React from 'react';
import './UpcomingCompanies.css';

const upcomingData = [
  { id: 1, name: "Amazon", date: "2023-12-15", role: "SDE" },
  { id: 2, name: "Meta", date: "2024-01-10", role: "Frontend Engineer" },
];

const UpcomingCompanies = () => {
  return (
    <div className="upcoming-companies">
      <h2>Upcoming Drives</h2>
      <div className="company-list">
        {upcomingData.map(company => (
          <div key={company.id} className="company-item">
            <h3>{company.name}</h3>
            <p>Date: {company.date}</p>
            <p>Role: {company.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingCompanies;