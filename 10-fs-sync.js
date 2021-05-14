const { readFileSync, writeFileSync } = require('fs');

console.log('start');

const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');

console.log(first);
console.log(second);

writeFileSync(
    './content/result-sync.txt',
    `Here is the result : ${first}, ${second}\n`,
    {flag: 'a'}//repeat text content
);
console.log(readFileSync('./content/result-sync.txt','utf8'));
console.log('done with this task');
console.log('start the next one');