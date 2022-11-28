import * as readline from 'readline';

const rl = readline.createInterface(process.stdin, process.stdout);

rl.question('Input Size: ', (size)=>{
    const n =  parseInt(size);
    
    for (let i = 0; i < n; i++) {
        let line = '';
        for (let j = 0; j < n; j++) {
            line += (
                i==0 || j ==0 ||
                i==(n-1) || j==(n-1)
            ) ?'*' : ' ';
        }
        console.log(line);
      }
    rl.close();
});

