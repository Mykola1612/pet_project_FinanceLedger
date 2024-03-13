import { divContainer } from "./container.js";

export const mainAdd = () => {
  const container = divContainer();

  const main = document.createElement("main");
  main.classList.add("main");
  main.appendChild(container);
  return main;
};
