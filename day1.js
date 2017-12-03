const fs = require('fs');
const input = fs.readFileSync('./day1_input.txt', { encoding: 'utf8' })
  .trim()
  .split(/[,\s]+/)
  .map(item => {
    return [item.charAt(0), Number(item.substr(1))]
  });

function part1() {
  const dirs = [
    'up',
    'right',
    'down',
    'left'
  ];
  let dir = 'up';
  const pos = [0, 0];
  for (const item of input) {
    let i = dirs.indexOf(dir);
    if (item[0] == 'L') {
      i--;
      if (i < 0) i = dirs.length - 1;
    } else {
      i++;
      if (i >= dirs.length) i = 0;
    }
    dir = dirs[i];
    switch (dir) {
      case 'up':
        pos[1] += item[1];
        break;
      case 'left':
        pos[0] -= item[1];
        break;
      case 'right':
        pos[0] += item[1];
        break;
      case 'down':
        pos[1] -= item[1];
        break;
    }
  }
  return Math.abs(pos[0]) + Math.abs(pos[1]);
}

function part2() {
  const dirs = [
    'up',
    'right',
    'down',
    'left'
  ];
  let dir = 'up';
  const visited = new Set(['0,0']);
  const pos = [0, 0];
  for (const item of input) {
    let i = dirs.indexOf(dir);
    if (item[0] == 'L') {
      i--;
      if (i < 0) i = dirs.length - 1;
    } else {
      i++;
      if (i >= dirs.length) i = 0;
    }
    dir = dirs[i];
    let k = 1;

    while (k++ <= item[1]) {
      move();
      const loc = pos.join(',');
      if (visited.has(loc)) {
        return Math.abs(pos[0]) + Math.abs(pos[1]);
      }
      visited.add(loc);
    }

    function move() {
      switch (dir) {
        case 'up':
          pos[1]++;
          break;
        case 'down':
          pos[1]--;
          break;
        case 'left':
          pos[0]--;
          break;
        case 'right':
          pos[0]++;
          break;
      }
    }
  }
}

console.log('Part 1: %d', part1());
console.log('Part 2: %s', part2());
