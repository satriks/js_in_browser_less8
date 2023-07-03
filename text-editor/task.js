document.addEventListener('DOMContentLoaded', getDataFromStorage)
document.querySelector('#editor').addEventListener('input', handle)
document.querySelector('button').addEventListener('click', cleaner)

function handle(event) {
    localStorage.setItem('data', this.value)
}

function getDataFromStorage() {
   document.querySelector('#editor').value = localStorage.getItem('data')
}

function cleaner() {
    document.querySelector('#editor').value =''
    localStorage.removeItem('data')
    
}