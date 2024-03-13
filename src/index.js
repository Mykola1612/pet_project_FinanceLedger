import { headerAdd } from "./module/headerAdd.js";
import { mainAdd } from "./module/mainAdd.js";
import { footerAdd } from "./module/footerAdd.js";

const container = document.querySelector(".root");

function wrapperApp() {
  const header = headerAdd();
  const main = mainAdd();
  const footer = footerAdd();

  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");
  wrapper.appendChild(header);
  wrapper.appendChild(main);
  wrapper.appendChild(footer);
  container.appendChild(wrapper);
}

wrapperApp();
