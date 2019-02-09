package com.heroku.sergkifcv.services;

import com.heroku.sergkifcv.entities.Article;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface ArticlesRepository extends CrudRepository<Article, Long> {
    Optional<Article> findById(Long id);
    List<Article> findAll();
}