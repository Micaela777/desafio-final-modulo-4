
function headerComponent(element) {

    const headerComponentEl = document.createElement('div');

    headerComponentEl.innerHTML =
        `<header class="header">
             <div class="header-container">
                 <a class="header-container__link-logo" href="./index.html">
                     <img class="header-container__link-logo--img" src="./img/logo-image.png" alt="">
                 </a>
                 <button class="header-container__open-window-button">
                     <img class="header-container__open-window-button--menu-img" src="./img/menu-logo-image.png" alt="">
                 </button>
                 <div class="header-container__window">
                     <button class="header-container__window--close-window-button">
                         <img class="header-container__window--close-window-button__img" src="./img/close-menu-logo-image.png" alt="">
                     </button>
                     <div class="header-container__window--content">
                         <a class="header-container__window--content__link-text" href="./portfolio.html">܁ Portfolio ܁</a>
                         <a class="header-container__window--content__link-text" href="./servicios.html">܁ Servicios ܁</a>
                         <a class="header-container__window--content__link-text" href="./contacto.html">܁ Contacto ܁</a>
                     </div>
                 </div>
                 <div class="header-container__menu-container">
                     <a class="header-container__menu-container--portfolio" href="./portfolio.html">Portfolio</a>
                     <a class="header-container__menu-container--services" href="./servicios.html">Servicios</a>
                     <a class="header-container__menu-container--contact" href="./contacto.html">Contacto</a>
                 </div>
             </div>
        </header>`



    element.appendChild(headerComponentEl);

    const botonAbreVentanaEl = document.querySelector('.header-container__open-window-button');
    const botonCierraVentanaEl = document.querySelector('.header-container__window--close-window-button');
    const ventanaEl = document.querySelector('.header-container__window');

    botonAbreVentanaEl.addEventListener('click', () => {
        ventanaEl.style.display = "inherit"
    });

    botonCierraVentanaEl.addEventListener('click', () => {
        ventanaEl.style.display = ""
    });
};
