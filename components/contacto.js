
function contactFormComponent(element) {

    const contactFormComponentEl = document.createElement('div');

    contactFormComponentEl.innerHTML =
        `<div class="contact-form">
             <div class="contact-form-container">
                 <div class="contact-form-container__title-container">
                     <h2 class="contact-form-container__title-container--title">CONTACTO</h2>
                 </div>
                 <form class="contact-form-container__form">
                     <label class="contact-form-container__form--fieldset">
                         <span>Nombre</span>
                         <input class="contact-form-container__form--fieldset__input-text" name="nombre" type="text">
                     </label>
                     <label class="contact-form-container__form--fieldset">
                         <span>Email</span>
                         <input class="contact-form-container__form--fieldset__input-text" name="email" type="email">
                     </label>
                     <label class="contact-form-container__form--fieldset">
                         <span>Mensaje</span>
                         <textarea class="contact-form-container__form--fieldset__textarea" name="mensaje"></textarea>
                     </label>
                     <div class="contact-form-container__button-container">
                         <button class="contact-form-container__button-container--button">Enviar</button>
                     </div>
                 </form>
             </div>
        </div>`

    element.appendChild(contactFormComponentEl);


    const myFormEl = document.querySelector(".contact-form-container__form")
    myFormEl.addEventListener('submit', function (evento) {
        evento.preventDefault();


        const formData = new FormData(evento.target);
        const obj = Object.fromEntries(formData.entries());
        console.log(obj);


        const FormFetch = fetch("https://apx-api.vercel.app/api/utils/dwf", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                "to": "medimica@gmail.com",
                "message": `Nombre De Usuario: ${obj.nombre}, 
                Correo Electrónico: ${obj.email}, 
                Mensaje: ${obj.mensaje}`
            })
        });
        FormFetch.then((res) => {
            return res.json()
        }).then((json) => {
            return json
        });
    });
};




