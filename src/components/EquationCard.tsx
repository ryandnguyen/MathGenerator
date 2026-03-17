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
      <div className="question">
        {equation.question.map((part, i) => {
          if (part.type === 'fraction') {
            const val = part.value as { numerator: string; denominator: string };
            return (
              <span key={i} className="fraction">
                <span className="numerator">{val.numerator}</span>
                <span className="denominator">{val.denominator}</span>
              </span>
            );
          }
          if (part.type === 'icons') {
            const val = part.value as { icon: string; count: number };
            return (
              <div key={i} className="icon-group">
                {Array.from({ length: val.count }).map((_, j) => (
                  <span key={j} className="emoji-icon">{val.icon}</span>
                ))}
              </div>
            );
          }
          if (part.type === 'pattern') {
            const val = part.value as string[];
            return (
              <div key={i} className="pattern-group">
                {val.map((emoji, j) => (
                  <span key={j} className="emoji-icon">{emoji}</span>
                ))}
                <span className="pattern-placeholder">___</span>
              </div>
            );
          }
          return <span key={i}>{part.value as string}</span>;
        })}
      </div>
      {equation.operation !== 'Expanded Form' && <span className="answer-box"></span>}
    </div>
  );
};

export default EquationCard;
