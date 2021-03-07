package com.example.language_game.controllers;


import com.example.language_game.models.Answer;
import com.example.language_game.models.Question;
import com.example.language_game.repositories.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class QuestionController {

    @Autowired
    QuestionRepository questionRepository;

    @GetMapping("/questions")
    public ResponseEntity<List<Question>> getAllQuestions() {
        return new ResponseEntity<>(questionRepository.findAll(), HttpStatus.OK);
    }


    @GetMapping("/questions/")
    public ResponseEntity<List<Question>> findBylanguage(
            @RequestParam(name = "language") String language) {
        return new ResponseEntity<>(questionRepository.findBylanguage(language), HttpStatus.OK);


    }
}

