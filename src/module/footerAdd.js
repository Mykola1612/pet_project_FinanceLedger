import { divContainer } from "./container.js";

export const footerAdd = () => {
  const container = divContainer();

  const footer = document.createElement("footer");
  footer.classList.add("footer");
  footer.appendChild(container);
  return footer;
};
