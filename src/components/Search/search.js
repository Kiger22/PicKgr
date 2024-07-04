import("./search.css");

export const createSearchInput = (node, placeholder, buttonText, onSearch) => {
  const searchContainer = document.createElement("div");
  searchContainer.className = "search-container";
  node.appendChild(searchContainer);

  const input = document.createElement("input");
  input.type = "text";
  input.className = "search-input";
  input.placeholder = placeholder;
  input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      onSearch();
    }
  });
  searchContainer.appendChild(input);

  const button = document.createElement("button");
  button.className = "search-button";
  button.innerText = buttonText;
  button.addEventListener("click", onSearch);
  searchContainer.appendChild(button);
};