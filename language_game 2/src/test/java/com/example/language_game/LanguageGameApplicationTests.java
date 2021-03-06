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
		Answer answer1 = new Answer("test", false, "test");
		answerRepository.save(answer1);

	}

	@Test
	public void createQuestion(){
		Answer answer1 = new Answer("test", false, "test");
		Answer answer2 = new Answer("test", true, "test");
		Answer answer3 = new Answer("test", false, "test");
		Answer answer4 = new Answer("test", false, "test");
		ArrayList<Answer> Q1answers = new ArrayList<Answer>();
		Q1answers.add(answer1);
		Q1answers.add(answer2);
		Q1answers.add(answer3);
		Q1answers.add(answer4);
		Question question1 = new Question("test Q 1", Q1answers);
	}

}
