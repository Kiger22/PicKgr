import { OnSearch } from "../../actions/OnSearch";

export const menuItemsHeaderI = [
  { text: "HOY", href: '#', action: OnSearch },
  { text: "EXPLORAR", href: '#', action: OnSearch },
];

export const menuItemsHeaderII = [
  { text: "Info", href: '#' },
  { text: "Empresa", href: '#' },
];

export const menuAsideItems = [...menuItemsHeaderI, , ...menuItemsHeaderII];

export const heaterLogo = "./assets/Logo.png"

export const placeholder = "Que quieres buscar?"
export const buttonText = "Buscar"