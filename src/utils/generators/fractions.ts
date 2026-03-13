import { getRandomInt } from './base';

export type FractionsOperation = 'Add Vertical' | 'Sub Vertical' | 'Multiply' | 'Divide' | 'Simplify' | 'Compare';

export const generateFractions = (
  operation: FractionsOperation
): { question: (string | { numerator: string; denominator: string })[]; answer: string } => {
  const getDenom = () => {
    const common = [2, 3, 4, 5, 6, 8, 10, 12];
    return common[getRandomInt(0, common.length - 1)];
  };

  const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
  const simplify = (num: number, den: number) => {
    const common = gcd(num, den);
    return { n: num / common, d: den / common };
  };

  switch (operation) {
    case 'Add Vertical': {
      const d = getDenom();
      const n1 = getRandomInt(1, d - 1);
      const n2 = getRandomInt(1, d - 1);
      const { n, d: finalD } = simplify(n1 + n2, d);
      return {
        question: [{ numerator: n1.toString(), denominator: d.toString() }, ' + ', { numerator: n2.toString(), denominator: d.toString() }, ' = '],
        answer: finalD === 1 ? n.toString() : `${n}/${finalD}`
      };
    }
    case 'Sub Vertical': {
      const d = getDenom();
      const n1 = getRandomInt(2, d - 1);
      const n2 = getRandomInt(1, n1 - 1);
      const { n, d: finalD } = simplify(n1 - n2, d);
      return {
        question: [{ numerator: n1.toString(), denominator: d.toString() }, ' - ', { numerator: n2.toString(), denominator: d.toString() }, ' = '],
        answer: finalD === 1 ? n.toString() : `${n}/${finalD}`
      };
    }
    case 'Multiply': {
      const d1 = getDenom();
      const n1 = getRandomInt(1, d1 - 1);
      const d2 = getDenom();
      const n2 = getRandomInt(1, d2 - 1);
      const { n, d: finalD } = simplify(n1 * n2, d1 * d2);
      return {
        question: [{ numerator: n1.toString(), denominator: d1.toString() }, ' × ', { numerator: n2.toString(), denominator: d2.toString() }, ' = '],
        answer: finalD === 1 ? n.toString() : `${n}/${finalD}`
      };
    }
    case 'Divide': {
      const d1 = getDenom();
      const n1 = getRandomInt(1, d1 - 1);
      const d2 = getDenom();
      const n2 = getRandomInt(1, d2 - 1);
      const { n, d: finalD } = simplify(n1 * d2, d1 * n2);
      return {
        question: [{ numerator: n1.toString(), denominator: d1.toString() }, ' ÷ ', { numerator: n2.toString(), denominator: d2.toString() }, ' = '],
        answer: finalD === 1 ? n.toString() : `${n}/${finalD}`
      };
    }
    case 'Simplify': {
      const d = getDenom() * getRandomInt(2, 4);
      const n = getRandomInt(1, d - 1);
      const { n: sn, d: sd } = simplify(n, d);
      return {
        question: ['Simplify: ', { numerator: n.toString(), denominator: d.toString() }],
        answer: sd === 1 ? sn.toString() : `${sn}/${sd}`
      };
    }
    case 'Compare': {
      const d1 = getDenom();
      const n1 = getRandomInt(1, d1 - 1);
      const d2 = getDenom();
      const n2 = getRandomInt(1, d2 - 1);
      const v1 = n1 / d1;
      const v2 = n2 / d2;
      return {
        question: [{ numerator: n1.toString(), denominator: d1.toString() }, ' ___ ', { numerator: n2.toString(), denominator: d2.toString() }],
        answer: v1 > v2 ? '>' : v1 < v2 ? '<' : '='
      };
    }
    default:
      return { question: ['1/2 + 1/2 ='], answer: '1' };
  }
};
