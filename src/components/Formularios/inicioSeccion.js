import("./inicioSeccion.css");
import { callRandomApi } from "../../../main";

export const createloginSection = () => {

  const main = document.querySelector("main");
  //main.innerHTML = "";

  // Crear contenedor del modal
  const modal = document.createElement("div");
  modal.id = "loginModal";
  modal.className = "modal";
  document.body.insertBefore(modal, main);

  // Crear contenido del modal
  const modalContent = document.createElement("div");
  modalContent.className = "modal-content";
  modal.appendChild(modalContent);

  // Crear botón de cierre del modal
  const closeBtn = document.createElement("span");
  closeBtn.className = "closeBtn";
  closeBtn.innerHTML = "&times;";
  modalContent.appendChild(closeBtn);

  // Crear formulario de inicio de sesión
  const loginForm = document.createElement("form");
  loginForm.id = "loginForm";
  modalContent.appendChild(loginForm);

  // Crear campo de usuario
  const usernameLabel = document.createElement("label");
  usernameLabel.htmlFor = "username";
  usernameLabel.textContent = "Usuario:";
  loginForm.appendChild(usernameLabel);

  const usernameInput = document.createElement("input");
  usernameInput.type = "text";
  usernameInput.id = "username";
  usernameInput.name = "username";
  usernameInput.required = true;
  loginForm.appendChild(usernameInput);

  // Crear campo de contraseña
  const passwordLabel = document.createElement("label");
  passwordLabel.htmlFor = "password";
  passwordLabel.textContent = "Contraseña:";
  loginForm.appendChild(passwordLabel);

  const passwordInput = document.createElement("input");
  passwordInput.type = "password";
  passwordInput.id = "password";
  passwordInput.name = "password";
  passwordInput.required = true;
  loginForm.appendChild(passwordInput);

  // Crear botón de envío del formulario
  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.textContent = "Iniciar Sesión";
  loginForm.appendChild(submitBtn);

  // Cerrar el modal al hacer clic en el botón de cierre
  closeBtn.onclick = function () {
    modal.style.visibility = "hidden";
    callRandomApi();
  }

  // Cerrar el modal al hacer clic fuera del contenido del modal
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.visibility = "hidden";
      callRandomApi();
    }
  }

  /* // Manejar el envío del formulario
  loginForm.onsubmit = function (event) {
    event.preventDefault();
    // Aquí puedes añadir la lógica para manejar el inicio de sesión
    alert("Inicio de sesión exitoso");
    modal.style.display = "none";
  } */
}

export const openLoginSection = () => {
  //const modal = document.getElementsByClassName("modal");
  modal.style.visibility = "visible";
}