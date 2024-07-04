export const openModal = (src) => {

  const modal = document.createElement("div");
  modal.classList.add("modal");
  document.body.appendChild(modal);

  const modalImg = document.createElement("img");
  modalImg.src = src;
  modalImg.classList.add("modal-img");
  modal.appendChild(modalImg);

  modal.addEventListener('click', () => {
    document.body.removeChild(modal);
  });
}