import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [user, setUser] = useState(null);

  // Load user from localStorage on initial render
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    // You might want to redirect here: window.location.href = '/login';
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/">PlacementHub</Link>
      </div>
      <ul className="navbar__links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/companies">Companies</Link></li>
        <li><Link to="/resources">Resources</Link></li>
        <li><Link to="/quiz">Quiz</Link></li>
        <li><Link to="/upcoming">Upcoming</Link></li>
        
        {/* Authentication Links */}
        {user ? (
          <>
            <li><span className="welcome-text">Welcome, {user.name}</span></li>
            <li><button onClick={handleLogout} className="logout-btn">Logout</button></li>
          </>
        ) : (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;