package com.example.language_game.components;

import com.example.language_game.models.Answer;
import com.example.language_game.models.Question;
import com.example.language_game.repositories.AnswerRepository;
import com.example.language_game.repositories.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.util.ArrayList;


@Component
public class DataLoader  implements ApplicationRunner {

    @Autowired
    QuestionRepository questionRepository;

    @Autowired
    AnswerRepository answerRepository;

    public DataLoader(){
    }

    public void run(ApplicationArguments args){

        Question ptquestion1 = new Question("What is the Portuguese word for 'beer'?", "Portuguese");
        questionRepository.save(ptquestion1);

        Answer ptq1answer1 = new Answer("Pao", false, "No, the right answer is Cerveja.", ptquestion1);
        Answer ptq1answer2 = new Answer("Cerveja", true, "Well done!", ptquestion1);
        Answer ptq1answer3 = new Answer("Cerveza", false, "test", ptquestion1);
        Answer ptq1answer4 = new Answer("Birra", false, "No, that is the Italian word", ptquestion1);
        answerRepository.save(ptq1answer1);
        answerRepository.save(ptq1answer2);
        answerRepository.save(ptq1answer3);
        answerRepository.save(ptq1answer4);


        Question ptquestion2 = new Question("test Q 2", "Portuguese");
        questionRepository.save(ptquestion2);

        Answer ptq2answer1 = new Answer("test", false, "test", ptquestion2);
        Answer ptq2answer2 = new Answer("test", true, "test", ptquestion2);
        Answer ptq2answer3 = new Answer("test", false, "test", ptquestion2);
        Answer ptq2answer4 = new Answer("test", false, "test", ptquestion2);
        answerRepository.save(ptq2answer1);
        answerRepository.save(ptq2answer2);
        answerRepository.save(ptq2answer3);
        answerRepository.save(ptq2answer4);


        Question ptquestion3 = new Question("test Q 3", "Portuguese");
        questionRepository.save(ptquestion3);

        Answer ptq3answer1= new Answer("test", false, "test", ptquestion3);
        Answer ptq3answer2 = new Answer("test", true, "test", ptquestion3);
        Answer ptq3answer3 = new Answer("test", false, "test", ptquestion3);
        Answer ptq3answer4 = new Answer("test", false, "test", ptquestion3);
        answerRepository.save(ptq3answer1);
        answerRepository.save(ptq3answer2);
        answerRepository.save(ptq3answer3);
        answerRepository.save(ptq3answer4);


        Question ptquestion4 = new Question("test Q 4", "Portuguese");
        questionRepository.save(ptquestion4);

        Answer ptq4answer1 = new Answer("test", false, "test", ptquestion4);
        Answer ptq4answer2 = new Answer("test", true, "test", ptquestion4);
        Answer ptq4answer3 = new Answer("test", false, "test", ptquestion4);
        Answer ptq4answer4 = new Answer("test", false, "test", ptquestion4);
        answerRepository.save(ptq4answer1);
        answerRepository.save(ptq4answer2);
        answerRepository.save(ptq4answer3);
        answerRepository.save(ptq4answer4);

        Question ptquestion5 = new Question("test Q 5", "Portuguese");
        questionRepository.save(ptquestion5);

        Answer ptq5answer1 = new Answer("test", false, "test", ptquestion5);
        Answer ptq5answer2 = new Answer("test", true, "test", ptquestion5);
        Answer ptq5answer3 = new Answer("test", false, "test", ptquestion5);
        Answer ptq5answer4 = new Answer("test", false, "test", ptquestion5);
        answerRepository.save(ptq5answer1);
        answerRepository.save(ptq5answer2);
        answerRepository.save(ptq5answer3);
        answerRepository.save(ptq5answer4);


        Question ptquestion6 = new Question("test Q 6", "Portuguese");
        questionRepository.save(ptquestion6);

        Answer ptq6answer1 = new Answer("test", false, "test", ptquestion6);
        Answer ptq6answer2 = new Answer("test", true, "test", ptquestion6);
        Answer ptq6answer3 = new Answer("test", false, "test", ptquestion6);
        Answer ptq6answer4 = new Answer("test", false, "test", ptquestion6);
        answerRepository.save(ptq6answer1);
        answerRepository.save(ptq6answer2);
        answerRepository.save(ptq6answer3);
        answerRepository.save(ptq6answer4);


        // SPANISH QUESTIONS



        Question spquestion1 = new Question("test Q 1", "Spanish");
        questionRepository.save(spquestion1);

        Answer spq1answer1 = new Answer("test", false, "test", spquestion1);
        Answer spq1answer2 = new Answer("test", true, "test", spquestion1);
        Answer spq1answer3 = new Answer("test", false, "test", spquestion1);
        Answer spq1answer4 = new Answer("test", false, "test", spquestion1);
        answerRepository.save(spq1answer1);
        answerRepository.save(spq1answer2);
        answerRepository.save(spq1answer3);
        answerRepository.save(spq1answer4);


        Question spquestion2 = new Question("test Q 2", "Spanish");
        questionRepository.save(spquestion2);

        Answer spq2answer1 = new Answer("test", false, "test", spquestion2);
        Answer spq2answer2 = new Answer("test", true, "test", spquestion2);
        Answer spq2answer3 = new Answer("test", false, "test", spquestion2);
        Answer spq2answer4 = new Answer("test", false, "test", spquestion2);
        answerRepository.save(spq2answer1);
        answerRepository.save(spq2answer2);
        answerRepository.save(spq2answer3);
        answerRepository.save(spq2answer4);


//        Question ptquestion3 = new Question("test Q 3", "Portuguese");
//        questionRepository.save(ptquestion3);
//
//        Answer ptq3answer1= new Answer("test", false, "test", ptquestion3);
//        Answer ptq3answer2 = new Answer("test", true, "test", ptquestion3);
//        Answer ptq3answer3 = new Answer("test", false, "test", ptquestion3);
//        Answer ptq3answer4 = new Answer("test", false, "test", ptquestion3);
//        answerRepository.save(ptq3answer1);
//        answerRepository.save(ptq3answer2);
//        answerRepository.save(ptq3answer3);
//        answerRepository.save(ptq3answer4);
//
//
//        Question ptquestion4 = new Question("test Q 4", "Portuguese");
//        questionRepository.save(ptquestion4);
//
//        Answer ptq4answer1 = new Answer("test", false, "test", ptquestion4);
//        Answer ptq4answer2 = new Answer("test", true, "test", ptquestion4);
//        Answer ptq4answer3 = new Answer("test", false, "test", ptquestion4);
//        Answer ptq4answer4 = new Answer("test", false, "test", ptquestion4);
//        answerRepository.save(ptq4answer1);
//        answerRepository.save(ptq4answer2);
//        answerRepository.save(ptq4answer3);
//        answerRepository.save(ptq4answer4);
//
//        Question ptquestion5 = new Question("test Q 5", "Portuguese");
//        questionRepository.save(ptquestion5);
//
//        Answer ptq5answer1 = new Answer("test", false, "test", ptquestion5);
//        Answer ptq5answer2 = new Answer("test", true, "test", ptquestion5);
//        Answer ptq5answer3 = new Answer("test", false, "test", ptquestion5);
//        Answer ptq5answer4 = new Answer("test", false, "test", ptquestion5);
//        answerRepository.save(ptq5answer1);
//        answerRepository.save(ptq5answer2);
//        answerRepository.save(ptq5answer3);
//        answerRepository.save(ptq5answer4);
//
//
//        Question ptquestion6 = new Question("test Q 6", "Portuguese");
//        questionRepository.save(ptquestion6);
//
//        Answer ptq6answer1 = new Answer("test", false, "test", ptquestion6);
//        Answer ptq6answer2 = new Answer("test", true, "test", ptquestion6);
//        Answer ptq6answer3 = new Answer("test", false, "test", ptquestion6);
//        Answer ptq6answer4 = new Answer("test", false, "test", ptquestion6);
//        answerRepository.save(ptq6answer1);
//        answerRepository.save(ptq6answer2);
//        answerRepository.save(ptq6answer3);
//        answerRepository.save(ptq6answer4);





    }



}
