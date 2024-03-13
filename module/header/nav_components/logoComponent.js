export const logoComponent = () => {
  const logo = `<div>
  <a href="./index.html" class="logo">
   <button class="button_logo__svg"> <svg width="40" height="35">
                <use href="./assets/sprite.svg#icon-LogoBook"></use>
              </svg>
              </button>
              <span class="logo_span">Finance</span>
              Ledger
  </a>
    </div>`;

  return logo;
};
