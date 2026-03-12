import React from 'react';
import { Calculator } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="no-print header">
      <div className="container">
        <div className="logo">
          <Calculator size={32} color="#4A90E2" />
          <h1>MathGen Kids</h1>
        </div>
        <p>Fun & Easy Math Worksheets (PreK - 5th Grade)</p>
      </div>
    </header>
  );
};

export default Header;
