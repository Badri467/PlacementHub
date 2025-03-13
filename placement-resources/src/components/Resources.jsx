import React, { useState } from 'react';
import './Resources.css';

const mockResources = [
  { id: 1, title: "Resume Template", type: "PDF", category: "Resume" },
  { id: 2, title: "Coding Interview Guide", type: "Article", category: "Coding" },
];

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="resources">
      <h2>Study Resources</h2>
      <input
        type="text"
        placeholder="Search resources..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="resource-grid">
        {mockResources
          .filter(resource =>
            resource.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map(resource => (
            <div key={resource.id} className="resource-card">
              <h3>{resource.title}</h3>
              <p>Type: {resource.type}</p>
              <p>Category: {resource.category}</p>
              <button className="btn">Download</button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Resources;