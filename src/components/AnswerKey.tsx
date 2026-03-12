import React from 'react';
import type { Equation, Grade } from '../utils/equationGenerator';

interface AnswerKeyProps {
  equations: Equation[];
  grade: Grade;
}

const AnswerKey: React.FC<AnswerKeyProps> = ({ equations, grade }) => {
  return (
    <div className="answer-key printable-area page-break-before">
      <h2>Answer Key</h2>
      <p>{grade} Math Practice</p>
      
      <div className="answer-grid">
        {equations.map((eq, index) => (
          <div key={eq.id} className="answer-item">
            <span className="index">{index + 1}.</span>
            <span className="question">{eq.question}</span>
            <span className="answer">{eq.answer}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnswerKey;
