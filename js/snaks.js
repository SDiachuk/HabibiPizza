const snaks = document.querySelector(".backdrop4");
const snaksBtnOpen = document.querySelector(".snaks-btn-open");
const snaksBtnClose = document.querySelector(".snaks-btn-close");

const toggleSnaks = () => snaks.classList.toggle("is-hidden");

snaksBtnOpen.addEventListener("click", toggleSnaks);
snaksBtnClose.addEventListener("click", toggleSnaks);
