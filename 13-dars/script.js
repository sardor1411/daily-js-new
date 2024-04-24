let images = document.querySelectorAll('img');
let orqa = document.getElementById('orqa');
let oldin = document.getElementById('oldin');
let i = 0;

oldin.onclick = function() {
    images[i].style.display = 'none';
    i++
    if(i >= images.length){
        i = 0;
    }
    images[i].style.display = 'block';
}
orqa.onclick = function() {
    images[i].style.display = 'none';
    i--;
    if(i <= 0){
        i = images.length - 1;
    }
    images[i].style.display = 'block';
}