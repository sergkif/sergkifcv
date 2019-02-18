package com.heroku.sergkifcv.controllers;

import com.heroku.sergkifcv.entities.Article;
import com.heroku.sergkifcv.exceptions.NotFoundException;
import com.heroku.sergkifcv.services.ArticlesRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("article")
public class ArticlesController {
    @Autowired
    private ArticlesRepository articlesRepository;

    @GetMapping
    public List<Article> findAll(){
        return articlesRepository.findAll();
    }

    @GetMapping("{id}")
    public Article getArticleById(@PathVariable("id") Article article){
        return article;
    }

    @PostMapping
    public Article save(@RequestBody Article article) {
        return articlesRepository.save(article);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable("id") long id) {
        articlesRepository.deleteById(id);
    }
}
