const signupForm = document.querySelector("#signup-form");

const message = document.querySelector(".message");

// kksksksksksks
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const regEX = /^[a-zA-Z0-9]{6,12}$/;
  const inputVal = signupForm.username.value;

  if (regEX.test(inputVal)) {
    message.textContent = "Ma'lumot to'g'ri kiritildi.";
  } else {
    message.textContent = "Noto'g'ri";
  }
});
