const modal = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.button-close-modal');

closeBtn.addEventListener('click', () => {
modal.classList.remove('is-open');
  });

const burgerModal = document.querySelector(".modal-overlay-burger-menu");
const openBurgerBtn = document.querySelector(".open-burger-menu");
const closeBurgerBtn = document.querySelector(".button-close-burger-menu");


openBurgerBtn.addEventListener("click", () => {
  burgerModal.classList.add("is-open");
});


closeBurgerBtn.addEventListener("click", () => {
  burgerModal.classList.remove("is-open");
});