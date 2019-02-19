import { bind } from 'decko';

export default class GutsDeleteArticle {
    constructor() {
        this.select = document.querySelector(".gutsDeleteArticle");
        this.createList(this.select);
        this.submit = document.querySelector(".gutsDeleteArticleSubmit");
        this.submit.addEventListener('click', this.httpDelete);
    }

    createList (select) {
        this.httpGet('article').then(function(articles){
            for (let article of articles) {
                let option = document.createElement('option');
            
                option.classList.add("gutsDeleteArticle__item");
            
                select.appendChild(option);
                option.innerHTML = article.title;
                option.dataset.artId = article.id;
            }        
        })
    }

    @bind
    async httpDelete() {
        this.select = document.querySelector(".gutsDeleteArticle");
        await fetch(`article/ + ${this.select.options[this.select.selectedIndex].dataset.artId}`, { method: 'DELETE'})
        .then(function (response) {
            console.log(response.status);
        });
        this.modal = document.querySelector(".modalDeleteArticle");
        this.modalOverlay = document.querySelector(".overlayDeleteArticle");
        this.modal.classList.toggle("modalDeleteArticle__open");
        this.modalOverlay.classList.toggle("overlayDeleteArticle__open");
    }
    
    async httpGet(theUrl){
        var data = await fetch(theUrl);
        return data.json();
    }
}