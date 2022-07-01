
// Obtención de Componentes Reutilizables //
function importarComponentesEnServicios() {

    const headerDocumentEl = document.querySelector('.header-component');
    headerComponent(headerDocumentEl);

    const footerDocumentEl = document.querySelector('.footer-component');
    footerComponent(footerDocumentEl);
}
importarComponentesEnServicios();


// Colocación de Data en un Template //
function addServices(params) {

    const template = document.querySelector('#services-to-give-template');
    const container = document.querySelector('.services-to-give-container');

    template.content.querySelector('.services-to-give-container__elements-container--image-container__image')
        .src = params.image;
    template.content.querySelector('.services-to-give-container__elements-container--text-container__subtitle')
        .textContent = params.title;
    template.content.querySelector('.services-to-give-container__elements-container--text-container__paragraph')
        .textContent = params.description;

    var clone = document.importNode(template.content, true);
    container.appendChild(clone);
};


// Obtención de Data a través de Contentful //
function getServices() {
    return fetch(
        "https://cdn.contentful.com/spaces/8bvfqh19epl1/environments/master/entries?access_token=pfDQMAi-K8VEEjPZxoVVGHU9GaqzcrcKQUMx1DylISo&&content_type=premiumServicesSection"
    ).then((res) => {
        return res.json()
    }).then((dataJson) => {
        const fieldsCollection = dataJson.items.map((item) => {

            function obtenerId(idDeMiImagen, data) {
                data.includes.Asset.find((itemsito) => {
                    return itemsito.sys.id == idDeMiImagen
                });
            };
            obtenerId(item.fields.imagencita.sys.id, dataJson);

            const imagenURL = dataJson.includes.Asset[0].fields.file.url;

            return {
                image: imagenURL,
                title: item.fields.titulo,
                description: item.fields.parrafo,
            };
        });
        return fieldsCollection;
    });
};


function main() {
    getServices().then(function (servicesData) {
        for (const i of servicesData) {
            addServices(i)
        };
    });
};
main();


