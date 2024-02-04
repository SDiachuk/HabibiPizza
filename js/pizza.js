const pizza = document.querySelector(".backdrop1");
const pizzaBtnOpen = document.querySelector(".pizza-btn-open");
const pizzaBtnClose = document.querySelector(".pizza-btn-close");

const togglePizza = () => pizza.classList.toggle("is-hidden");

pizzaBtnOpen.addEventListener("click", togglePizza);
pizzaBtnClose.addEventListener("click", togglePizza);
