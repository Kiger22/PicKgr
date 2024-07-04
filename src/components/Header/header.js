import { OnLogin } from "../../../actions/OnLogin";
import { OnRegister } from "../../../actions/OnRegister";
import { buttonText, placeholder } from "../../data/header";
import { createButton } from "../Button/button";
import { openMenuAside } from "../Formularios/MenuAsside/menuAside";
import { createSearchInput } from "../Search/search";
import "./header.css"

export const createHeader = (logoSrc, menuItems, onSearch, menuItemsII) => {
  const main = document.querySelector("main");
  const header = document.createElement("header");
  header.className = "header";
  document.body.insertBefore(header, main);

  // logoSrc
  const logoSection = document.createElement("div");
  logoSection.className = "header-logo";
  const logoImg = document.createElement("img");
  logoImg.src = logoSrc;
  logoSection.appendChild(logoImg);
  header.appendChild(logoSection);


  // menuItems
  const menuSection = document.createElement("nav");
  menuSection.className = "header-menu";
  menuItems.forEach(item => {
    const link = document.createElement("a");
    link.href = item.href;
    link.innerText = item.text;
    link.addEventListener("click", item.action)
    menuSection.appendChild(link);
  });
  header.appendChild(menuSection);

  // serchContainer
  const searchSection = document.createElement("div");
  searchSection.className = "header-search"

  createSearchInput(searchSection, placeholder, buttonText, onSearch);
  header.appendChild(searchSection);

  // menuItemsII
  const menuSectionII = document.createElement("nav");
  menuSectionII.className = "header-menu-login";
  menuItemsII.forEach(item => {
    const link = document.createElement("a");
    link.href = item.href;
    link.innerText = item.text;
    menuSectionII.appendChild(link);
  });
  header.appendChild(menuSectionII);

  // loginSeccion
  const loginSection = document.createElement("div");
  loginSection.className = "header-login";
  header.appendChild(loginSection);

  createButton(loginSection, "login-Btt", "Login", OnLogin);

  const toggleimg = document.createElement("img");
  toggleimg.src = "./assets/toggle.svg";
  loginSection.appendChild(toggleimg);

  // Menu Hambuerguesa
  const menuBurger = document.createElement("div");
  menuBurger.className = "header-burguer";
  loginSection.appendChild(menuBurger);

  const menuBurg = document.createElement("img");
  menuBurg.src = "./assets/menu.svg";
  menuBurg.addEventListener("click", openMenuAside);
  menuBurger.appendChild(menuBurg);

  //createButton(loginSection, "register-Btt", " ➕", OnRegister);


};





