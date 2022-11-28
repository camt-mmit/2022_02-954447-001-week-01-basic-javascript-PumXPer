import * as readline from 'readline';

const rl = readline.createInterface(process.stdin, process.stdout);

rl.question('Input Size: ', (size)=>{
    const n =  parseInt(size);
    const fn = 2*n - 1;

    for (let i = 0; i < fn; i++) {
        let line = '';
        for (let j = 0; j < fn; j++) {
            line += (
                (fn == 1) ||
                (i + j + n - 1) % (fn - 1) == 0 || 
                (i - j + n - 1) % (fn - 1) == 0
            ) ?'*' : ' ';
        }
        console.log(line);
      }
    rl.close();
});

