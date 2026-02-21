
function fun1() {
    var x = Number(document.getElementById("num1").value);
    if (x % 2 == 0) {
        window.alert("زوج");
    } else {
        window.alert("فرد");
    }
}

function fun2() {
    var n = Number(document.getElementById("num1").value);
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    console.log(sum);
}

function fun3() {
    var n = Number(document.getElementById("num1").value);
    let star = '';
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += '*';
        }
        console.log(star = row + '\n');
    }
}

function fun4(x, y) {
    let count = 0;
    for (let i = 0; i <= x; i++) {
        if (i % y !== 0) {
            count++;
        }
    }
    return count;
}

var z=fun4(100,7);
var m=fun4(100,3);
console.log(z +" "+ m);


    
