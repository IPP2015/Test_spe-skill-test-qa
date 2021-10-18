const a = require('readline-sync')
const que = a.questionInt('Input N = ')
function prima(number) {
    let primas = [];
    for (let i = 2; i; i++) {
        let isprime = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isprime = false;
                break;
            }
        }
        if (isprime) primas.push(i);
        if (primas.length === number) break;
    }
    return primas.join(',');
}

console.log(prima(que));


