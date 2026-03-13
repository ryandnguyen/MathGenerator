export type Grade = 'Pre-K' | 'K' | '1st' | '2nd' | '3rd' | '4th' | '5th' | '6th';

export interface EquationPart {
  type: 'text' | 'fraction';
  value: string | { numerator: string; denominator: string };
}

export interface Equation {
  id: string;
  question: EquationPart[];
  answer: string | number;
}

export const getRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
