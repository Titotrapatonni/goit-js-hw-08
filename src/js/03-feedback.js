var throttle = require('lodash.throttle');

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('.feedback-form input');
const textareaEl = document.querySelector('.feedback-form textarea');
formEl.addEventListener('input', throttle(onInput, 500));
formEl.addEventListener('submit', onSubmit);
const KEY = 'feedback-form-state';
let userData = {};

setFormInputValue();

function onInput(evt) {
  userData.email = inputEl.value;
  userData.message = textareaEl.value;
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
  const savedMessage = localStorage.getItem(KEY);
  const parseMessage = JSON.parse(savedMessage);
  if (parseMessage) {
    inputEl.value = parseMessage.email || '';
    textareaEl.value = parseMessage.message || '';
  }
}
