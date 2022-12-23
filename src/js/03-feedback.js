var throttle = require('lodash.throttle');

const formEl = document.querySelector('.feedback-form');
formEl.addEventListener('input', throttle(onInput, 500));
formEl.addEventListener('submit', onSubmit);
const KEY = 'feedback-form-state';
let userData = {};

setFormInputValue();

function onInput(evt) {
  userData[evt.target.name] = evt.target.value.trim();
  localStorage.setItem(KEY, JSON.stringify(userData));
}
function onSubmit(evt) {
  evt.preventDefault();
  console.log(userData);
  evt.target.reset();
  localStorage.removeItem(KEY);
  userData = {};
}
function setFormInputValue() {
  try {
    const savedMessage = localStorage.getItem(KEY);
    if (savedMessage) {
      userData = JSON.parse(savedMessage);
      Object.entries(userData).forEach(formData => {
        formEl.elements[formData[0]].value = formData[1];
      });
    }
  } catch (error) {
    console.log(error);
  }
}
