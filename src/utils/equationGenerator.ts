export type Grade = 'Pre-K' | 'K' | '1st' | '2nd' | '3rd' | '4th' | '5th';
export type Operation = 'Addition' | 'Subtraction' | 'Multiplication' | 'Division';

export interface Equation {
  id: string;
  question: string;
  answer: string | number;
}

const getRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const generateEquations = (grade: Grade, operation: Operation, count: number): Equation[] => {
  const equations: Equation[] = [];

  for (let i = 0; i < count; i++) {
    let q = '';
    let a: string | number = 0;

    switch (grade) {
      case 'Pre-K': {
        const max = 5;
        if (operation === 'Addition') {
          const v1 = getRandomInt(0, max);
          const v2 = getRandomInt(0, max - v1);
          q = `${v1} + ${v2} =`;
          a = v1 + v2;
        } else {
          const v1 = getRandomInt(1, max);
          const v2 = getRandomInt(0, v1);
          q = `${v1} - ${v2} =`;
          a = v1 - v2;
        }
        break;
      }
      case 'K': {
        const max = 10;
        if (operation === 'Addition') {
          const v1 = getRandomInt(0, max);
          const v2 = getRandomInt(0, max - v1);
          q = `${v1} + ${v2} =`;
          a = v1 + v2;
        } else {
          const v1 = getRandomInt(1, max);
          const v2 = getRandomInt(0, v1);
          q = `${v1} - ${v2} =`;
          a = v1 - v2;
        }
        break;
      }
      case '1st': {
        const max = 20;
        if (operation === 'Addition') {
          const v1 = getRandomInt(0, max);
          const v2 = getRandomInt(0, max - v1);
          q = `${v1} + ${v2} =`;
          a = v1 + v2;
        } else {
          const v1 = getRandomInt(1, max);
          const v2 = getRandomInt(0, v1);
          q = `${v1} - ${v2} =`;
          a = v1 - v2;
        }
        break;
      }
      case '2nd': {
        const max = 100;
        if (operation === 'Addition') {
          const v1 = getRandomInt(0, max);
          const v2 = getRandomInt(0, max - v1);
          q = `${v1} + ${v2} =`;
          a = v1 + v2;
        } else {
          const v1 = getRandomInt(1, max);
          const v2 = getRandomInt(0, v1);
          q = `${v1} - ${v2} =`;
          a = v1 - v2;
        }
        break;
      }
      case '3rd': {
        if (operation === 'Multiplication') {
          const v1 = getRandomInt(0, 10);
          const v2 = getRandomInt(0, 10);
          q = `${v1} × ${v2} =`;
          a = v1 * v2;
        } else if (operation === 'Division') {
          const v2 = getRandomInt(1, 10);
          const res = getRandomInt(0, 10);
          const v1 = v2 * res;
          q = `${v1} ÷ ${v2} =`;
          a = res;
        } else {
            // Default for 3rd grade if addition/subtraction selected
            const v1 = getRandomInt(0, 1000);
            const v2 = getRandomInt(0, 1000);
            if (operation === 'Addition') {
                q = `${v1} + ${v2} =`;
                a = v1 + v2;
            } else {
                const maxVal = Math.max(v1, v2);
                const minVal = Math.min(v1, v2);
                q = `${maxVal} - ${minVal} =`;
                a = maxVal - minVal;
            }
        }
        break;
      }
      case '4th': {
        if (operation === 'Multiplication') {
            const v1 = getRandomInt(10, 100);
            const v2 = getRandomInt(2, 9);
            q = `${v1} × ${v2} =`;
            a = v1 * v2;
        } else if (operation === 'Division') {
            const v1 = getRandomInt(100, 1000);
            const v2 = getRandomInt(2, 9);
            q = `${v1} ÷ ${v2} =`;
            a = Math.floor(v1 / v2) + (v1 % v2 !== 0 ? ` R ${v1 % v2}` : '');
        } else {
            const v1 = getRandomInt(1000, 10000);
            const v2 = getRandomInt(1000, 10000);
            if (operation === 'Addition') {
                q = `${v1} + ${v2} =`;
                a = v1 + v2;
            } else {
                const maxVal = Math.max(v1, v2);
                const minVal = Math.min(v1, v2);
                q = `${maxVal} - ${minVal} =`;
                a = maxVal - minVal;
            }
        }
        break;
      }
      case '5th': {
          // Simple order of operations
          const v1 = getRandomInt(2, 10);
          const v2 = getRandomInt(2, 10);
          const v3 = getRandomInt(2, 10);
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
          break;
      }
      default:
        q = '1 + 1 =';
        a = 2;
    }

    equations.push({
      id: `${grade}-${i}-${Date.now()}`,
      question: q,
      answer: a
    });
  }

  return equations;
};
