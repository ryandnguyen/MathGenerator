import { getRandomInt } from './base';

export type GeometryOperation = 'Perimeter: Rect' | 'Area: Rect' | 'Perimeter: Square' | 'Area: Square' | 'Volume: Rect Prism' | 'Shapes: Faces';

export const generateGeometry = (
  operation: GeometryOperation
): { question: string; answer: string | number } => {
  switch (operation) {
    case 'Perimeter: Rect': {
      const l = getRandomInt(2, 12);
      const w = getRandomInt(2, 12);
      return {
        question: `Find the perimeter of a rectangle with length ${l} and width ${w}.`,
        answer: `${2 * (l + w)} units`
      };
    }
    case 'Area: Rect': {
      const l = getRandomInt(2, 12);
      const w = getRandomInt(2, 12);
      return {
        question: `Find the area of a rectangle with length ${l} and width ${w}.`,
        answer: `${l * w} sq units`
      };
    }
    case 'Perimeter: Square': {
      const s = getRandomInt(2, 12);
      return {
        question: `Find the perimeter of a square with side length ${s}.`,
        answer: `${4 * s} units`
      };
    }
    case 'Area: Square': {
      const s = getRandomInt(2, 12);
      return {
        question: `Find the area of a square with side length ${s}.`,
        answer: `${s * s} sq units`
      };
    }
    case 'Volume: Rect Prism': {
      const l = getRandomInt(2, 5);
      const w = getRandomInt(2, 5);
      const h = getRandomInt(2, 5);
      return {
        question: `Find the volume of a rectangular prism with l=${l}, w=${w}, h=${h}.`,
        answer: `${l * w * h} cubic units`
      };
    }
    case 'Shapes: Faces': {
      const shapes = [
        { name: 'cube', faces: 6 },
        { name: 'rectangular prism', faces: 6 },
        { name: 'triangular pyramid', faces: 4 },
        { name: 'square pyramid', faces: 5 }
      ];
      const s = shapes[getRandomInt(0, shapes.length - 1)];
      return {
        question: `How many faces does a ${s.name} have?`,
        answer: s.faces
      };
    }
    default:
      return { question: 'Find the perimeter of a square with side 5.', answer: '20' };
  }
};
