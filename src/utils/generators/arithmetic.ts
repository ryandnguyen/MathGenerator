import { type Grade, getRandomInt } from './base';

export type ArithmeticOperation = 'Addition' | 'Subtraction' | 'Multiplication' | 'Division' | 'Exponents' | 'Expanded Form';

export const generateArithmetic = (
  grade: Grade,
  operation: ArithmeticOperation,
  useDecimals: boolean
): { question: string; answer: string | number } => {
  let q = '';
  let a: string | number = 0;

  const getNum = (min: number, max: number) => {
    if (useDecimals) {
      return parseFloat((Math.random() * (max - min) + min).toFixed(2));
    }
    return getRandomInt(min, max);
  };

  const formatRes = (val: number) => parseFloat(val.toFixed(2));

  if (operation === 'Expanded Form') {
    // Expanded Form (Hundreds, Tens, Ones)
    const maxVal = (grade === 'Pre-K' || grade === 'K') ? 20 : (grade === '1st' ? 100 : 999);
    const minVal = (grade === 'Pre-K' || grade === 'K') ? 1 : 10;
    
    const val = getRandomInt(minVal, maxVal);
    const hundreds = Math.floor(val / 100);
    const tens = Math.floor((val % 100) / 10);
    const ones = val % 10;
    
    const rawParts: number[] = [];
    if (hundreds > 0) rawParts.push(hundreds * 100);
    if (tens > 0 || hundreds > 0) rawParts.push(tens * 10);
    rawParts.push(ones);

    const type = getRandomInt(0, 1);
    
    if (type === 0) {
      // Hide the total value: ___ = 500 + 40 + 4
      q = `___ = ${rawParts.join(' + ')}`;
    } else {
      // Hide parts of the expansion: 544 = 500 + ___ + 4
      const numToHide = getRandomInt(1, rawParts.length);
      const indicesToHide = new Set<number>();
      while (indicesToHide.size < numToHide) {
        indicesToHide.add(getRandomInt(0, rawParts.length - 1));
      }
      const qParts = rawParts.map((p, idx) => indicesToHide.has(idx) ? '___' : p);
      q = `${val} = ${qParts.join(' + ')}`;
    }
    
    a = `${val} = ${rawParts.join(' + ')}`;
    return { question: q, answer: a };
  }

  switch (grade) {
    case 'Pre-K': {
      const max = 5;
      if (operation === 'Subtraction') {
        const v1 = getNum(1, max);
        const v2 = getNum(0, v1);
        q = `${v1} - ${v2} =`;
        a = formatRes(v1 - v2);
      } else if (operation === 'Multiplication') {
        const v1 = getNum(0, 2);
        const v2 = getNum(0, 5);
        q = `${v1} × ${v2} =`;
        a = formatRes(v1 * v2);
      } else if (operation === 'Division') {
        const v2 = getNum(1, 2);
        const res = getNum(0, 3);
        const v1 = v2 * res;
        q = `${v1} ÷ ${v2} =`;
        a = res;
      } else if (operation === 'Exponents') {
        const v1 = getNum(1, 3);
        q = `${v1}¹ =`;
        a = v1;
      } else {
        const v1 = getNum(0, max);
        const v2 = getNum(0, max - v1);
        q = `${v1} + ${v2} =`;
        a = formatRes(v1 + v2);
      }
      break;
    }
    case 'K': {
      const max = 10;
      if (operation === 'Subtraction') {
        const v1 = getNum(1, max);
        const v2 = getNum(0, v1);
        q = `${v1} - ${v2} =`;
        a = formatRes(v1 - v2);
      } else if (operation === 'Multiplication') {
        const v1 = getNum(0, 5);
        const v2 = getNum(0, 2);
        q = `${v1} × ${v2} =`;
        a = formatRes(v1 * v2);
      } else if (operation === 'Division') {
        const v2 = getNum(1, 5);
        const res = getNum(0, 2);
        const v1 = v2 * res;
        q = `${v1} ÷ ${v2} =`;
        a = res;
      } else if (operation === 'Exponents') {
        const v1 = getNum(1, 5);
        q = `${v1}¹ =`;
        a = v1;
      } else {
        const v1 = getNum(0, max);
        const v2 = getNum(0, max - v1);
        q = `${v1} + ${v2} =`;
        a = formatRes(v1 + v2);
      }
      break;
    }
    case '1st': {
      const max = 20;
      if (operation === 'Subtraction') {
        const v1 = getNum(1, max);
        const v2 = getNum(0, v1);
        q = `${v1} - ${v2} =`;
        a = formatRes(v1 - v2);
      } else if (operation === 'Multiplication') {
        const v1 = getNum(0, 10);
        const v2 = getNum(0, 2);
        q = `${v1} × ${v2} =`;
        a = formatRes(v1 * v2);
      } else if (operation === 'Division') {
        const v2 = getNum(1, 5);
        const res = getNum(0, 5);
        const v1 = v2 * res;
        q = `${v1} ÷ ${v2} =`;
        a = res;
      } else if (operation === 'Exponents') {
        const v1 = getNum(1, 10);
        const exp = getRandomInt(0, 1);
        q = `${v1}${exp === 0 ? '⁰' : '¹'} =`;
        a = exp === 0 ? 1 : v1;
      } else {
        const v1 = getNum(0, max);
        const v2 = getNum(0, max - v1);
        q = `${v1} + ${v2} =`;
        a = formatRes(v1 + v2);
      }
      break;
    }
    case '2nd': {
      const max = 100;
      if (operation === 'Subtraction') {
        const v1 = getNum(1, max);
        const v2 = getNum(0, v1);
        q = `${v1} - ${v2} =`;
        a = formatRes(v1 - v2);
      } else if (operation === 'Multiplication') {
        const v1 = getNum(0, 10);
        const v2 = getNum(0, 5);
        q = `${v1} × ${v2} =`;
        a = formatRes(v1 * v2);
      } else if (operation === 'Division') {
        const v2 = getNum(1, 10);
        const res = getNum(0, 5);
        const v1 = v2 * res;
        q = `${v1} ÷ ${v2} =`;
        a = res;
      } else if (operation === 'Exponents') {
        const v1 = getNum(1, 5);
        q = `${v1}² =`;
        a = v1 * v1;
      } else {
        const v1 = getNum(0, max);
        const v2 = getNum(0, max - v1);
        q = `${v1} + ${v2} =`;
        a = formatRes(v1 + v2);
      }
      break;
    }
    case '3rd': {
      if (operation === 'Multiplication') {
        const v1 = getNum(0, 10);
        const v2 = getNum(0, 10);
        q = `${v1} × ${v2} =`;
        a = formatRes(v1 * v2);
      } else if (operation === 'Division') {
        const v2 = getNum(1, 10);
        const res = getNum(0, 10);
        const v1 = formatRes(v2 * res);
        q = `${v1} ÷ ${v2} =`;
        a = res;
      } else if (operation === 'Exponents') {
        const v1 = getNum(1, 10);
        q = `${v1}² =`;
        a = v1 * v1;
      } else {
        const v1 = getNum(0, 1000);
        const v2 = getNum(0, 1000);
        if (operation === 'Addition') {
          q = `${v1} + ${v2} =`;
          a = formatRes(v1 + v2);
        } else {
          const maxVal = Math.max(v1, v2);
          const minVal = Math.min(v1, v2);
          q = `${maxVal} - ${minVal} =`;
          a = formatRes(maxVal - minVal);
        }
      }
      break;
    }
    case '4th': {
      if (operation === 'Multiplication') {
        const v1 = getNum(10, 100);
        const v2 = getNum(2, 9);
        q = `${v1} × ${v2} =`;
        a = formatRes(v1 * v2);
      } else if (operation === 'Division') {
        const v1 = getNum(100, 1000);
        const v2 = getNum(2, 9);
        q = `${v1} ÷ ${v2} =`;
        if (useDecimals) {
          a = formatRes(v1 / v2);
        } else {
          a = Math.floor(v1 / v2) + (v1 % v2 !== 0 ? ` R ${v1 % v2}` : '');
        }
      } else if (operation === 'Exponents') {
        const v1 = getNum(1, 12);
        q = `${v1}² =`;
        a = v1 * v1;
      } else {
        const v1 = getNum(1000, 10000);
        const v2 = getNum(1000, 10000);
        if (operation === 'Addition') {
          q = `${v1} + ${v2} =`;
          a = formatRes(v1 + v2);
        } else {
          const maxVal = Math.max(v1, v2);
          const minVal = Math.min(v1, v2);
          q = `${maxVal} - ${minVal} =`;
          a = formatRes(maxVal - minVal);
        }
      }
      break;
    }
    case '5th': {
      if (operation === 'Exponents') {
        const v1 = getNum(1, 10);
        const exp = getRandomInt(2, 3);
        q = `${v1}${exp === 2 ? '²' : '³'} =`;
        a = Math.pow(v1, exp);
      } else {
        const v1 = getNum(2, 10);
        const v2 = getNum(2, 10);
        const v3 = getNum(2, 10);
        const ops = ['+', '-', '×'];
        const op1 = ops[getRandomInt(0, 2)];
        const op2 = ops[getRandomInt(0, 2)];
        q = `(${v1} ${op1} ${v2}) ${op2} ${v3} =`;
        let subRes = 0;
        if (op1 === '+') subRes = v1 + v2;
        else if (op1 === '-') subRes = v1 - v2;
        else subRes = v1 * v2;
        if (op2 === '+') a = subRes + v3;
        else if (op2 === '-') a = subRes - v3;
        else a = subRes * v3;
      }
      if (typeof a === 'number') a = formatRes(a);
      break;
    }
    case '6th': {
      if (operation === 'Exponents') {
        const v1 = getNum(2, 10);
        const exp = getRandomInt(2, 4);
        const superscriptMap: Record<number, string> = { 2: '²', 3: '³', 4: '⁴' };
        q = `${v1}${superscriptMap[exp]} =`;
        a = Math.pow(v1, exp);
      } else {
        const type = getRandomInt(0, 2);
        if (type === 0) {
          const v1 = getNum(1, 20);
          const v2 = getNum(v1 + 1, v1 + 20);
          q = `x + ${v1} = ${v2}, x =`;
          a = formatRes(v2 - v1);
        } else if (type === 1) {
          const p = getRandomInt(1, 100);
          const v1 = getNum(10, 500);
          q = `${p}% of ${v1} =`;
          a = formatRes((p / 100) * v1);
        } else {
          const v1 = getRandomInt(2, 12);
          const v2 = getNum(1, 50);
          q = `${v1}² + ${v2} =`;
          a = formatRes(v1 * v1 + v2);
        }
      }
      if (typeof a === 'number') a = formatRes(a);
      break;
    }
    default:
      q = '1 + 1 =';
      a = 2;
  }

  return { question: q, answer: a };
};
