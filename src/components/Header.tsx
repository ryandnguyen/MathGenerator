import React from 'react';
import { Calculator } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="no-print header">
      <div className="container">
        <div className="logo">
          <Calculator size={32} color="#4A90E2" strokeWidth={2.5} />
          <h1>MathGen Kids v2.0</h1>
        </div>
        <p>Fun & Easy Math Worksheets (PreK - 6th Grade)</p>
      </div>
    </header>
  );
};

export default Header;
