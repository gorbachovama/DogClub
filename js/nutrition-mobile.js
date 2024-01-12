const mobile = document.querySelector(".backdrop-nutrition");
const mobileBtnOpen = document.querySelector(".mobile-btn-open");
const mobileBtnClose = document.querySelector(".mobile-btn-close");

const toggleMobile = () => mobile.classList.toggle("is-hidden");

mobileBtnOpen.addEventListener("click", toggleMobile);
mobileBtnClose.addEventListener("click", toggleMobile);

// const toggleMobile = () => backdropNutrition.classList.toggle("is-open");
// const disableScroll = () =>
//   document.body.classList.toggle("is-scroll-disabled");

// mobileBtnOpen.addEventListener("click", toggleMobile);
// mobileBtnClose.addEventListener("click", toggleMobile);

// mobileBtnOpen.addEventListener("click", disableScroll);
// mobileBtnClose.addEventListener("click", disableScroll);
