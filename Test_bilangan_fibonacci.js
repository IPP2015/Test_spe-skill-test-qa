const req = require('readline-sync')
const que = req.question('Input angka Fibonacci = ')
var a = 1
var b = 1
var c = 0
for (j = 0; j <= parseInt(que); j++) {
    c = a + b
    var d = a
    a = b
    b = c
    if (d % parseInt(que) == 0) {
        console.log(true);
        break
    } else if (d > parseInt(que)) {
        console.log(false);
        break
    }
}

