import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p>© 2023 PlacementHub. All rights reserved.</p>
        <div className="footer__socials">
          <a href="/">LinkedIn</a>
          <a href="/">GitHub</a>
          <a href="/">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;