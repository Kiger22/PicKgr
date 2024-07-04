import("./menuAside.css");

export const createAsideMenu = (menuItems) => {

  // Crear el elemento aside
  const aside = document.createElement("aside");
  aside.classList.add("menu-aside");
  const main = document.querySelector("main");
  main.appendChild(aside)

  // Crear el elemento nav dentro del aside
  const nav = document.createElement("nav");
  nav.classList.add("menu-nav");
  aside.appendChild(nav);

  // Crear la lista de elementos del menú
  const ul = document.createElement("ul");
  ul.classList.add("menu-list");
  nav.appendChild(ul);

  // Crear los elementos del menú
  menuItems.forEach(item => {

    const li = document.createElement("li");
    li.classList.add("menu-item");
    ul.appendChild(li);

    const link = document.createElement("a");
    link.classList.add("menu-link");
    link.href = item.href;
    link.textContent = item.text;
    li.appendChild(link);

  });
}

export const openMenuAside = () => {
  const aside = document.getElementsByClassName("menu-aside");
  aside.classList.add("show");
}