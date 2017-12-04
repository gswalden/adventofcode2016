const fs = require('fs');
const input = fs.readFileSync('./day4_input.txt', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .map(line => {
    const parts = line.trim().split('-');
    const end = parts.pop();
    const result = count(parts.join(''));
    if (result.startsWith(end.match(/[a-z]+/)[0])) {
      return [Number(end.match(/\d+/)[0]), parts, Number(end.match(/\d+/)[0])];
    }
    return [0];
  })

const part1 = input.reduce((sum, i) => {
  return sum + i[0];
}, 0);

const part2 = input.filter(line => line[0])
  .map(line => {
    const result = line[1].map(word => {
      return word.split('').map(letter => {
        const remainder = line[2] % 26;
        let code = letter.charCodeAt(0) + remainder;
        if (code > 122) code -= 26;
        return String.fromCharCode(code);
      }).join('')
    });
    return `${result.join(' ')} (${line[2]})`;
  })

function count(letters) {
  const result = {};
  for (let i = 0; i < letters.length; i++) {
    const letter = letters.charAt(i);
    if (!result[letter]) result[letter] = 0;
    result[letter]++;
  }
  let counts = [];
  for (const letter in result) {
    counts.push(`${result[letter]}${letter}`);
  }
  const map = new Map();
  counts = counts.sort().reverse().map((item) => {
    const num = item.charAt(0);
    const letter = item.charAt(1);
    if (!map.has(num)) {
      map.set(num, []);
    }
    map.get(num).push(letter);
  }, {});
  let final = '';
  map.forEach((val, key) => {
    final += val.sort().join('');
  });
  return final;
}

console.log('Part 1: %d', part1);
console.log('Part 2: %d', part2.find(val => val.includes('north')).match(/\d+/)[0])
