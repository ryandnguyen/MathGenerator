import { type Grade, type Equation, type EquationPart } from './generators/base';
import { generateArithmetic, type ArithmeticOperation } from './generators/arithmetic';
import { generateFractions, type FractionsOperation } from './generators/fractions';
import { generateMeasurement, type MeasurementOperation } from './generators/measurement';
import { generateGeometry, type GeometryOperation } from './generators/geometry';

export type { Grade, Equation, EquationPart };

export type Category = 'Arithmetic' | 'Fractions' | 'Measurement' | 'Geometry' | 'Algebra';

export type Operation = 
  | ArithmeticOperation 
  | FractionsOperation 
  | MeasurementOperation 
  | GeometryOperation;

export const generateEquations = (
  grade: Grade, 
  category: Category,
  operation: Operation, 
  count: number, 
  useDecimals: boolean = false
): Equation[] => {
  const equations: Equation[] = [];

  for (let i = 0; i < count; i++) {
    let rawResult: { 
      question: string | (string | { numerator: string; denominator: string })[]; 
      answer: string | number 
    };

    switch (category) {
      case 'Arithmetic':
        rawResult = generateArithmetic(grade, operation as ArithmeticOperation, useDecimals);
        break;
      case 'Fractions':
        rawResult = generateFractions(operation as FractionsOperation);
        break;
      case 'Measurement':
        rawResult = generateMeasurement(operation as MeasurementOperation);
        break;
      case 'Geometry':
        rawResult = generateGeometry(operation as GeometryOperation);
        break;
      default:
        rawResult = { question: '1 + 1 =', answer: 2 };
    }

    const questionParts: EquationPart[] = Array.isArray(rawResult.question)
      ? rawResult.question.map(p => typeof p === 'string' 
          ? { type: 'text', value: p } 
          : { type: 'fraction', value: p })
      : [{ type: 'text', value: rawResult.question as string }];

    equations.push({
      id: `${category}-${operation}-${i}-${Date.now()}`,
      question: questionParts,
      answer: rawResult.answer
    });
  }

  return equations;
};
