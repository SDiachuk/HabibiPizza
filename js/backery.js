const backery = document.querySelector(".backdrop3");
const backeryBtnOpen = document.querySelector(".backery-btn-open");
const backeryBtnClose = document.querySelector(".backery-btn-close");

const togglebackery = () => backery.classList.toggle("is-hidden");

backeryBtnOpen.addEventListener("click", togglebackery);
backeryBtnClose.addEventListener("click", togglebackery);
