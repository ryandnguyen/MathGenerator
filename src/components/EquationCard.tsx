import React from 'react';
import type { Equation } from '../utils/equationGenerator';

interface EquationCardProps {
  equation: Equation;
  index: number;
}

const EquationCard: React.FC<EquationCardProps> = ({ equation, index }) => {
  return (
    <div className="equation-card">
      <span className="index">{index}.</span>
      <span className="question">{equation.question}</span>
      <span className="answer-box"></span>
    </div>
  );
};

export default EquationCard;
