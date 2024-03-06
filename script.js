const form =document.querySelector('form');
// console.log(form)
const input = document.querySelector('form input')

const ul = document.querySelector('.task-list-pending');
form.addEventListener('submit', e => {
    const li = document.createElement('li');
    e.preventDefault()
    let arr = [];
    arr.push(input.value);
    localStorage.setItem('tasks', JSON.stringify(arr));
    li.appendChild(document.createTextNode(input.value));
    li.classList.add('li-styling')
    ul.appendChild(li)
    form.reset()
})

function loadElements () {
    getElements().forEach(e => {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(e));
        li.classList.add('li-styling')
        ul.appendChild(li)
    })
    
}

function getElements () {
    let arr = []
    if (localStorage.length != 0) {
        JSON.parse(localStorage.getItem('tasks')).forEach(e => {
            arr.push(e)
        });
    }
    return arr;
}
window.addEventListener('load', e => {
    loadElements()
})