import { type Grade, getRandomInt } from './base';

export type LearningOperation = 'Counting' | 'Patterns' | 'Comparison';

const EMOJIS = ['🍎', '🐶', '🐱', '🚗', '⭐️', '🍦', '⚽️', '🧸', '🎈', '🍪'];

export const generateLearning = (
  grade: Grade,
  operation: LearningOperation
): { question: any[]; answer: string | number } => {
  const emoji = EMOJIS[getRandomInt(0, EMOJIS.length - 1)];

  switch (operation) {
    case 'Counting': {
      const count = grade === 'Pre-K' ? getRandomInt(1, 5) : getRandomInt(1, 10);
      return {
        question: ['How many icons are here? ', { type: 'icons', value: { icon: emoji, count } }],
        answer: count
      };
    }
    case 'Patterns': {
      const e1 = EMOJIS[getRandomInt(0, 4)];
      const e2 = EMOJIS[getRandomInt(5, 9)];
      // ABAB pattern
      const pattern = [e1, e2, e1, e2, e1];
      return {
        question: ['What comes next in the pattern? ', { type: 'pattern', value: pattern }],
        answer: e2
      };
    }
    case 'Comparison': {
      const n1 = getRandomInt(1, 10);
      const n2 = getRandomInt(1, 10);
      const e1 = EMOJIS[getRandomInt(0, 4)];
      const e2 = EMOJIS[getRandomInt(5, 9)];
      return {
        question: [
          'Which box has more icons? ',
          { type: 'icons', value: { icon: e1, count: n1 } },
          ' OR ',
          { type: 'icons', value: { icon: e2, count: n2 } }
        ],
        answer: n1 > n2 ? 'First Box' : n1 < n2 ? 'Second Box' : 'Both Same'
      };
    }
    default:
      return { question: ['Count the apples: 🍎🍎'], answer: 2 };
  }
};
