package com.example.language_game.components;

import com.example.language_game.models.Answer;
import com.example.language_game.repositories.AnswerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;


@Component
public class DataLoader  implements ApplicationRunner {

    @Autowired
    AnswerRepository answerRepository;

    public DataLoader(){
    }

    public void run(ApplicationArguments args){

        Answer answer1 = new Answer("test", false, "test");
        answerRepository.save(answer1);
    }



}
