const formEl = document.querySelector(".login-form");

const sendForm = (event) => {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;
  if (!email.value || !password.value) {
    return alert("все поля должны быть заполнены");
  }
  const newObj = {
    email: email.value,
    password: password.value,
  };
  console.log(newObj);
  event.currentTarget.reset();
};

formEl.addEventListener("submit", sendForm);
