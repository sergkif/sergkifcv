import Header from "../header/Header"
import Menu from "../menu/Menu"
import Article from "../article/Article"
import ModalAddArticle from "../modalAddArticle/ModalAddArticle"
import ModalDeleteArticle from "../modalDeleteArticle/ModalDeleteArticle"

const headerElement = document.querySelector(".header");
const menuElement = document.querySelector(".menu");
const articleElement = document.querySelector(".article");

export default class MyCV {
    constructor () {
        this.header = new Header(headerElement);
        this.menu = new Menu(menuElement);
        this.header.subscribe(data => {
            if (data.content == "home") {
                this.clearArticles();
                this.httpGet(`article`).then(function(articles){
                    for (let article of articles) {
                        new Article(article);
                    }
                });
            }
        })
        this.menu.subscribe(data => {
            this.clearArticles();

            this.httpGet(`article/${data.id}`).then(function(article){
                new Article(article);
            });
        })
        this.modal = new ModalAddArticle();
        this.modal = new ModalDeleteArticle();
    }

    async httpGet(theUrl){
        var data = await fetch(theUrl);
        return data.json();
    }

    clearArticles() {
        while(articleElement.firstChild) articleElement.removeChild(articleElement.firstChild);
    }
}