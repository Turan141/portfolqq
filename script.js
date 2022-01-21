let closeBtn = document.querySelector(".close_btn");
let aboutMeModal = document.querySelector("#about-me");
let aboutMeOpen = document.querySelector("#aboutme-btn");
let callMe = document.querySelector(".returncall");
let callMeDiv = document.querySelector(".numberModal");

closeBtn.addEventListener("click", () => {
  aboutMeModal.classList.add("hide");
});

aboutMeOpen.addEventListener("click", () => {
  aboutMeModal.classList.remove("hide");
});

callMeDiv.addEventListener("click", () => {
  callMeDiv.classList.remove("hide");
});

callMeDiv.addEventListener("click", () => {
  callMeDiv.classList.add("hide");
});
