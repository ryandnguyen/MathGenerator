import React from 'react';
import type { Grade, Operation } from '../utils/equationGenerator';
import { RefreshCw, Printer, FileDown } from 'lucide-react';

interface ControlsProps {
  grade: Grade;
  setGrade: (grade: Grade) => void;
  operation: Operation;
  setOperation: (op: Operation) => void;
  count: number;
  setCount: (count: number) => void;
  useDecimals: boolean;
  setUseDecimals: (use: boolean) => void;
  onGenerate: () => void;
  onPrint: () => void;
}

const Controls: React.FC<ControlsProps> = ({
  grade,
  setGrade,
  operation,
  setOperation,
  count,
  setCount,
  useDecimals,
  setUseDecimals,
  onGenerate,
  onPrint,
}) => {
  const grades: Grade[] = ['Pre-K', 'K', '1st', '2nd', '3rd', '4th', '5th', '6th'];
  const operations: Operation[] = ['Addition', 'Subtraction', 'Multiplication', 'Division', 'Exponents'];

  return (
    <section className="no-print controls">
      <div className="container">
        <div className="control-group">
          <label>Grade Level</label>
          <div className="button-grid">
            {grades.map((g) => (
              <button
                key={g}
                className={grade === g ? 'active' : ''}
                onClick={() => setGrade(g)}
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        <div className="control-group">
          <label>Operation</label>
          <div className="button-grid">
            {operations.map((op) => (
              <button
                key={op}
                className={operation === op ? 'active' : ''}
                onClick={() => setOperation(op)}
              >
                {op}
              </button>
            ))}
          </div>
        </div>

        <div className="control-row">
          <div className="control-group">
            <label>Questions: {count}</label>
            <input
              type="range"
              min="5"
              max="40"
              step="5"
              value={count}
              onChange={(e) => setCount(parseInt(e.target.value))}
            />
          </div>

          <div className="control-group checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={useDecimals}
                onChange={(e) => setUseDecimals(e.target.checked)}
              />
              <span>Use Decimals</span>
            </label>
          </div>
        </div>

        <div className="action-buttons">
          <button className="btn-primary" onClick={onGenerate}>
            <RefreshCw size={20} /> Generate New
          </button>
          <button className="btn-secondary" onClick={onPrint}>
            <Printer size={20} /> Print Worksheet
          </button>
          <button className="btn-download" onClick={onPrint}>
            <FileDown size={20} /> Download PDF
          </button>
        </div>
      </div>
    </section>
  );
};

export default Controls;
