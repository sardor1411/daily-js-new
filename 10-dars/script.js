// let array = ["Sardor", "Aziz", "Javohiraka", "Islomaka", "Nurjahon", "Abbos", "Shagzodaka", "Nuriddin", "Behruz", "Ali","Ibrohim"]

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }


let kun = document.getElementById('kun')
let tun = document.getElementById('tun')
kun.onclick = function () {
    let lnk = document.getElementById('link')

    if (lnk.getAttribute('href') == 'oq.css') {
        lnk.href = 'qora.css'
        tun.style.display = 'block'
        kun.style.display = 'none'
    }

}
tun.onclick = function () {
    let lnk = document.getElementById('link')
    if (lnk.getAttribute('href') == 'qora.css') {
        lnk.href = 'oq.css'
        tun.style.display = 'none'
        kun.style.display = 'block'
    }

}