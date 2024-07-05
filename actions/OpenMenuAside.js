import { createAsideMenu } from "../src/components/Formularios/MenuAsside/menuAside";
import { menuAsideItems } from "../src/data/header";

export let isMenuOpen = false;

export const openMenuAside = () => {
  createAsideMenu(menuAsideItems);
  isMenuOpen = true;
}

export const closeMenuAside = () => {
  const aside = document.querySelector(".menu-aside");
  aside.remove();
  isMenuOpen = false;
}

