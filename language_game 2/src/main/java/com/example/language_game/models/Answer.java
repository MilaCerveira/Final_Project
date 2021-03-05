package com.example.language_game.models;


import javax.persistence.Column;
import javax.persistence.Id;

public class Answer {

    @Id
    private Long id;

    @Column(name="answerBody")
    private String answerBody;

    @Column(name="correct")
    private boolean correct;

    @Column(name="outcome")
    private String outcome;

    public Answer(String answerBody, boolean correct, String outcome) {
        this.answerBody = answerBody;
        this.correct = correct;
        this.outcome = outcome;
    }
    public Answer(){}

    public Long getID(){
        return id;
    }



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
