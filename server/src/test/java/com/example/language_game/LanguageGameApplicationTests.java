package com.example.language_game;

import com.example.language_game.models.Answer;
import com.example.language_game.models.Question;
import com.example.language_game.repositories.AnswerRepository;
import com.example.language_game.repositories.QuestionRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;

@SpringBootTest
class LanguageGameApplicationTests {

	@Autowired
	AnswerRepository answerRepository;

	@Autowired
	QuestionRepository questionRepository;

	@Test
	void contextLoads() {
	}


	@Test
	public void createAnswer(){
		Question question1 = new Question("question body", "French");
		questionRepository.save(question1);
		Answer answer1 = new Answer("answer body", false, "answer outcome", question1);
		answerRepository.save(answer1);

	}

//	@Test
//	public void createQuestion(){
//
//	}

}
