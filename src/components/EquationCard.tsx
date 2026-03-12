import React from 'react';
import type { Equation } from '../utils/equationGenerator';

interface EquationCardProps {
  equation: Equation;
}

const EquationCard: React.FC<EquationCardProps> = ({ equation }) => {
  return (
    <div className="equation-card">
      <span className="question">{equation.question}</span>
      <span className="answer-box"></span>
    </div>
  );
};

export default EquationCard;
