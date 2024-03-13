const page = ["Home", "About", "Cases", "Blog", "Contact"];

export const navListComponent = () => {
  const navList = document.createElement("ul");
  navList.classList.add("nav_list");

  for (let i = 0; i < page.length; i++) {
    const items = document.createElement("li");
    items.classList.add("nav_item");
    const links = document.createElement("a");
    links.classList.add("nav_link");
    links.textContent = `${page[i]}`;
    links.href = `#${page[i].toLowerCase()}`;
    items.appendChild(links);
    navList.appendChild(items);
  }
  return navList;
};
