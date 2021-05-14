// GLOBALS      - NO WINDOW !!!

// __dirname    - path to current directory
// __filename   - file name
// require      - function to use modules (CommonJS)
// module       - info about current module (file)
// process      - info about env where the program is being execute

const amount = 10;

if(amount > 10){
    console.log('large number');
}
else{
    console.log('small number');
}

console.log('hey it\'s my first node app!!!');
console.log(__dirname);
console.log(__filename);
setInterval(() =>{
    console.log('hello world');
}, 1000);