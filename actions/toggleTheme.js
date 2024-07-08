export const toggletheme = (node) => {

  if (node.classList.contains("dark")) {
    node.classList.remove("dark");
  }
  else {
    node.classList.add("dark");
  }
}