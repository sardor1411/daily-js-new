
let sun = document.getElementById('sun')
let moon = document.getElementById('moon')
moon.onclick = function () {
    let lnk = document.getElementById('link');
    if(lnk.getAttribute('href') === 'sun.css'){
        lnk.href = 'moon.css';
        moon.style.display = 'none';
        sun.style.display = 'block';
    }
}
sun.onclick = function () {
    let lnk = document.getElementById('link');
    if(lnk.getAttribute('href') === 'moon.css'){
        lnk.href = 'sun.css';
        sun.style.display = 'none';
        moon.style.display = 'block';
    }
}

let p = document.getElementById('p')
let img = document.getElementById('img')
let input = document.getElementById('input')
let total = 0;

img.onclick = function () {
    p.innerHTML = ++total;
}

let imgBit = document.getElementById('imgBit')
let imgDra = document.getElementById('imgDra')
let imgUzb = document.getElementById('imgUzb')
let uzbek = document.getElementById('uzbek')
let dev2 = document.getElementById('boxcha1')
let up = document.getElementById('buttonUP')
let up1 = document.getElementById('buttonUP1')
let up2 = document.getElementById('buttonUP2')
let up3 = document.getElementById('buttonUP3')
let maxcha = document.getElementById('maxlevel1')
let activ = document.getElementById('active')
let prom = document.getElementById('prom')
let bitTodev = document.getElementById('bitTodev')




activ.onclick = function () {
    if (prom.value === '123456') {
        total += 500000;
        activ.onclick = null;
        let promoSound = document.getElementById('promoSound').play();
    }
    else {
        document.getElementById('soundSkin').play();
    }
};



up.onclick = function () {
    if (1000 <= total) {
        let sound = document.getElementById('sound').play();
        let up = document.getElementById('buttonUP').style.display = 'none';
        let up1 = document.getElementById('buttonUP1').style.display = 'block';
        total -= 1000;
        let pup = document.getElementById('upPoint').textContent = '5 POINT';
        img.onclick = function () {
            p.innerHTML = total += 5;
        }
        imgDra.onclick = function () {
            p.innerHTML = total += 5;
        }
        imgBit.onclick = function () {
            p.innerHTML = total += 5;
        }
        imgUzb.onclick = function () {
            p.innerHTML = total += 5;
        }
    }
    else if (total < 1000) {
        let error = document.getElementById('error').play();
        alert("coin is not enough")
    }
}
up1.onclick = function () {
    if (2000 <= total) {
        let sound = document.getElementById('sound').play();
        let up1 = document.getElementById('buttonUP1').style.display = 'none';
        let up2 = document.getElementById('buttonUP2').style.display = 'block';
        total -= 2000;
        let pup = document.getElementById('upPoint').textContent = '10 POINT';
        img.onclick = function () {
            p.innerHTML = total += 10;
        }
        imgDra.onclick = function () {
            p.innerHTML = total += 10;
        }
        imgBit.onclick = function () {
            p.innerHTML = total += 10;
        }
        imgUzb.onclick = function () {
            p.innerHTML = total += 10;
        }
    }
    else if (total < 2000) {
        let error = document.getElementById('error').play();
        alert("coin is not enough")
    }
}
up2.onclick = function () {
    if (4500 <= total) {
        let sound = document.getElementById('sound').play();
        let up2 = document.getElementById('buttonUP2').style.display = 'none'
        let up3 = document.getElementById('buttonUP3').style.display = 'block'
        total -= 4500;
        let pup = document.getElementById('upPoint').textContent = '20 POINT'
        img.onclick = function () {
            p.innerHTML = total += 20;
        }
        imgDra.onclick = function () {
            p.innerHTML = total += 20;
        }
        imgBit.onclick = function () {
            p.innerHTML = total += 20;
        }
        imgUzb.onclick = function () {
            p.innerHTML = total += 20;
        }
    }
    else if (total < 4500) {
        let error = document.getElementById('error').play();
        alert("coin is not enough")
    }
}
up3.onclick = function () {
    if (10000 <= total) {
        let sound = document.getElementById('max').play();
        let up2 = document.getElementById('buttonUP2').style.display = 'none'
        let maxcha = document.getElementById('maxlevel1').style.display = 'block'
        let up3 = document.getElementById('buttonUP3').style.display = 'none';

        total -= 10000;
        let pup = document.getElementById('upPoint').textContent = '50 MAX LEVEL'
        img.onclick = function () {
            p.innerHTML = total += 50;
        }
        imgDra.onclick = function () {
            p.innerHTML = total += 50;
        }
        imgBit.onclick = function () {
            p.innerHTML = total += 50;
        }
        imgUzb.onclick = function () {
            p.innerHTML = total += 50;
        }
    }
    else if (total < 4500) {
        let error = document.getElementById('error').play();
        alert("coin is not enough")
    }
}

bitcoin.onclick = function () {
    if (total > 50000) {
        total -= 50000;
        document.getElementById('img').style.display = 'none';
        document.getElementById('imgBit').style.display = 'block';
        document.getElementById('bitcoin').style.display = 'none';
        let skinSound = document.getElementById('skinSound').play();
        imgBit.onclick = function () {
            p.innerHTML = ++total;
            
        }
    }
}
dragon.onclick = function () {
    if (total > 40000) {
        total -= 40000;
        document.getElementById('img').style.display = 'none';
        document.getElementById('imgDra').style.display = 'block';
        document.getElementById('dragon').style.display = 'none';
        let skinSound = document.getElementById('skinSound').play();
        imgDra.onclick = function () {
            p.innerHTML = ++total;
        }
    }
}
uzbek.onclick = function () {
    if (total > 30000) {
        total -= 30000;
        document.getElementById('img').style.display = 'none';
        document.getElementById('imgUzb').style.display = 'block';
        document.getElementById('uzbek').style.display = 'none';
        let skinSound = document.getElementById('skinSound').play();
        imgUzb.onclick = function () {
            p.innerHTML = ++total;
        }
    }
}











