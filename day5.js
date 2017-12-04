const fs = require('fs');
const input = fs.readFileSync('./day5_input.txt', { encoding: 'utf8' }).trim();

const crypto = require('crypto');

function part1() {
  let result = '';
  let i = 0;
  while (result.length < 8) {
    const hash = crypto.createHash('md5').update(input + i++).digest("hex");
    if (hash.startsWith('00000')) result += hash.charAt(5);
  }
  return result;
}

function part2() {
  let result = Array(8).fill(null);
  let i = 0;
  while (result.some(val => val === null)) {
    const hash = crypto.createHash('md5').update(input + i++).digest("hex");
    if (hash.startsWith('00000')) {
      const index = Number(hash.charAt(5));
      if (index <= 7 && !result[index]) {
        result[index] = hash.charAt(6);
      }
    }
  }
  return result.join('');
}

console.log('Part 1: %s', part1());
console.log('Part 2: %s', part2());
