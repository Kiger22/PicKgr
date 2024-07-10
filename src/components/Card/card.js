import { openModal } from "../../../actions/openModal";

import("./card.css");

export const createCard = (node, imgSrc, imgFull, title, description) => {
  const card = document.createElement("div");
  card.className = "card";
  node.appendChild(card);

  const img = document.createElement("img");
  img.src = imgSrc;
  card.appendChild(img);

  img.addEventListener("click", () => openModal(imgFull));

  if (title || description) {

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";
    card.appendChild(cardBody);

    if (title) {
      const cardTitle = document.createElement("h2");
      cardTitle.className = "card-title";
      cardTitle.innerText = title;
      cardBody.appendChild(cardTitle);
    }

    if (description) {
      const cardText = document.createElement("p");
      cardText.className = "card-text";
      cardText.innerText = description;
      cardBody.appendChild(cardText);
    }
  }

};