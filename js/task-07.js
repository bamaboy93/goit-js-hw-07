
const sizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

sizeControl.oninput = () => text.style.fontSize = sizeControl.value + 'px';
  
