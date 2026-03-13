import React from 'react';
import type { Equation } from '../utils/equationGenerator';

interface AnswerKeyProps {
  equations: Equation[];
}

const AnswerKey: React.FC<AnswerKeyProps> = ({ equations }) => {
  return (
    <div className="answer-key printable-area page-break-before">
      <h3>Answer Key</h3>
      <div className="answer-grid">
        {equations.map((eq, index) => (
          <div key={eq.id} className="answer-item">
            <span className="index">{index + 1}.</span>
            <span className="answer">{eq.answer}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnswerKey;
