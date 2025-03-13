import React from 'react';
import './CompanyCard.css';

const CompanyCard = ({ company }) => {
  return (
    <div className="company-card">
      <div className="company-header">
        <h3>{company.name}</h3>
        {company.website && (
          <a 
            href={company.website} 
            target="_blank" 
            rel="noopener noreferrer"
            className="website-link"
          >
            Visit Website
          </a>
        )}
      </div>
      {company.details && (
        <div className="company-details">
          <p>{company.details}</p>
        </div>
      )}
    </div>
  );
};

export default CompanyCard;