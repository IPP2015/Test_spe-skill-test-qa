const a = require('readline-sync')
const que = a.question('Input N = ')
for (i = 1; i <= que; i++) {
    var b = 0
    for (j = 0; j <= que; j++) {
        if (i % j == 0) {
            b++
        }
    }
    if (b == 2) {
        console.log(i);
    }
}

