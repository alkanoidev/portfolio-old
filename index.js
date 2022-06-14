const button = document.querySelector("#sendBtn");

const message = {
  name: formValues?.name,
  email: formValues?.email,
  message: "`" + formValues?.message + "`",
};

button.addEventListener("click", () => {
  form.send(message);
});
