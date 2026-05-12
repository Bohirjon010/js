const signupForm = document.querySelector("#signup-form");

const message = document.querySelector(".message");

const regEX = /^[a-zA-Z0-9]{6,12}$/;

// kksksksksksks
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputVal = signupForm.username.value;

  if (regEX.test(inputVal)) {
    message.textContent = "Ma'lumot to'g'ri kiritildi.";
  } else {
    message.textContent = "Noto'g'ri";
  }
});

// live input
signupForm.username.addEventListener("keyup", (e) => {
if (regEX.test(e.target.value)){
  signupForm.username.setAttribute('class','s')
} else {
  signupForm.username.setAttribute('class','e')
  
}
});
