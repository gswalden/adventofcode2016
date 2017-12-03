const fs = require('fs');
const input = fs.readFileSync('./day3_input.txt', { encoding: 'utf8' })
  .trim()
  .split('\n');

function part1() {
  const input1 = input.map(item => {
    return item.trim().split(/\s+/).map(Number).sort((a, b) => b - a);
  });
  let sum = 0;
  for (const item of input1) {
    if (item[0] < (item[1] + item[2])) {
      sum++;
    }
  }
  return sum;
}

function part2() {
  const input2 = input.map(item => {
      return item.trim().split(/\s+/).map(Number);
    })
    .reduce((result, item) => {
      result[0].push(item[0]);
      result[1].push(item[1]);
      result[2].push(item[2]);
      return result;
    }, [ [], [], [] ])
    .reduce((result, item) => {
      return result.concat(item);
    }, []);

    let result = [];
    while (input2.length) {
      const item = [
        input2.shift(),
        input2.shift(),
        input2.shift()
      ];
      result.push(item.sort((a, b) => b - a));
    }

    let sum = 0;
    for (const item of result) {
      if (item[0] < (item[1] + item[2])) {
        sum++;
      }
    }
    return sum;
}

console.log('Part 1: %d', part1());
console.log('Part 2: %d', part2());
