
document.addEventListener('DOMContentLoaded', checkStorage)
document.querySelector('#signin__btn').addEventListener('click', login)
document.getElementById('logout').addEventListener('click', logout)

function login(event) {
    event.preventDefault()
    getAccess()
}

function getAccess() {
    fetch('https://students.netoservices.ru/nestjs-backend/auth', {
        method: 'POST',
        body: new FormData(document.querySelector('#signin__form'))  
    })
    .then(resp => resp.json())
    .then(el => {
        if (el.user_id){
            localStorage.setItem('id', el.user_id)
            welcome(el.user_id)
            cleanForm()
        } else {
            alert('Неверный логин/пароль')
            cleanForm()
        }
        
    })
}

function checkStorage() {
    const id = localStorage.getItem('id')
    if (id) {welcome(id)}
}

function welcome(id) {
    document.getElementById('signin').classList.toggle('signin_active')
    document.getElementById('user_id').innerText = id
    document.getElementById('welcome').classList.toggle('welcome_active')
}

function logout(event) {
    welcome(0)
    localStorage.removeItem('id')  
    document.getElementById('logout').removeEventListener('click', logout)
}

function cleanForm() {
    document.getElementById('signin__form').reset()
}