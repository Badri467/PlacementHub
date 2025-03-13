import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <h1>Welcome to Placement Resources</h1>
        <p>Your one-stop destination for placement preparation.</p>
        <div className="cta-buttons">
          <Link to="/companies" className="btn">View Companies</Link>
          <Link to="/resources" className="btn">Explore Resources</Link>
          <Link to="/quiz" className="btn">Take a Quiz</Link>
          <Link to="/upcoming" className="btn">Upcoming Companies</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;