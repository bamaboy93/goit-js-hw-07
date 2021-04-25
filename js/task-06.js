
const input = document.querySelector('#validation-input');
const inputLenght = input.getAttribute('data-length');
const totalLenght = parseInt(inputLenght, 10);
input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  if (input.value.length === totalLenght) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  }
  if (input.value.length === 0) {
    input.classList.remove('valid');
    input.classList.remove('invalid');
  }
  if (input.value.length !== totalLenght && input.value.length !== 0) {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
};