import("./button.css");

export const createButton = (node, className, text, onClick) => {
  const button = document.createElement("button");
  button.className = className;
  button.innerText = text;
  node.append(button);
  button.addEventListener("click", onClick);
};


