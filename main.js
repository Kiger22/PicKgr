import { OnSearch, OnSearchMore } from './actions/OnSearch';
import { toggletheme } from './actions/toggleTheme';
import { createButton } from './src/components/Button/button';
import { createCard } from './src/components/Card/card';
import { createFooter } from './src/components/Footer/footer';
import { createHeader } from './src/components/Header/header';
import { footerLogo, menuFooter, socialLinks } from './src/data/footer';
import { heaterLogo, menuItemsHeaderI, menuItemsHeaderII } from './src/data/header';
import './style.css'

export const appDiv = document.querySelector("#app");
const main = document.querySelector("main")

createHeader(heaterLogo, menuItemsHeaderI, OnSearch, menuItemsHeaderII);

export const callApi = (keyword, page) => {
  const accessKey = 'UdGLeHvGPYod1K-LPYP0HevqnNknec_b1g6Ov_5VbF4';
  const imgPerPag = 20;
  const API_URL = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=${imgPerPag}`;

  appDiv.innerHTML = "";

  fetch(API_URL)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      if (res.results.length === 0) {
        alert("Palabra no encontrada");
      }
      else {
        res.results.forEach(result => {
          createCard(appDiv, result.urls.small,);
        });
      }
    })

    .catch((error) => {
      alert("Error al obtener los datos de la API");
      console.error("Error:", error);

    })
}

export const callRandomApi = (page) => {
  const accessKey = 'UdGLeHvGPYod1K-LPYP0HevqnNknec_b1g6Ov_5VbF4';
  const API_URL = `https://api.unsplash.com/photos/random?count=${page}&client_id=${accessKey}&per_page=20`;

  appDiv.innerHTML = "";

  fetch(API_URL)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      res.forEach(result => {

        //const card = createCard(appDiv, result.urls.regular);
        createCard(appDiv, result.urls.full);
        //card.querySelector("img").addEventListener("click", () => { openModal(result.urls.full); });

      });
    })
    .catch((error) => {
      alert("Error al obtener los datos de la API");
      console.error("Error:", error);

    })
}

callRandomApi(20);

createButton(main, "moreButton", "MORE   ⏬", OnSearchMore);

createFooter(footerLogo, menuFooter, socialLinks);


const toggleimg = document.querySelector(".toggle-img");
const body = document.querySelector("body");
const header = document.querySelector("header");
const footer = document.querySelector("footer");

toggleimg.addEventListener("click", () => toggletheme(body));
toggleimg.addEventListener("click", () => toggletheme(header));
toggleimg.addEventListener("click", () => toggletheme(footer));






