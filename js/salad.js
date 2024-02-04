const salad = document.querySelector(".backdrop2");
const saladBtnOpen = document.querySelector(".salad-btn-open");
const saladBtnClose = document.querySelector(".salad-btn-close");

const toggleSalad = () => salad.classList.toggle("is-hidden");

saladBtnOpen.addEventListener("click", toggleSalad);
saladBtnClose.addEventListener("click", toggleSalad);
