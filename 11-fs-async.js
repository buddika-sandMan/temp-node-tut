const { readFile, writeFile } = require('fs');

console.log('start');

readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err);
        return;
    }
    //console.log(result); // befor add utf8 para : <Buffer 48 65 6c 6c 6f 2c 20 49 20 61 6d 20 66 69 72 73 74 20 74 65 78 74 20 66 69 6c 65>
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if(err){
            console.log(err);
            return;
        }
        const second = result;
    
        writeFile(
            './content/result-sync.txt',
            `Here is the result : ${first}, ${second} `, {flag: 'a'} ,
            (err, result) => {
                if(err){
                    console.log(err);
                    return;
                }
                //console.log(result);
                console.log('done with this task');
               
            }
        );
    });
});

console.log('starting next task');