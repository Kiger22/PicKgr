import "./imgModal.css";

export const openModal = (src) => {

  const modal = document.createElement("div");
  modal.className = "modal";
  document.body.appendChild(modal);

  const modalImg = document.createElement("img");
  modalImg.src = src;
  modalImg.className = "modal-img";
  modal.appendChild(modalImg);

  modal.addEventListener("click", () => {
    document.body.removeChild(modal);
  });
}