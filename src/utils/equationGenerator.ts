import { type Grade, type Equation, type EquationPart } from './generators/base';
import { generateArithmetic, type ArithmeticOperation } from './generators/arithmetic';
import { generateFractions, type FractionsOperation } from './generators/fractions';
import { generateMeasurement, type MeasurementOperation } from './generators/measurement';
import { generateGeometry, type GeometryOperation } from './generators/geometry';
import { generateLearning, type LearningOperation } from './generators/learning';
import { generateWordProblems, type WordProblemType } from './generators/wordProblems';

export type { Grade, Equation, EquationPart };

export type Category = 'Learning' | 'Arithmetic' | 'Fractions' | 'Measurement' | 'Geometry' | 'Algebra' | 'Word Problems';

export type Operation = 
  | LearningOperation
  | ArithmeticOperation 
  | FractionsOperation 
  | MeasurementOperation 
  | GeometryOperation
  | WordProblemType;

export const generateEquations = (
  grade: Grade, 
  category: Category,
  operation: Operation, 
  count: number, 
  useDecimals: boolean = false
): Equation[] => {
  const equations: Equation[] = [];
  const seen = new Set<string>();
  const maxAttempts = count * 10;
  let attempts = 0;

  while (equations.length < count && attempts < maxAttempts) {
    attempts++;
    let rawResult: { 
      question: string | any[]; 
      answer: string | number 
    };

    switch (category) {
      case 'Learning':
        rawResult = generateLearning(grade, operation as LearningOperation);
        break;
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
      case 'Word Problems':
        rawResult = generateWordProblems(operation as WordProblemType);
        break;
      default:
        rawResult = { question: '1 + 1 =', answer: 2 };
    }

    const serialized = JSON.stringify(rawResult.question);
    if (seen.has(serialized)) continue;
    seen.add(serialized);

    const questionParts: EquationPart[] = Array.isArray(rawResult.question)
      ? rawResult.question.map(p => {
          if (typeof p === 'string') return { type: 'text', value: p };
          if (p.type) return p as EquationPart;
          // If it's a fraction object from generateFractions
          if (typeof p === 'object' && 'numerator' in p && 'denominator' in p) {
            return { type: 'fraction', value: p as { numerator: string; denominator: string } };
          }
          return { type: 'text', value: JSON.stringify(p) }; // Fallback
        })
      : [{ type: 'text', value: rawResult.question as string }];

    equations.push({
      id: `${category}-${operation}-${equations.length}-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      question: questionParts,
      answer: rawResult.answer,
      operation: operation
    });
  }

  return equations;
};
