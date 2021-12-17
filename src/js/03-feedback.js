import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  message: document.querySelector('.feedback-form textarea'),
  feedback: 'feedback-form-state',
};

refs.form.addEventListener('submit', onFormSubmit);
refs.message.addEventListener('input', throttle(onTextareaInput, 200));
let dataValue = {};

function onFormSubmit(e) {
  e.preventDefault();
  // const { value } = e.target.elements.text;

  localStorage.setItem(refs.feedback, JSON.stringify(e.currentTarget.value));
}

function onTextareaInput(e) {}
