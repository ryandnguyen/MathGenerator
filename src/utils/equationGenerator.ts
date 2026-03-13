export type Grade = 'Pre-K' | 'K' | '1st' | '2nd' | '3rd' | '4th' | '5th' | '6th';
export type Operation = 'Addition' | 'Subtraction' | 'Multiplication' | 'Division' | 'Exponents';

export interface Equation {
  id: string;
  question: string;
  answer: string | number;
}

const getRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const generateEquations = (grade: Grade, operation: Operation, count: number, useDecimals: boolean = false): Equation[] => {
  const equations: Equation[] = [];

  for (let i = 0; i < count; i++) {
    let q = '';
    let a: string | number = 0;

    const getNum = (min: number, max: number) => {
      if (useDecimals) {
        return parseFloat((Math.random() * (max - min) + min).toFixed(3));
      }
      return getRandomInt(min, max);
    };

    switch (grade) {
      case 'Pre-K': {
        const max = 5;
        if (operation === 'Subtraction') {
          const v1 = getNum(1, max);
          const v2 = getNum(0, v1);
          q = `${v1} - ${v2} =`;
          a = parseFloat((v1 - v2).toFixed(3));
        } else if (operation === 'Multiplication') {
          const v1 = getNum(0, 2);
          const v2 = getNum(0, 5);
          q = `${v1} × ${v2} =`;
          a = parseFloat((v1 * v2).toFixed(3));
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
          // Default to Addition
          const v1 = getNum(0, max);
          const v2 = getNum(0, max - v1);
          q = `${v1} + ${v2} =`;
          a = parseFloat((v1 + v2).toFixed(3));
        }
        break;
      }
      case 'K': {
        const max = 10;
        if (operation === 'Subtraction') {
          const v1 = getNum(1, max);
          const v2 = getNum(0, v1);
          q = `${v1} - ${v2} =`;
          a = parseFloat((v1 - v2).toFixed(3));
        } else if (operation === 'Multiplication') {
          const v1 = getNum(0, 5);
          const v2 = getNum(0, 2);
          q = `${v1} × ${v2} =`;
          a = parseFloat((v1 * v2).toFixed(3));
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
          // Default to Addition
          const v1 = getNum(0, max);
          const v2 = getNum(0, max - v1);
          q = `${v1} + ${v2} =`;
          a = parseFloat((v1 + v2).toFixed(3));
        }
        break;
      }
      case '1st': {
        const max = 20;
        if (operation === 'Subtraction') {
          const v1 = getNum(1, max);
          const v2 = getNum(0, v1);
          q = `${v1} - ${v2} =`;
          a = parseFloat((v1 - v2).toFixed(3));
        } else if (operation === 'Multiplication') {
          const v1 = getNum(0, 10);
          const v2 = getNum(0, 2);
          q = `${v1} × ${v2} =`;
          a = parseFloat((v1 * v2).toFixed(3));
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
          // Default to Addition
          const v1 = getNum(0, max);
          const v2 = getNum(0, max - v1);
          q = `${v1} + ${v2} =`;
          a = parseFloat((v1 + v2).toFixed(3));
        }
        break;
      }
      case '2nd': {
        const max = 100;
        if (operation === 'Subtraction') {
          const v1 = getNum(1, max);
          const v2 = getNum(0, v1);
          q = `${v1} - ${v2} =`;
          a = parseFloat((v1 - v2).toFixed(3));
        } else if (operation === 'Multiplication') {
          const v1 = getNum(0, 10);
          const v2 = getNum(0, 5);
          q = `${v1} × ${v2} =`;
          a = parseFloat((v1 * v2).toFixed(3));
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
          // Default to Addition
          const v1 = getNum(0, max);
          const v2 = getNum(0, max - v1);
          q = `${v1} + ${v2} =`;
          a = parseFloat((v1 + v2).toFixed(3));
        }
        break;
      }
      case '3rd': {
        if (operation === 'Multiplication') {
          const v1 = getNum(0, 10);
          const v2 = getNum(0, 10);
          q = `${v1} × ${v2} =`;
          a = parseFloat((v1 * v2).toFixed(3));
        } else if (operation === 'Division') {
          const v2 = getNum(1, 10);
          const res = getNum(0, 10);
          const v1 = parseFloat((v2 * res).toFixed(3));
          q = `${v1} ÷ ${v2} =`;
          a = res;
        } else if (operation === 'Exponents') {
          const v1 = getNum(1, 10);
          q = `${v1}² =`;
          a = v1 * v1;
        } else {
            // Default for 3rd grade if addition/subtraction selected
            const v1 = getNum(0, 1000);
            const v2 = getNum(0, 1000);
            if (operation === 'Addition') {
                q = `${v1} + ${v2} =`;
                a = parseFloat((v1 + v2).toFixed(3));
            } else {
                const maxVal = Math.max(v1, v2);
                const minVal = Math.min(v1, v2);
                q = `${maxVal} - ${minVal} =`;
                a = parseFloat((maxVal - minVal).toFixed(3));
            }
        }
        break;
      }
      case '4th': {
        if (operation === 'Multiplication') {
            const v1 = getNum(10, 100);
            const v2 = getNum(2, 9);
            q = `${v1} × ${v2} =`;
            a = parseFloat((v1 * v2).toFixed(3));
        } else if (operation === 'Division') {
            const v1 = getNum(100, 1000);
            const v2 = getNum(2, 9);
            q = `${v1} ÷ ${v2} =`;
            if (useDecimals) {
                a = parseFloat((v1 / v2).toFixed(3));
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
                a = parseFloat((v1 + v2).toFixed(3));
            } else {
                const maxVal = Math.max(v1, v2);
                const minVal = Math.min(v1, v2);
                q = `${maxVal} - ${minVal} =`;
                a = parseFloat((maxVal - minVal).toFixed(3));
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
            // Simple order of operations
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

          a = parseFloat(a.toFixed(3));
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
            // Ratios, percentages, or simple algebra
            const type = getRandomInt(0, 2);
            if (type === 0) {
                // Simple algebra: x + v1 = v2
                const v1 = getNum(1, 20);
                const v2 = getNum(v1 + 1, v1 + 20);
                q = `x + ${v1} = ${v2}, x =`;
                a = parseFloat((v2 - v1).toFixed(3));
            } else if (type === 1) {
                // Ratios/Percentages: What is p% of v1?
                const p = getRandomInt(1, 100);
                const v1 = getNum(10, 500);
                q = `${p}% of ${v1} =`;
                a = parseFloat(((p / 100) * v1).toFixed(3));
            } else {
                // Exponents/Order of operations: v1^2 + v2
                const v1 = getRandomInt(2, 12);
                const v2 = getNum(1, 50);
                q = `${v1}² + ${v2} =`;
                a = parseFloat((v1 * v1 + v2).toFixed(3));
            }
          }
          break;
      }
      default:
        q = '1 + 1 =';
        a = 2;
    }

    if (typeof a === 'number') {
      a = parseFloat(a.toFixed(3));
    }

    equations.push({
      id: `${grade}-${i}-${Date.now()}`,
      question: q,
      answer: a
    });
  }

  return equations;
};
