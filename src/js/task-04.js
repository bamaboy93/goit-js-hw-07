
const inc = document.querySelector("[data-action='increment']");
const dec = document.querySelector("[data-action='decrement']");
const value = document.querySelector("#value");

let counterValue = 0;
const increment = () => {
  counterValue += 1;

 value.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;

  value.textContent = counterValue;
};

inc.addEventListener("click", increment);
dec.addEventListener("click", decrement);