import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../pages/AuthPages.css';
import './CompanyDetails.css';

const CompanyDetails = () => {
  const [companies, setCompanies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCompanies = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem('token'); // Get token from local storage
        const res = await axios.get('/api/placement/companies', {
          headers: {
            Authorization: `Bearer ${token}`, // Attach token in headers
          },
        });
        setCompanies(res.data);
      } catch (err) {
        setError(err.response?.data?.error || 'Failed to fetch companies');
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, []);

  return (
    <div className="auth-container">
      <div className="company-details">
        <h2>Company Search</h2>
        {error && <div className="auth-error">{error}</div>}
        <input
          type="text"
          placeholder="Search companies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {loading ? (
          <p>Loading companies...</p>
        ) : (
          <div className="company-grid">
            {companies
              .filter(company => 
                company.name.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map(company => (
                <div key={company.id} className="company-card">
                  <h3>{company.name}</h3>
                  <p>{company.details}</p>
                  <a href={company.website} target="_blank" rel="noopener noreferrer">Visit Website</a>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CompanyDetails;
