package com.example.language_game.repositories;

import com.example.language_game.models.Answer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AnswerRepository extends JpaRepository<Answer, Long> {

    public List<Answer> findByCorrect(boolean correct);

}



