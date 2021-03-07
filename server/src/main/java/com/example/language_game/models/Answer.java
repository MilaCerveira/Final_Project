package com.example.language_game.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.Id;

import javax.persistence.*;
import java.io.Serializable;


@Entity
@Table(name="answers")
public class Answer implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    //@Column(name = "id")
    private Long id;

    @Column(name="answerBody")
    private String answerBody;

    @Column(name="correct")
    private boolean correct;

    @Column(name="outcome")
    private String outcome;

    @JsonIgnoreProperties(value="answers")
    @ManyToOne
    @JoinColumn(name = "question_id", nullable = false)
    private Question question;

    public Answer(String answerBody, boolean correct, String outcome, Question question) {
        this.answerBody = answerBody;
        this.correct = correct;
        this.outcome = outcome;
        this.question = question;
    }
    public Answer(){}



    public String getAnswerBody() {
        return answerBody;
    }

    public void setAnswerBody(String answerBody) {
        this.answerBody = answerBody;
    }

    public boolean isCorrect() {
        return correct;
    }

    public void setCorrect(boolean correct) {
        this.correct = correct;
    }

    public String getOutcome() {
        return outcome;
    }

    public void setOutcome(String outcome) {
        this.outcome = outcome;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Question getQuestion() {
        return question;
    }

    public void setQuestion(Question question) {
        this.question = question;
    }
}

//import javax.persistence.*;
//
//@Entity
//@Table(name = "answers")
//public class Answer {
//
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    @Column(name = " ")
//    private String name;
//
//
//    @ManyToOne
//    @JoinColumn(name = " ", nullable = false)
//    private Answer answer;
//
//    public Answer(String name) {
//        this.name = name;
//
//
//    public Answer() {
//    }
//
//
//    public String getName() {
//        return name;
//    }
//
//    public void setName(String name) {
//        this.name = name;
//    }
//
//
//
//}
//}name
