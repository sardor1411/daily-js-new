let p = document.getElementById('p');
let btn = document.getElementById('btn');

btn.addEventListener('click', function () {
    let min = parseInt(document.getElementById('min').value);
    let max = parseInt(document.getElementById('max').value);
    let rand = Math.floor(min + Math.random() * (max - min + 1));
    return p.innerHTML = rand;
});