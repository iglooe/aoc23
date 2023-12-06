import { readData } from '../../shared.ts';
import chalk from 'chalk';

export async function day1a(dataPath?: string) {
  const data = await readData(dataPath);

  const values = data.map((line) => {
    console.log(line);
    let first = line.split('').find((v) => !Number.isNaN(Number(v)));
    // let last = line.split('').findLast((v) => !Number.isNaN(Number(v)));
    let last = line.split('').findLast((v) => Number(v));

    console.log(Number(first + last));
    return Number(first + last);
  });

  console.log(values);
  return values.reduce((a, b) => a + b);
}

const answer = await day1a();
console.log(chalk.bgGreen('Your Answer:'), chalk.green(answer));
