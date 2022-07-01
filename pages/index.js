
// Obtención de Componentes Reutilizables //
function impotarComponentesEnElIndex() {

    const headerDocumentEl = document.querySelector('.header-component');
    headerComponent(headerDocumentEl);

    const contactFormDocumentEl = document.querySelector('.contact-form-section');
    contactFormComponent(contactFormDocumentEl);
    contactFormDocumentEl.querySelector(".contact-form-container__title-container--title")
        .textContent = "Escríbeme"

    const footerDocumentEl = document.querySelector('.footer-component');
    footerComponent(footerDocumentEl);
}
impotarComponentesEnElIndex();


// Colocación de Data en un Template //
function addWelcomeSection(params) {

    const template = document.querySelector('#welcome-section-template');
    const container = document.querySelector('.welcome-section-container');

    template.content.querySelector('.welcome-section-container__text-container--main-title')
        .textContent = params.title;
    template.content.querySelector('.welcome-section-container__text-container--subtitle')
        .textContent = params.subtitle;

    var clone = document.importNode(template.content, true);
    container.appendChild(clone);
};

function addAboutMeSection(params) {

    const template = document.querySelector('#about-me-section-template');
    const container = document.querySelector('.about-me-section');

    template.content.querySelector('.about-me-section-container__image-container--image')
        .src = params.image;
    template.content.querySelector('.about-me-section-container__text-container--main-title')
        .textContent = params.title;
    template.content.querySelector('.about-me-section-container__text-container--paragraph')
        .textContent = params.description;

    var clone = document.importNode(template.content, true);
    container.appendChild(clone);
};

function addServices(params) {

    const template = document.querySelector('#my-services-section-template');
    const container = document.querySelector('.my-services-section-container__elements-container');

    template.content.querySelector('.my-services-section-container__elements-container--items-container__image')
        .src = params.image;
    template.content.querySelector('.my-services-section-container__elements-container--items-container__subtitle')
        .textContent = params.title;
    template.content.querySelector('.my-services-section-container__elements-container--items-container__paragraph')
        .textContent = params.description;

    var clone = document.importNode(template.content, true);
    container.appendChild(clone);
};


// Obtención de Data a través de Contentful //
function getWelcomeSectionData() {
    return fetch(
        "https://cdn.contentful.com/spaces/8bvfqh19epl1/environments/master/entries?access_token=pfDQMAi-K8VEEjPZxoVVGHU9GaqzcrcKQUMx1DylISo&&content_type=welcomeSection"
    ).then((res) => {
        return res.json()
    }).then((dataJson) => {
        const fieldsCollection = dataJson.items.map((item) => {
            return {
                title: item.fields.titulo,
                subtitle: item.fields.subtitulo,
            };
        });
        return fieldsCollection;
    });
};

function getAboutMeSectionData() {
    return fetch(
        "https://cdn.contentful.com/spaces/8bvfqh19epl1/environments/master/entries?access_token=pfDQMAi-K8VEEjPZxoVVGHU9GaqzcrcKQUMx1DylISo&&content_type=aboutMeSection"
    ).then((res) => {
        return res.json()
    }).then((dataJson) => {
        const fieldsCollection = dataJson.items.map((item) => {

            function obtenerId(idDeMiImagen, data) {
                data.includes.Asset.find((itemsito) => {
                    return itemsito.sys.id == idDeMiImagen
                });
            };
            obtenerId(item.fields.troyanoSepsi.sys.id, dataJson);

            const imagenURL = dataJson.includes.Asset[0].fields.file.url;

            return {
                image: imagenURL,
                title: item.fields.titulo,
                description: item.fields.parrafo
            };
        });
        return fieldsCollection;
    });
};

function getServices() {
    return fetch(
        "https://cdn.contentful.com/spaces/8bvfqh19epl1/environments/master/entries?access_token=pfDQMAi-K8VEEjPZxoVVGHU9GaqzcrcKQUMx1DylISo&&content_type=myServicesSection"
    ).then((res) => {
        return res.json()
    }).then((dataJson) => {
        const fieldsCollection = dataJson.items.map((item) => {

            function obtenerId(idDeMiImagen, data) {
                data.includes.Asset.find((itemsito) => {
                    return itemsito.sys.id == idDeMiImagen
                });
            };
            obtenerId(item.fields.stickersito.sys.id, dataJson);

            const imagenURL = dataJson.includes.Asset[0].fields.file.url;

            return {
                image: imagenURL,
                title: item.fields.subtitulo,
                description: item.fields.parrafo
            };
        });
        return fieldsCollection;
    });
};



function main() {

    getWelcomeSectionData().then(function (welcomeText) {
        for (const i of welcomeText) {
            addWelcomeSection(i)
        };
    });

    getAboutMeSectionData().then(function (aboutMeEls) {
        for (const i of aboutMeEls) {
            addAboutMeSection(i)
        };
    });

    getServices().then(function (services) {
        for (const i of services) {
            addServices(i)
        };
    });
};
main();


