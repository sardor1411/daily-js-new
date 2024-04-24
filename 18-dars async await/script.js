let data1 = document.getElementById('data');
let posts = document.getElementById('posts');
let comments = document.getElementById('comments');
let photos = document.getElementById('photos');
let users = document.getElementById('users');
let todos = document.getElementById('todos');

posts.addEventListener('click', () => {
    data1.innerHTML = '';
    post();
})
comments.addEventListener('click', () => {
    data1.innerHTML = '';
    comment();
})
photos.addEventListener('click', () => {
    data1.innerHTML = '';
    photo();
})
users.addEventListener('click', () => {
    data1.innerHTML = '';
    user();
})
todos.addEventListener('click', () => {
    data1.innerHTML = '';
    todo();
})

async function post() {
    let fetc = await fetch('https://jsonplaceholder.typicode.com/posts');
    let dataToJSON = await fetc.json();
    dataToJSON.map(function (item) {
        data1.innerHTML += `
                        <div class = "data2">
                        <h2>UserId: ${item.userId}</h2>
                        <h2>ID: ${item.id}</h2>    
                        <h2>Title: ${item.title}</h2>  
                        <h2>Body: ${item.body}</h2>    
                    `;
    });
}


async function comment() {
    let fetc = await fetch('https://jsonplaceholder.typicode.com/comments')
    let DataToJSON = await fetc.json()
    DataToJSON.map(function (item) {
        data1.innerHTML += `
                <div class = "data2">
                <h2>postId: ${item.postId}</h2>
                <h2>name: ${item.name}</h2>    
                <h2>Email: ${item.email}</h2>  
                <h2>Body: ${item.body}</h2>    
            `
    })
}
async function user() {
    let fetc = await fetch('https://jsonplaceholder.typicode.com/users')
    let DataToJSON = await fetc.json()
    DataToJSON.map(function (item) {
        data1.innerHTML += `
                <div class = "data2">
                <h2>id: ${item.id}</h2>
                <h2>name: ${item.name}</h2>    
                <h2>username: ${item.username}</h2>  
                <h2>email: ${item.email}</h2>      
                <h2>address suite: ${item.address.suite}</h2> 
                <h2>address street: ${item.address.street}</h2>  
                <h2>address city: ${item.address.city}</h2>    
                <h2>address zipcode: ${item.address.zipcode}</h2>    
                <h2>address geo lat: ${item.address.geo.lat}</h2>    
                <h2>address geo lng: ${item.address.geo.lng}</h2>    
            `
    })
}


let photo = function photo() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(data => data.json())
        .then(data => {
            data.map(function (item) {
                data1.innerHTML += `
                <div class = "data2">
                <h2>albumId: ${item.albumId}</h2>
                <h2>title: ${item.title}</h2>    
                <img src="${item.url}" alt="">
                <a href="${item.thumbnailUrl}"></a>   
            `
            })
        })
}


async function todo() {
    let fetc = await fetch('https://jsonplaceholder.typicode.com/todos')
        let DataToJSON = await fetc.json()
            DataToJSON.map(function (item) {
                data1.innerHTML += `
                <div class = "data2">
                <h2>userId: ${item.userId}</h2>
                <h2>id: ${item.id}</h2>    
                <h2>title: ${item.title}</h2>  
                <h2>completed: ${item.completed}</h2>    
            `
            })
        }
