// let odam = {
//     name:prompt("ismingizni kiriting"),
//     age: +prompt("yoshingizni kiriting"),
//     place: prompt("qaysi mahhalada turasiz")
// }
// console.log(odam);

let button = document.getElementById('button')
let p = document.getElementById('p')

button.onclick = function click() {
    let inputTwo = document.getElementById('inputTwo').value;
    let inputUch = document.getElementById('inputUch').value;
    let input = document.getElementById('input').value;
    let odam = {
        name: "name: " + input,
        age: "age: " + inputTwo,
        place: "place: " + inputUch
    }
    p.innerHTML = (odam.name + '<br>' + odam.age + '<br>' + odam.place);
}
