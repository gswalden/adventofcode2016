const fs = require('fs');
const input = fs.readFileSync('./day6_input.txt', { encoding: 'utf8' }).trim()
  .split('\n');


function part1() {
  const counters = Array(input[0].length).fill(null).map(() => ({}));
  for (const line of input) {
    let i = 0;
    while (i < line.length) {
      const char = line.charAt(i);
      counters[i][char] = (counters[i][char] || 0) + 1;
      i++;
    }
  }

  let result = '';
  for (const c of counters) {
    let max = 0;
    let char = null;
    for (const letter in c) {
      if (c[letter] > max) {
        max = c[letter];
        char = letter;
      }
    }
    result += char;
  }
  return result;
}

function part2() {
  const counters = Array(input[0].length).fill(null).map(() => ({}));
  for (const line of input) {
    let i = 0;
    while (i < line.length) {
      const char = line.charAt(i);
      counters[i][char] = (counters[i][char] || 0) + 1;
      i++;
    }
  }

  let result = '';
  for (const c of counters) {
    let min = Infinity;
    let char = null;
    for (const letter in c) {
      if (c[letter] < min) {
        min = c[letter];
        char = letter;
      }
    }
    result += char;
  }
  return result;
}

console.log('Part 1: %s', part1());
console.log('Part 2: %s', part2());
