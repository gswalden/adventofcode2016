const fs = require('fs');
const input = fs.readFileSync('./day2_input.txt', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .map(item => {
    return item.split('');
  });

function part1() {
  const grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

  let x = 1;
  let y = 1;
  let code = '';

  for (const item of input) {
    for (const char of item) {
      switch (char) {
        case 'U':
          y = Math.max(0, y - 1);
          break;
        case 'D':
          y = Math.min(2, y + 1);
          break;
        case 'L':
          x = Math.max(0, x - 1);
          break;
        case 'R':
          x = Math.min(2, x + 1);
          break;
      }
    }
    code += grid[y][x].toString();
  }
  return code;
}

function part2() {
  const grid = [
    [null, null, 1, null, null],
    [null,    2, 3,    4, null],
    [   5,    6, 7,    8, 9],
    [null, 'A', 'B', 'C', null],
    [null, null,'D', null, null],
  ];

  let x = 0;
  let y = 2;
  let code = '';

  for (const item of input) {
    for (const char of item) {
      const prevX = x;
      const prevY = y;
      switch (char) {
        case 'U':
          y = Math.max(0, y - 1);
          break;
        case 'D':
          y = Math.min(4, y + 1);
          break;
        case 'L':
          x = Math.max(0, x - 1);
          break;
        case 'R':
          x = Math.min(4, x + 1);
          break;
      }
      if (grid[y][x] == null) {
        x = prevX;
        y = prevY;
      }
    }
    code += grid[y][x].toString();
  }
  return code;
}

console.log('Part 1: %s', part1());
console.log('Part 2: %s', part2());
