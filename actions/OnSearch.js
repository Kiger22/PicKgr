import { appDiv, callApi, callRandomApi } from "../main";

export const OnSearch = () => {
  //alert(" Buscando");

  const searchInput = document.querySelector(".search-input");
  appDiv.innerHTML = "";
  /* if (searchInput.value === "") {
    alert("Por favor ingrese una palabra para poder buscarla !!!");
  }
  else {
    callApi(searchInput.value, 1);
  } */

  searchInput.value === ""
    ? alert("¡Por favor ingrese una palabra para poder buscarla!")
    : callApi(searchInput.value, 1);

}

var i = 1

export const OnSearchMore = () => {
  const searchInput = document.querySelector(".search-input");

  /* if (searchInput.value === "") {
    callRandomApi(20);
  }
  else {
    ++i
    callApi(searchInput.value, i)
  } */

  searchInput.value === ""
    ? callRandomApi(20)
    : callApi(searchInput.value, ++i);

}