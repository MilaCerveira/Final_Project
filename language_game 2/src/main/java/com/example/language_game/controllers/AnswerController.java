package com.example.language_game.controllers;


import com.example.language_game.models.Answer;
import com.example.language_game.repositories.AnswerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class AnswerController {

//    @Autowired
//    AnswerController answerController;

    @Autowired
    AnswerRepository answerrepository;


    @GetMapping("/answers")
    public ResponseEntity<List<Answer>> getAllAnswers(){
    return new ResponseEntity<>(answerrepository.findAll(), HttpStatus.OK);}


}







