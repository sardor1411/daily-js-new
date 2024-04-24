// Form
let date = document.getElementById('date');
let name = document.getElementById('name');
let btn = document.getElementById('btn');
let data = document.getElementById('data');
let form = document.getElementById('form');
let error = document.getElementById('error');
let succes = document.getElementById('succes');

// Modal
let editModal = document.getElementById('editModal');
let closeModal = document.querySelector('.modal__close');
let editModalForm = document.querySelector('.edit__todo__form form');
let editInput = document.getElementById('editInput');
let errorModal = document.getElementById('errorModal');
let succesModal = document.getElementById('succesModal');
let modalSave = document.querySelector('.button__edit__todo');
let editBall = document.querySelectorAll('.editBall');

//kichikback-end
let malumot = [];

//inputdagi malumotni jadvalga chiqarish
form.addEventListener('submit', function (event) {
    event.preventDefault();
    tekshirish();
    if (error.innerHTML === "") {
        yaratish();
    }
});

function tekshirish() {
    if (name.value == "" || date.value == "") {
        error.innerHTML = "malumot kiriting";
        succes.innerText = "";
        setTimeout(() => {
            error.innerHTML = "";
        }, 3000);
        closeModalFunc();
        return;
    }
    else {
        succes.innerHTML = "malumot kiritildi";
        error.innerText = "";
        setTimeout(() => {
            succes.innerHTML = "";
        }, 3000);
        closeModalFunc();
    }
}

function IdMake(malumot1) {
    if (!malumot.length) {
        return 1;
    } else {
        return malumot[malumot.length - 1].id + 1;
    }
}

function yaratish() {
    malumot.push({
        id: IdMake(malumot),
        name: name.value,
        date: date.value,
    });
    localStorage.setItem('malum', JSON.stringify(malumot));
    console.log(malumot);
    oqish();
}

function deleteData(id) {
    const idx = malumot.findIndex(function (todoId) {
        return todoId.id === id;
    });
    if (idx !== -1) {
        malumot.splice(idx, 1);
        localStorage.setItem('malum', JSON.stringify(malumot));
        oqish();
        console.log(malumot);
    }
}

//jadvaldagi malumotni edit qilish kodlari

function updateDataFromModal(editData, Id) {
    const todoIndex = malumot.findIndex(function (todoId) {
        return todoId.id === Id;
    });
    malumot[todoIndex].name = editData;

    localStorage.setItem('malum', JSON.stringify(malumot));
    oqish();
}

function editData(id) {
    const idx = malumot.find(function (todoId) {
        return todoId.id === id;
    });
    console.log(idx);
    showModal(idx.name, id);
}

editModalForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const todoId = +editInput.dataset.todoId;
    if (editInput.value == "") {
        errorModal.innerHTML = "narsa kiriting";
        return;
    }
    else {
        errorModal.style.display = 'none';
        succesModal.innerHTML = "narsa kiritildi";
        closeModalFunc();
    }
    updateDataFromModal(editInput.value, todoId);

});


function showModal(todoName, todoId) {
    editModal.style.display = 'flex';
    editInput.value = todoName;
    editInput.dataset.todoId = todoId;
    console.log(todoName, todoId);
}

closeModal.addEventListener('click', function () {
    closeModalFunc();
});


function closeModalFunc() {
    editModal.style.display = 'none';
}


(function () {
    malumot = JSON.parse(localStorage.getItem('data')) ? JSON.parse(localStorage.getItem('data')) : [];
    malumot = JSON.parse(localStorage.getItem('malum'));
    oqish();
})();

//malumotni orqadan qo'shib boruvchi funksiya
function oqish() {
    data.innerHTML = "";
    malumot.sort(function (a, b) { return (b.date - a.date) }).map(function (obj, index) {
        return (
            data.innerHTML += `
            <div class = "new">
                <h3>DataTime ${obj.date}</h3>
                <p>${obj.name}</p>
                <div class = "edit">
                    <td><i onclick="editData(${obj.id})" class="fa-solid fa-pen-to-square"></i></td>
                    <td><i onclick="deleteData(${obj.id})" class="fa-solid fa-trash"></i></td>
                </div>
            </div>
            `
        )
    });
    name.value = "";
    date.value = "";
}




