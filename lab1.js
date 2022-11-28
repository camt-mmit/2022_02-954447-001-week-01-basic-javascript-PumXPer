import * as readline from 'readline';

const rl = readline.createInterface(process.stdin, process.stdout);

rl.question('Input score: ', (score)=>{
    let sc = parseInt(score);
    let grade = '';
    
    if (sc >= 80) {
        grade = `${grade}${'A'}`;
    } else if (sc >= 70) {
        grade = `${grade}${'B'}`;
    } else if (sc >= 60) {
        grade = `${grade}${'C'}`;
    } else if (sc >= 50) {
        grade = `${grade}${'D'}`;
    } else {
        grade = `${grade}${'F'}`;
    }

    console.log(`Your grade is ${grade}.`);
    rl.close();
});