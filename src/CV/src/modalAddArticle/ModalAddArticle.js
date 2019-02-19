import { bind } from 'decko';

export default class ModalAddArticle {
    constructor() {
        this.modal = document.querySelector(".modalAddArticle");
        this.modalOverlay = document.querySelector(".overlayAddArticle");
        this.closeButton = document.querySelector(".modalAddArticle__closeButton");
        this.openButton = document.querySelector(".openButtonAddArticle");
        this.title = document.querySelector(".gutsAddArticle__inputTitle");
        this.content = document.querySelector(".gutsAddArticle__inputContent");
        this.submit = document.querySelector(".gutsAddArticle__submit");
        this.toggleMethod(this.closeButton, this.modal, this.modalOverlay);
        this.toggleMethod(this.openButton, this.modal, this.modalOverlay);
        this.submit.addEventListener('click', this.httpPost);
    }

    toggleMethod (element, modal, modalOverlay) {
        element.addEventListener("click", function() {
            modal.classList.toggle("modalAddArticle__open");
            modalOverlay.classList.toggle("overlayAddArticle__open");
        });
    }

    @bind
    async httpPost() {
        await fetch('article', { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({ title: this.title.value, content: this.content.value})})
        .then(function (response) {
            console.log(response.status);
        });
        this.modal.classList.toggle("modalAddArticle__open");
        this.modalOverlay.classList.toggle("overlayAddArticle__open");
    }    
}