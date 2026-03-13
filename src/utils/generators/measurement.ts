import { getRandomInt } from './base';

export type MeasurementOperation = 'Money: Count' | 'Money: Change' | 'Time: Telling' | 'Time: Elapsed' | 'Units: Length' | 'Units: Weight';

export const generateMeasurement = (
  operation: MeasurementOperation
): { question: string; answer: string | number } => {
  const formatRes = (val: number) => parseFloat(val.toFixed(2));

  switch (operation) {
    case 'Money: Count': {
      const quarters = getRandomInt(0, 4);
      const dimes = getRandomInt(0, 5);
      const nickels = getRandomInt(0, 5);
      const pennies = getRandomInt(0, 9);
      const total = formatRes(quarters * 0.25 + dimes * 0.10 + nickels * 0.05 + pennies * 0.01);
      return {
        question: `How much is ${quarters} quarters, ${dimes} dimes, ${nickels} nickels, and ${pennies} pennies?`,
        answer: `$${total.toFixed(2)}`
      };
    }
    case 'Money: Change': {
      const cost = formatRes(getRandomInt(1, 15) + Math.random());
      const paid = Math.ceil(cost / 5) * 5;
      return {
        question: `An item costs $${cost.toFixed(2)}. You pay $${paid.toFixed(2)}. How much change do you get?`,
        answer: `$${formatRes(paid - cost).toFixed(2)}`
      };
    }
    case 'Time: Telling': {
      const hours = getRandomInt(1, 12);
      const minutes = getRandomInt(0, 11) * 5;
      return {
        question: `What time is it when the hour hand is near ${hours} and the minute hand is at ${minutes / 5}?`,
        answer: `${hours}:${minutes.toString().padStart(2, '0')}`
      };
    }
    case 'Time: Elapsed': {
      const h1 = getRandomInt(1, 5);
      const m1 = getRandomInt(0, 5) * 10;
      const h2 = h1 + getRandomInt(1, 3);
      const m2 = getRandomInt(0, 5) * 10;
      const totalMin = (h2 * 60 + m2) - (h1 * 60 + m1);
      const diffH = Math.floor(totalMin / 60);
      const diffM = totalMin % 60;
      return {
        question: `How much time has passed between ${h1}:${m1.toString().padStart(2, '0')} and ${h2}:${m2.toString().padStart(2, '0')}?`,
        answer: `${diffH}h ${diffM}m`
      };
    }
    case 'Units: Length': {
      const inches = getRandomInt(1, 5) * 12;
      return {
        question: `Convert ${inches} inches to feet.`,
        answer: `${inches / 12} ft`
      };
    }
    case 'Units: Weight': {
      const pounds = getRandomInt(1, 5);
      return {
        question: `Convert ${pounds} pounds to ounces (1lb = 16oz).`,
        answer: `${pounds * 16} oz`
      };
    }
    default:
      return { question: '1 ft = ___ inches', answer: '12' };
  }
};
