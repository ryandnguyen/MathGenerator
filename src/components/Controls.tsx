import React from 'react';
import type { Category, Grade, Operation } from '../utils/equationGenerator';
import { RefreshCw, Printer, FileDown } from 'lucide-react';

interface ControlsProps {
  grade: Grade;
  setGrade: (grade: Grade) => void;
  category: Category;
  setCategory: (cat: Category) => void;
  operation: Operation;
  setOperation: (op: Operation) => void;
  count: number;
  setCount: (count: number) => void;
  useDecimals: boolean;
  setUseDecimals: (use: boolean) => void;
  onGenerate: () => void;
  onPrint: () => void;
}

const CATEGORIES: { label: Category; operations: string[]; minGrade: Grade; maxGrade?: Grade }[] = [
  {
    label: 'Learning',
    operations: ['Counting', 'Patterns', 'Comparison'],
    minGrade: 'Pre-K',
    maxGrade: '1st'
  },
  { 
    label: 'Arithmetic', 
    operations: ['Addition', 'Subtraction', 'Multiplication', 'Division', 'Exponents', 'Expanded Form'],
    minGrade: 'K'
  },
  { 
    label: 'Measurement', 
    operations: ['Money: Count', 'Money: Change', 'Time: Telling', 'Time: Elapsed', 'Units: Length', 'Units: Weight'],
    minGrade: '1st'
  },
  { 
    label: 'Fractions', 
    operations: ['Add Vertical', 'Sub Vertical', 'Multiply', 'Divide', 'Simplify', 'Compare'],
    minGrade: '3rd'
  },
  { 
    label: 'Geometry', 
    operations: ['Perimeter: Rect', 'Area: Rect', 'Perimeter: Square', 'Area: Square', 'Volume: Rect Prism', 'Shapes: Faces'],
    minGrade: '4th'
  }
];

const GRADES: Grade[] = ['Pre-K', 'K', '1st', '2nd', '3rd', '4th', '5th', '6th'];

const Controls: React.FC<ControlsProps> = ({
  grade,
  setGrade,
  category,
  setCategory,
  operation,
  setOperation,
  count,
  setCount,
  useDecimals,
  setUseDecimals,
  onGenerate,
  onPrint,
}) => {
  const gradeIndex = GRADES.indexOf(grade);
  
  const filteredCategories = CATEGORIES.filter(cat => {
    const minGradeIndex = GRADES.indexOf(cat.minGrade);
    const maxGradeIndex = cat.maxGrade ? GRADES.indexOf(cat.maxGrade) : 99;
    return gradeIndex >= minGradeIndex && gradeIndex <= maxGradeIndex;
  });

  const currentCategoryObj = filteredCategories.find(c => c.label === category) || filteredCategories[0];

  const handleGradeChange = (newGrade: Grade) => {
    setGrade(newGrade);
    const newGradeIndex = GRADES.indexOf(newGrade);
    const availableForNewGrade = CATEGORIES.filter(cat => {
      const minIdx = GRADES.indexOf(cat.minGrade);
      const maxIdx = cat.maxGrade ? GRADES.indexOf(cat.maxGrade) : 99;
      return newGradeIndex >= minIdx && newGradeIndex <= maxIdx;
    });
    
    // If current category is no longer available for the new grade, reset it
    if (!availableForNewGrade.find(c => c.label === category)) {
      handleCategoryChange(availableForNewGrade[0].label);
    }
  };

  const handleCategoryChange = (cat: Category) => {
    setCategory(cat);
    const catObj = CATEGORIES.find(c => c.label === cat);
    if (catObj) {
      setOperation(catObj.operations[0] as Operation);
    }
  };

  return (
    <section className="no-print controls">
      <div className="container">
        <div className="control-group">
          <label>Grade Level</label>
          <div className="button-grid">
            {GRADES.map((g) => (
              <button
                key={g}
                className={grade === g ? 'active' : ''}
                onClick={() => handleGradeChange(g)}
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        <div className="control-group">
          <label>Math Category</label>
          <div className="button-grid">
            {filteredCategories.map((cat) => (
              <button
                key={cat.label}
                className={category === cat.label ? 'active' : ''}
                onClick={() => handleCategoryChange(cat.label)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="control-group">
          <label>Topic: {category}</label>
          <div className="button-grid">
            {currentCategoryObj.operations.map((op) => (
              <button
                key={op}
                className={operation === op ? 'active' : ''}
                onClick={() => setOperation(op as Operation)}
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
                disabled={category !== 'Arithmetic'}
              />
              <span>Use Decimals (Arithmetic Only)</span>
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
