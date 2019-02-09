import { bind } from 'decko';
import EventObserver from "../EventObserver";

export default class Menu extends EventObserver {
    constructor(element) {
        super();
        this.element = element;
        this.createMenu();
    }

    createMenu () {
        var ul = document.querySelector(".menu__items")
        this.httpGet('http://localhost:8080/article').then(function(articles){
            for (let article of articles) {
                let li = document.createElement('li');
            
                li.classList.add("menu__item");
            
                ul.appendChild(li);
                li.innerHTML = article.title;
                li.dataset.artId = article.id;
            }        
        })

        ul.addEventListener('click', this.sendTitle);
    }
    
    async httpGet(theUrl){
        var data = await fetch(theUrl);
        return data.json();
    }

    @bind
    sendTitle (e) {
        this.broadcast({id: e.target.dataset.artId});
    }
}