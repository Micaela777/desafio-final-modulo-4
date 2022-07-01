
// Obtención de Componentes Reutilizables //
function importarComponentesEnPortfolio() {

    const headerDocumentEl = document.querySelector('.header-component');
    headerComponent(headerDocumentEl);

    const footerDocumentEl = document.querySelector('.footer-component');
    footerComponent(footerDocumentEl);
}
importarComponentesEnPortfolio();


// Colocación de Data en un Template //
function addPortfolio(params) {

    const template = document.querySelector('#portfolio-to-show-template');
    const container = document.querySelector('.portfolio-to-show-container');

    template.content.querySelector('.portfolio-to-show-container__elements-container--image-container__image')
        .src = params.image;
    template.content.querySelector('.portfolio-to-show-container__elements-container--text-container__subtitle')
        .textContent = params.title;
    template.content.querySelector('.portfolio-to-show-container__elements-container--text-container__paragraph')
        .textContent = params.description;
    template.content.querySelector('.portfolio-to-show-container__elements-container--text-container__link')
        .href = params.url;

    var clone = document.importNode(template.content, true);
    container.appendChild(clone);
};


// Obtención de Data a través de Contentful //
function getPortfolio() {
    return fetch(
        "https://cdn.contentful.com/spaces/8bvfqh19epl1/environments/master/entries?access_token=pfDQMAi-K8VEEjPZxoVVGHU9GaqzcrcKQUMx1DylISo&&content_type=portfolioSection"
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
                url: item.fields.url
            };
        });
        return fieldsCollection;
    });
};



function main() {
    getPortfolio().then(function (portfolioData) {
        for (const i of portfolioData) {
            addPortfolio(i)
        };
    });
};
main();
