let btn = document.getElementById('button')
    btn.onclick = function generate() {
        let input1 = document.getElementById('inputName').value;
        let input2 = document.getElementById('inputSuorname').value;
        let input3 = document.getElementById('inputData').value;
        let p = document.getElementById('p');
        let img = document.getElementById('image');
        img.style.display = 'block';
        p.innerHTML = [input1];
    }