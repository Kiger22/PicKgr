import { OnSearchMore } from "../../actions/OnSearch";

export const menuItemsHeaderI = [
  { text: "HOY", href: '#', action: OnSearchMore },
  { text: "EXPLORAR", href: '#', action: OnSearchMore },
];

export const menuItemsHeaderII = [
  { text: "Info", href: '#' },
  { text: "Empresa", href: '#' },
];

export const menuAsideItems = [...menuItemsHeaderI, , ...menuItemsHeaderII];

export const heaterLogo = "./assets/LogoSolo.png"

export const placeholder = "Encuentra tu imagen"
export const buttonText = "Buscar"