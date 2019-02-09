import { bind } from 'decko';

export default class Modal {
    constructor() {
        this.modal = document.querySelector(".modal");
        this.modalOverlay = document.querySelector(".overlay");
        this.closeButton = document.querySelector(".modal__closeButton");
        this.openButton = document.querySelector(".openButton");
        this.title = document.querySelector(".modal__guts_inputTitle");
        this.content = document.querySelector(".modal__guts_inputContent");
        this.submit = document.querySelector(".modal__guts_submit");
        this.modal.classList.toggle("modal__closed");
        this.modalOverlay.classList.toggle("overlay__closed");
        this.toggleMethod(this.closeButton, this.modal, this.modalOverlay);
        this.toggleMethod(this.openButton, this.modal, this.modalOverlay);
        this.submit.addEventListener('click', this.httpPost);
    }

    toggleMethod (element, modal, modalOverlay) {
        element.addEventListener("click", function() {
            modal.classList.toggle("modal__closed");
            modalOverlay.classList.toggle("overlay__closed");
        });
    }

    @bind
    async httpPost() {
        await fetch('article', { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({ title: this.title.value, content: this.content.value})})
        .then(function (response) {
            console.log(response.status);
        });
        this.modal.classList.toggle("modal__closed");
        this.modalOverlay.classList.toggle("overlay__closed");
    }    
}