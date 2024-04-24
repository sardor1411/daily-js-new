


let button = document.getElementById("button");
let p = document.getElementById("p");
let umumiyQiymat = 0;

button.onclick = function click() {
    let input = parseInt(document.getElementById("input").value);
    let inputTwo = parseInt(document.getElementById("inputTwo").value);

    for (let i = input; i <= inputTwo; i++) {
        umumiyQiymat += i;
        p.innerHTML = umumiyQiymat;
    }
}





//yulduz html
// let button = document.getElementById("button");
// let p = document.getElementById("p");

// button.onclick = function click() {
//   let input = document.getElementById("input").value;
//   let inputTwo = document.getElementById("inputTwo").value;


//   for (let i = 1; i <= input; i++) {
//     inputTwo += "⭐️";
//     p.innerHTML = (p.innerHTML + inputTwo + "<br>");
//   }
// }



//kichkintoy html
// let button = document.getElementById("button")
// let p = document.getElementById("p")

// button.onclick = function click() {
//     let input = document.getElementById("input").value;

//          if (input <= 10) {
//             console.log("salom kichkintoy");
//         } else if (input > 10 && input <= 18) {
//             console.log("salom mehmom")
//         } else if (input > 18 && input <= 50) {
//             console.log("salom amaki");
//         } else if (input > 50 && input <= 100) {
//             console.log("salom otahon");
//         } p.innerHTML += (input)
// }

