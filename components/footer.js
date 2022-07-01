
function footerComponent(element) {

    const footerComponentEl = document.createElement('div');

    footerComponentEl.innerHTML =
        `<section class="footer">
            <div class="footer-container">
                <a class="footer-container-home-link" href="./index.html">
                    <img class="footer-container-home-link__logo" src="img/logo-image.png">
                </a>
                <div class="footer-container__items-container">
                    <div class="footer-container__items-container--instagram">
                        <a class="footer-container__items-container--instagram-link"
                            href="https://www.instagram.com/_.micaela69._/" target="_blank">
                            <img class="footer-container__items-container--instagram-link__image" src="./img/instagram-image.png"
                                alt="">
                            <span class="footer-container__items-container--instagram-link__text">Instagram</span>
                        </a>
                    </div>
                    <div class="footer-container__items-container--linkedin">
                        <a class="footer-container__items-container--linkedin-link"
                            href="https://www.linkedin.com/in/micaela-medina-79790321a/" target="_blank">
                            <img class="footer-container__items-container--linkedin-link__image" src="./img/linkedin-image.png"
                                alt="">
                            <span class="footer-container__items-container--linkedin-link__text">LinkedIn</span>
                        </a>
                    </div>
                    <div class="footer-container__items-container--github">
                        <a class="footer-container__items-container--github-link" 
                            href="https://github.com/Micaela777" target="_blank">
                            <img class="footer-container__items-container--github-link__image" src="./img/github-image.png"
                                alt="">
                            <span class="footer-container__items-container--github-link__text">GitHub</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>`

    element.appendChild(footerComponentEl);
};