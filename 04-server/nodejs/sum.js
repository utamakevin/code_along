/*

% node sum.js 1 2 3
6


% node sum.js 4 4
8


% node sum.js 1 2 3 4
10

*/

let total = 0

for (let i = 2; i < process.argv.length; i++) {
    total += Number(process.argv[i])
}

console.log(total)