export default class Article {
    constructor({title, content, image}) {
        this.title = title;
        this.content = content;
        this.image = image;
        this.createArticle(title, content, image);
    }

    createArticle(title, content, image) {
        var container = document.querySelector(".article")

        var h1 = document.createElement("h1");
        h1.classList.add("article__title")
        h1.innerHTML = title;
        container.appendChild(h1);

        var div = document.createElement("div");
        div.classList.add("article__content")
        div.innerHTML = content;
        container.appendChild(div);

        if(image) {
            var img = document.createElement("img");
            img.classList.add("article__image")
            img.src = `img/${image}`;
            container.appendChild(img);
            img.classList.add("article__image_visible");
        }
    }
}