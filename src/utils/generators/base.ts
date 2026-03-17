export type Grade = 'Pre-K' | 'K' | '1st' | '2nd' | '3rd' | '4th' | '5th' | '6th';

export interface EquationPart {
  type: 'text' | 'fraction' | 'icons' | 'pattern';
  value: string | { numerator: string; denominator: string } | { icon: string; count: number } | string[];
}

export interface Equation {
  id: string;
  question: EquationPart[];
  answer: string | number;
  operation: string;
}

export const getRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
