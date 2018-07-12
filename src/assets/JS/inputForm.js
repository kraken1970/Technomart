// Форма входа
function inputForm() {
  const login = document.querySelector(".login");
  const loginBlock = document.querySelector(".double-button");
  const clientBlock = document.querySelector(".client-block");
  const searchClient = document.querySelector(".client");
  const EscCode = 27;

  login.addEventListener("click", function(event) {
    event.preventDefault();
    loginBlock.classList.add("block-none");
    clientBlock.classList.remove("block-none");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === EscCode) {
      if (loginBlock.classList.contains("block-none")) {
        loginBlock.classList.remove("block-none");
        clientBlock.classList.add("block-none");
      }
    }
  });
}
inputForm();
