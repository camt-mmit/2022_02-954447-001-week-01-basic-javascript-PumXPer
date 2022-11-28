import * as readline from 'readline';

const rl = readline.createInterface(process.stdin, process.stdout);

rl.question('Input Size: ', (size)=>{
    const n =  parseInt(size);
    
    for (let i = 0; i <= n; i++) {
        let line = '';
        for (let j = 0; j < i; j++) {
            line += (i >= j) ? '*' : ' ';
        }
        console.log(line);
      }
    rl.close();
});

