package com.example.language_game.models;


import javax.persistence.Id;
import javax.persistence.*;
import java.util.ArrayList;


@Entity
@Table(name="questions")
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name="body")
    private String body;

    @Column(name="answerList")
    private ArrayList<Answer> answers;


    public Question(String body, ArrayList<Answer> answers) {
        this.body = body;
        this.answers = new ArrayList<Answer>();
    }

    public Question(){};

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public ArrayList<Answer> getAnswers() {
        return answers;
    }

    public void setAnswers(ArrayList<Answer> answers) {
        this.answers = answers;
    }
}
