package com.example.language_game.repositories;

import com.example.language_game.models.Answer;
import com.example.language_game.models.Question;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionRepository extends JpaRepository<Question, Long> {
}
