import { readData } from '../../shared.ts';
import chalk from 'chalk';

const wordToDigit = {
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9',
};

export async function day1b(dataPath?: string) {
  const data = await readData(dataPath);

  const values = data.map((line) => {
    console.log(line);

    // Replace spelled-out words with digits
    line = line.replace(
      /one|two|three|four|five|six|seven|eight|nine/g,
      (match) => wordToDigit[match]
    );

    // Find the first digit
    let first = line.match(/\d/);

    // Find the last digit
    let last = line.match(/\d(?=\D*$)/);

    if (first && last) {
      console.log(Number(first[0] + last[0]));
      return Number(first[0] + last[0]);
    } else {
      return 0; // Handle cases where no digits are found
    }
  });

  console.log(values);
  return values.reduce((a, b) => a + b);
}

const answer = await day1b();
console.log(chalk.bgGreen('Your Answer:'), chalk.green(answer));
