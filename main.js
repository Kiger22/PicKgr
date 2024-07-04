import { OnLogin } from './actions/OnLogin';
import { OnSearch, OnSearchMore } from './actions/OnSearch';
import { createButton } from './src/components/Button/button';
import { createCard } from './src/components/Card/card';
import { createFooter } from './src/components/Footer/footer';
import { createAsideMenu } from './src/components/Formularios/MenuAsside/menuAside';
import { createloginSection } from './src/components/Formularios/inicioSeccion';
import { createHeader } from './src/components/Header/header';
import { footerLogo, menuFooter, socialLinks } from './src/data/footer';
import { heaterLogo, menuAsideItems, menuItemsHeaderI, menuItemsHeaderII } from './src/data/header';
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

          //const card = createCard(appDiv, results.urls.regular);
          createCard(appDiv, result.urls.full);
          //card.querySelector("img").addEventListener("click", () => { openModal(image.urls.full); });

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

        //const card = createCard(appDiv, results.urls.regular);
        createCard(appDiv, result.urls.full);
        //card.querySelector("img").addEventListener("click", () => { openModal(image.urls.full); });

      });
    })
    .catch((error) => {
      alert("Error al obtener los datos de la API");
      console.error("Error:", error);

    })
}


callRandomApi(20);

createloginSection();
createAsideMenu(menuAsideItems);

createButton(main, "moreButton", "MORE   ⏬", OnSearchMore);

createFooter(footerLogo, menuFooter, socialLinks);







