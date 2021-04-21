const myform = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const message = document.querySelector('.msg');
const list = document.querySelector('#users');
myform.addEventListener('submit', onsubmit);
function onsubmit(e) {
    e.preventDefault();

    if (nameInput.value === '' || emailInput.value === '') {
        alert('Please enter both fields')
    }
    else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`))
        list.appendChild(li);

        //Clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
}