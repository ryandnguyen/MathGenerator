import { getRandomInt } from './base';

export type WordProblemType = 'Fraction Addition' | 'Fraction Subtraction' | 'Fraction Multiplication' | 'Decimal Multiplication' | 'Perimeter';

const simplifyFraction = (num: number, den: number): { n: number, d: number } => {
  const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
  const common = gcd(num, den);
  return { n: num / common, d: den / common };
};

const formatMixedNumber = (whole: number, num: number, den: number): string => {
  if (num === 0) return `${whole}`;
  if (whole === 0) return `${num}/${den}`;
  return `${whole} ${num}/${den}`;
};

const commonDenominators = [2, 3, 4, 5, 6, 8, 10, 12];

export const generateWordProblems = (type: WordProblemType): { question: string; answer: string } => {
  const getFraction = () => {
    const den = commonDenominators[getRandomInt(0, commonDenominators.length - 1)];
    const num = getRandomInt(1, den - 1);
    const whole = getRandomInt(1, 10);
    return { whole, num, den };
  };

  switch (type) {
    case 'Perimeter': {
      // Rectangle perimeter: 2 * (l + w)
      const l = getFraction();
      const w = getFraction();
      
      // Ensure length > width roughly for realism, though not strictly required mathematically
      
      const q = `A rectangular sand box has a length of ${formatMixedNumber(l.whole, l.num, l.den)} feet and a width of ${formatMixedNumber(w.whole, w.num, w.den)} feet. What is its perimeter?`;
      
      // Calculate perimeter: 2 * (l + w)
      // Convert to improper fractions: (w * d + n) / d
      const lImpNum = l.whole * l.den + l.num;
      const wImpNum = w.whole * w.den + w.num;
      
      // Common denominator for addition
      const commonDen = l.den * w.den;
      const lNewNum = lImpNum * w.den;
      const wNewNum = wImpNum * l.den;
      
      const sumNum = lNewNum + wNewNum;
      
      // Multiply by 2
      const perimNum = sumNum * 2;
      const perimDen = commonDen;
      
      const { n: simpleNum, d: simpleDen } = simplifyFraction(perimNum, perimDen);
      
      const ansWhole = Math.floor(simpleNum / simpleDen);
      const ansRem = simpleNum % simpleDen;
      
      const a = formatMixedNumber(ansWhole, ansRem, simpleDen) + ' feet';
      return { question: q, answer: a };
    }

    case 'Fraction Addition': {
      const f1 = getFraction();
      const f2 = getFraction();
      
      const names = ['Kelly', 'Lucas', 'Mia', 'Ryan', 'Sofia'];
      const name = names[getRandomInt(0, names.length - 1)];
      const items = ['cups of flour', 'miles', 'hours', 'pounds of apples'];
      const item = items[getRandomInt(0, items.length - 1)];
      
      const q = `${name} used ${formatMixedNumber(f1.whole, f1.num, f1.den)} ${item} on Saturday and ${formatMixedNumber(f2.whole, f2.num, f2.den)} ${item} on Sunday. How much did ${name} use altogether?`;
      
      // Addition logic
      const f1Imp = f1.whole * f1.den + f1.num;
      const f2Imp = f2.whole * f2.den + f2.num;
      
      const commonDen = f1.den * f2.den;
      const sumNum = (f1Imp * f2.den) + (f2Imp * f1.den);
      
      const { n, d } = simplifyFraction(sumNum, commonDen);
      const ansWhole = Math.floor(n / d);
      const ansRem = n % d;
      
      return { question: q, answer: formatMixedNumber(ansWhole, ansRem, d) + ' ' + item.split(' ')[0] }; // Simple unit
    }

    case 'Fraction Subtraction': {
      const f1 = getFraction();
      const f2 = getFraction();
      
      // Ensure f1 > f2
      const val1 = f1.whole + f1.num / f1.den;
      const val2 = f2.whole + f2.num / f2.den;
      
      let larger = f1;
      let smaller = f2;
      
      if (val2 > val1) {
        larger = f2;
        smaller = f1;
      }
      
      const names = ['Kelly', 'Lucas', 'Mia', 'Ryan', 'Sofia'];
      const name = names[getRandomInt(0, names.length - 1)];
      
      const q = `${name} ran ${formatMixedNumber(larger.whole, larger.num, larger.den)} miles this week. This is ${formatMixedNumber(smaller.whole, smaller.num, smaller.den)} miles more than last week. How many miles did ${name} run last week?`;
      
      // Subtraction logic: larger - smaller
      const lImp = larger.whole * larger.den + larger.num;
      const sImp = smaller.whole * smaller.den + smaller.num;
      
      const commonDen = larger.den * smaller.den;
      const diffNum = (lImp * smaller.den) - (sImp * larger.den);
      
      const { n, d } = simplifyFraction(diffNum, commonDen);
      const ansWhole = Math.floor(n / d);
      const ansRem = n % d;
      
      return { question: q, answer: formatMixedNumber(ansWhole, ansRem, d) + ' miles' };
    }

    case 'Decimal Multiplication': {
      // 0.5 * 0.4 type problems
      const v1 = getRandomInt(1, 9) / 10; // 0.1 - 0.9
      const v2 = getRandomInt(1, 9) / 10; // 0.1 - 0.9
      
      const q = `Solve: ${v1} × ${v2} =`;
      const a = (v1 * v2).toFixed(2).replace(/\.?0+$/, ''); // Remove trailing zeros
      return { question: q, answer: a };
    }

    default:
      return { question: '1 + 1', answer: '2' };
  }
};
