const formSub = document.querySelector(".login-form");

formSub.addEventListener("submit", (ev) => {
  ev.preventDefault();
  const email = formSub.elements.email.value.trim();
  const password = formSub.elements.password.value.trim();
  // console.log(email);
  if (email === "" || password === "") {
    alert("All form fields must be filled in");
  } else {
    const data = { email, password };
    console.log(data);

    formSub.reset();
  }
});
