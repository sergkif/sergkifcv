import GutsDeleteArticle from "../gutsDeleteArticle/GutsDeleteArticle"

export default class ModalDeleteArticle {
    constructor() {
        this.modal = document.querySelector(".modalDeleteArticle");
        this.modalOverlay = document.querySelector(".overlayDeleteArticle");
        this.closeButton = document.querySelector(".modalDeleteArticle__closeButton");
        this.openButton = document.querySelector(".openButtonDeleteArticle");
        this.toggleMethod(this.closeButton, this.modal, this.modalOverlay);
        this.toggleMethod(this.openButton, this.modal, this.modalOverlay);
        this.guts = new GutsDeleteArticle();
    }

    toggleMethod (element, modal, modalOverlay) {
        element.addEventListener("click", function() {
            modal.classList.toggle("modalDeleteArticle__open");
            modalOverlay.classList.toggle("overlayDeleteArticle__open");
        });
    }
}