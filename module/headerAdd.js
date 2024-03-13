import { divContainer } from "./container.js";
import { navListComponent } from "./header/nav_components/navListComponent.js";
import { logoComponent } from "./header/nav_components/logoComponent.js";

export const headerAdd = () => {
  const logo = logoComponent();

  const navList = navListComponent();
  const nav = document.createElement("nav");
  nav.classList.add("nav");
  nav.innerHTML = logo;
  nav.appendChild(navList);

  const container = divContainer();
  container.appendChild(nav);

  const header = document.createElement("header");
  header.classList.add("header");
  header.appendChild(container);
  return header;
};
