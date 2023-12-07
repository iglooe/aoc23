import { readData } from '../../shared.ts';
import chalk from 'chalk';

const maxCount = {
  red: 12,
  green: 13,
  blue: 14,
};

export async function day2a(dataPath?: string) {
  const data = await readData(dataPath);
  console.log(data);

  return data
    .map((line) => {
      return line
        .split(': ')[1]
        .split(';')
        .map((set) => {
          const pulls = set.trim().split(', ');
          console.log(pulls);
          return pulls.every((pull) => {
            const [count, color] = pull.split(' ');
            return maxCount[color] >= Number(count);
          });
        })
        .every((p) => p);
    })
    .reduce((s, result, i) => {
      return result ? s + (i + 1) : s;
    }, 0);
}

const answer = await day2a();
console.log(chalk.bgGreen('Your Answer:'), chalk.green(answer));
