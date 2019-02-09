package com.heroku.sergkifcv.controllers;

import com.heroku.sergkifcv.entities.Article;
import com.heroku.sergkifcv.services.ArticlesRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("article")
public class ArticlesController {
    @Autowired
    private ArticlesRepository articlesRepository;

    @GetMapping
    public List<Article> getAll(){
        return articlesRepository.findAll();
    }

    @GetMapping("{id}")
    public Article getArticleById(@PathVariable("id") Article article){
        return article;
    }

    @PostMapping
    public Article create(@RequestBody Article article) {
        System.out.println(article);
        return articlesRepository.save(article);
    }

    @PutMapping("{id}")
    public Article update(
            @PathVariable("id") Article articleFromDB,
            @RequestBody Article article
    ) {
        BeanUtils.copyProperties(article, articleFromDB, "id");

        return articlesRepository.save(article);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable("id") Article article) {
        articlesRepository.delete(article);
    }
}
