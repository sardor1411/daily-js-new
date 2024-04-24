let button = document.getElementById("button");

button.addEventListener('click', function () {
    let a = +document.getElementById("input").value;
    let b = +document.getElementById("inputUch").value;
    let operator = document.getElementById("operator").value;
    let natija = document.getElementById("result");
    let result;

    switch (operator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '/':
            result = a / b;
            break;
        case '*':
            result = a * b;
            break;
    }

    natija.innerHTML = 'Natija; ' + result;
});