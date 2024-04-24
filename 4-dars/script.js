//son
// let p = document.getElementById("p")
// let button = document.getElementById("button")



// button.onclick = function click() {
//     let input = document.getElementById("input").value;
//     let inputTwo = +document.getElementById("inputTwo").value;

//     for (let i = 0; i <= input; i++) {
//         p.innerHTML(inputTwo + '<br>')
//     }
// }







/////////////////////////////////////////kalkulator//////////////////////////



let p = document.getElementById("p");
let button = document.getElementById("button");


button.addEventListener('click', function () {
    let a = +document.getElementById("input").value;
    let b = +document.getElementById("inputUch").value;
    let operator = document.getElementById("operator").value;

    function qosh(a, b) {
        return a + b;
    }

    function ayir(a, b) {
        return a - b;
    }

    function bol(a, b) {
        return a / b;
    }

    function kopaytir(a, b) {
        return a * b;
    }

    switch (operator) {
        case '+':
            p.innerHTML = qosh(a, b);
            break;
        case '-':
            p.innerHTML = ayir(a, b);
            break;
        case '/':
            p.innerHTML = bol(a, b);
            break;
        case '*':
            p.innerHTML = kopaytir(a, b);
            break;
    }
});

