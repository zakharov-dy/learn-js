var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.on('line', function(line){
    const [a, b, ...c] = line.split(' ');
    console.log(Number(a) + Number(b));
    rl.close();
});