// function Person(name, age, gender, hairColor, married) {this.name = name;this.age = age;this.gender = gender;this.hairColor = hairColor;this.married = married;}let ism = prompt("ismingiz");let age = +prompt("yoshingiz");let jinsi = prompt("jinsingiz");let soch = prompt("sochingiz rangi");let oila = confirm("oilalimisiz");let personcha = new Person(ism, age, jinsi, soch, oila);console.log(personcha);


let p = document.getElementById('p');
let minus = document.getElementById('minus');
let plus = document.getElementById('plus');
let clear = document.getElementById('clear');
let input = document.getElementById('input');
let avto = document.getElementById('avto')

plus.onclick = function () {
    document.getElementById('myAudio').play();
    return ++input.value
}

minus.onclick = function () {
    document.getElementById('myAudio').play();
    if (input.value < 1) {
        return;
    }
    return --input.value
}
clear.onclick = function () {
    document.getElementById('myTozala').play();
    total = 0;
    input.value = total;
}

