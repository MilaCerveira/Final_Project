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
        Answer ptq1answer3 = new Answer("Cerveza", false, "Close! The right answer is 'cerveja.", ptquestion1);
        Answer ptq1answer4 = new Answer("Birra", false, "No, that is the Italian word.", ptquestion1);
        answerRepository.save(ptq1answer1);
        answerRepository.save(ptq1answer2);
        answerRepository.save(ptq1answer3);
        answerRepository.save(ptq1answer4);


        Question ptquestion2 = new Question("What is the Portugese word for 'hand'?", "Portuguese");
        questionRepository.save(ptquestion2);

        Answer ptq2answer1 = new Answer("mal", false, "Close, the answer is 'mão'", ptquestion2);
        Answer ptq2answer2 = new Answer("mau", false, "Nearly- the answer is 'mão'", ptquestion2);
        Answer ptq2answer3 = new Answer("mão", true, "That's right!", ptquestion2);
        Answer ptq2answer4 = new Answer("maleta", false, "No. 'Mão' means hand in Portuguese.", ptquestion2);
        answerRepository.save(ptq2answer1);
        answerRepository.save(ptq2answer2);
        answerRepository.save(ptq2answer3);
        answerRepository.save(ptq2answer4);


        Question ptquestion3 = new Question("How do you say 'that’s cool' in Portuguese?", "Portuguese");
        questionRepository.save(ptquestion3);

        Answer ptq3answer1= new Answer("Que legal", true, "Correct! You are 'que legal'!", ptquestion3);
        Answer ptq3answer2 = new Answer("Com licença", false, "No, the right answer is Que legal", ptquestion3);
        Answer ptq3answer3 = new Answer("Desculpa ", false, "No, the right answer is Que legal", ptquestion3);
        Answer ptq3answer4 = new Answer("Se cuida", false, "No, the right answer is Que legal", ptquestion3);
        answerRepository.save(ptq3answer1);
        answerRepository.save(ptq3answer2);
        answerRepository.save(ptq3answer3);
        answerRepository.save(ptq3answer4);


        Question ptquestion4 = new Question("How do you say knife in Portuguese?", "Portuguese");
        questionRepository.save(ptquestion4);

        Answer ptq4answer1 = new Answer("colher", false, "No. Believe it or not, the Portuguese word for knife is 'faca'.", ptquestion4);
        Answer ptq4answer2 = new Answer("prato", false, "No. Believe it or not, the Portuguese word for knife is 'faca'.", ptquestion4);
        Answer ptq4answer3 = new Answer("faca", true, "Correct!", ptquestion4);
        Answer ptq4answer4 = new Answer("xícara", false, "No. Believe it or not, the Portuguese word for knife is 'faca'.", ptquestion4);
        answerRepository.save(ptq4answer1);
        answerRepository.save(ptq4answer2);
        answerRepository.save(ptq4answer3);
        answerRepository.save(ptq4answer4);

        Question ptquestion5 = new Question("How do you say let’s leave in Portuguese?", "Portuguese");
        questionRepository.save(ptquestion5);

        Answer ptq5answer1 = new Answer("Fofo", false, "No. The right answer is 'Vamos embora.", ptquestion5);
        Answer ptq5answer2 = new Answer("Ensolarado", false, "No. The right answer is 'Vamos embora.", ptquestion5);
        Answer ptq5answer3 = new Answer("Vamos embora", true, "That's the right answer!", ptquestion5);
        Answer ptq5answer4 = new Answer("Ventando", false, "No. The right answer is 'Vamos embora.", ptquestion5);
        answerRepository.save(ptq5answer1);
        answerRepository.save(ptq5answer2);
        answerRepository.save(ptq5answer3);
        answerRepository.save(ptq5answer4);


        Question ptquestion6 = new Question("How do you say 'homework'?", "Portuguese");
        questionRepository.save(ptquestion6);

        Answer ptq6answer1 = new Answer("Caderno", false, "No, the correct answer is 'lição de casa'", ptquestion6);
        Answer ptq6answer2 = new Answer("Fones de ouvido", false, "No, the correct answer is 'lição de casa'", ptquestion6);
        Answer ptq6answer3 = new Answer("Aspirador de Pó", false, "No, the correct answer is 'lição de casa'", ptquestion6);
        Answer ptq6answer4 = new Answer("Lição de casa", true, "Correct!", ptquestion6);
        answerRepository.save(ptq6answer1);
        answerRepository.save(ptq6answer2);
        answerRepository.save(ptq6answer3);
        answerRepository.save(ptq6answer4);


        // SPANISH QUESTIONS



        Question spquestion1 = new Question("What is the Spanish word for 'station'?", "Spanish");
        questionRepository.save(spquestion1);

        Answer spq1answer1 = new Answer("Estación", true, "correct!", spquestion1);
        Answer spq1answer2 = new Answer("Excusado", false, "No, that is a toilet! The right answer is 'Estación'", spquestion1);
        Answer spq1answer3 = new Answer("Esposas", false, "The right answer is 'Estación'", spquestion1);
        Answer spq1answer4 = new Answer("Escoba", false, "The right answer is 'Estación'", spquestion1);
        answerRepository.save(spq1answer1);
        answerRepository.save(spq1answer2);
        answerRepository.save(spq1answer3);
        answerRepository.save(spq1answer4);


        Question spquestion2 = new Question("What is the Spanish word for 'passport'?", "Spanish");
        questionRepository.save(spquestion2);

        Answer spq2answer1 = new Answer("Persuadir", false, "No, the right answer is 'pasaporte'", spquestion2);
        Answer spq2answer2 = new Answer("Pronóstico", false, "No, the right answer is 'pasaporte'", spquestion2);
        Answer spq2answer3 = new Answer("Pasaporte", true, "correct", spquestion2);
        Answer spq2answer4 = new Answer("Pacense", false, "No, the right answer is 'pasaporte'", spquestion2);
        answerRepository.save(spq2answer1);
        answerRepository.save(spq2answer2);
        answerRepository.save(spq2answer3);
        answerRepository.save(spq2answer4);
//
//
//        Question spquestion3 = new Question("What is the Spanish word for 'exit'?", "Portuguese");
//        questionRepository.save(spquestion3);
//
//        Answer spq3answer1= new Answer("Susurrar", false, "No, the Spanish for word for exit is 'salida'.", spquestion3);
//        Answer spq3answer2 = new Answer("Salida", true, "Correct.", spquestion3);
//        Answer spq3answer3 = new Answer("Zapatos", false, "No, the Spanish for word for exit is 'salida'.", spquestion3);
//        Answer spq3answer4 = new Answer("Siempre", false, "No, the Spanish for word for exit is 'salida'.", spquestion3);
//        answerRepository.save(spq3answer1);
//        answerRepository.save(spq3answer2);
//        answerRepository.save(spq3answer3);
//        answerRepository.save(spq3answer4);
//
//
//        Question spquestion4 = new Question("What is the Spanish word for museum?", "Spanish");
//        questionRepository.save(spquestion4);
//
//        Answer spq4answer1 = new Answer("museo", true, "Correct!", spquestion4);
//        Answer spq4answer2 = new Answer("miercoles", false, "No, the answer is 'museo'.", spquestion4);
//        Answer spq4answer3 = new Answer("martes", false, "No, the answer is 'museo'.", spquestion4);
//        Answer spq4answer4 = new Answer("manzana", false, "No, the answer is 'museo'.", spquestion4);
//        answerRepository.save(spq4answer1);
//        answerRepository.save(spq4answer2);
//        answerRepository.save(spq4answer3);
//        answerRepository.save(spq4answer4);
//
//        Question spquestion5 = new Question("How do you say 'I don't know' in Spanish?", "Spanish");
//        questionRepository.save(ptquestion5);
//
//        Answer spq5answer1 = new Answer("Lo siento", false, "No, the answer is 'no lo sé'.", spquestion5);
//        Answer spq5answer2 = new Answer("Escape de incendio", false, "No, the answer is 'no lo sé'.", spquestion5);
//        Answer spq5answer3 = new Answer("Espejo retrovisor", false, "No, the answer is 'no lo sé'.", spquestion5);
//        Answer spq5answer4 = new Answer("No Lo Sé", true, "That's the right answer!", spquestion5);
//        answerRepository.save(spq5answer1);
//        answerRepository.save(spq5answer2);
//        answerRepository.save(spq5answer3);
//        answerRepository.save(spq5answer4);
//
//
//        Question spquestion6 = new Question("What is the Spanish word for mountain?", "Spanish");
//        questionRepository.save(spquestion6);
//
//        Answer spq6answer1 = new Answer("Mirar", false, "The right answer is montaña.", spquestion6);
//        Answer spq6answer2 = new Answer("Mar", false, "The right answer is montaña.", spquestion6);
//        Answer spq6answer3 = new Answer("Montaña", true, "Correct!", spquestion6);
//        Answer spq6answer4 = new Answer("Medianoche", false, "The right answer is montaña.", spquestion6);
//        answerRepository.save(ptq6answer1);
//        answerRepository.save(ptq6answer2);
//        answerRepository.save(ptq6answer3);
//        answerRepository.save(ptq6answer4);
//
//
//
//                Question frquestion1 = new Question("How do you ask for the bill (ie in a restaurant) in French?", "French");
//        questionRepository.save(frquestion1);
//
//        Answer frq1answer1 = new Answer("Le bill, s’il vous plait", false, "No, you should ask for 'l'addition'.", frquestion1);
//        Answer frq1answer2 = new Answer("L’addition, s’il vous plait", true, "That's right!", frquestion1);
//        Answer frq1answer3 = new Answer("Le tcheque, s’il vous plait", false, "No, you should ask for 'l'addition'.", frquestion1);
//        Answer frq1answer4 = new Answer("Le menu, s’il vous plait", false, "No, you should ask for 'l'addition'.", frquestion1);
//        answerRepository.save(frq1answer1);
//        answerRepository.save(frq1answer2);
//        answerRepository.save(frq1answer3);
//        answerRepository.save(frq1answer4);
//
//
//        Question frquestion2 = new Question("What does 'Vous devrriez vous excuser' mean?", "French");
//        questionRepository.save(frquestion2);
//
//        Answer frq2answer1 = new Answer("'No more of your excuses'", false, "No, it means 'you should apologise'.", frquestion2);
//        Answer frq2answer2 = new Answer("Shut up", true, "No, it means 'you should apologise'.", frquestion2);
//        Answer frq2answer3 = new Answer("You should have an excuse", false, "No, it means 'you should apologise'.", frquestion2);
//        Answer frq2answer4 = new Answer("'You should apologise'", true, "Parfait!", frquestion2);
//        answerRepository.save(spq2answer1);
//        answerRepository.save(spq2answer2);
//        answerRepository.save(spq2answer3);
//        answerRepository.save(spq2answer4);
//
//
//        Question frquestion3 = new Question("If someone says 'J’ai une blessure à la jambe’, what do they mean?", "French");
//        questionRepository.save(frquestion3);
//
//        Answer frq3answer1= new Answer("I ate too much ham.", false, "Wrong, it means 'I have a leg injury.'", frquestion3);
//        Answer frq3answer2 = new Answer("I need to go to Mass soon.", false, "Wrong, it means 'I have a leg injury.'", frquestion3);
//        Answer frq3answer3 = new Answer("My toilet is leaking.", false, "Wrong, it means 'I have a leg injury.'", frquestion3);
//        Answer frq3answer4 = new Answer("I have a leg injury.", true, "That's right!", frquestion3);
//        answerRepository.save(frq3answer1);
//        answerRepository.save(frq3answer2);
//        answerRepository.save(frq3answer3);
//        answerRepository.save(frq3answer4);
//
//
//        Question frquestion4 = new Question("What does ‘J’aime bien jouer aux échecs’ mean?", "French");
//        questionRepository.save(frquestion4);
//
//        Answer frq4answer1 = new Answer("I like to pretend to be a loser.", false, "No, it means 'I like playing chess.'", frquestion4);
//        Answer frq4answer2 = new Answer("I like playing chess.", true, "Correct", frquestion4);
//        Answer frq4answer3 = new Answer("I like gambling.", false, "No, it means 'I like playing chess.'", frquestion4);
//        Answer frq4answer4 = new Answer("I like ballroom dancing.", false, "No, it means 'I like playing chess.'", frquestion4);
//        answerRepository.save(frq4answer1);
//        answerRepository.save(frq4answer2);
//        answerRepository.save(frq4answer3);
//        answerRepository.save(frq4answer4);
//
//        Question frquestion5 = new Question("How do you say 'free' in French (as in, it costs nothing)?", "French");
//        questionRepository.save(frquestion5);
//
//        Answer frq5answer1 = new Answer("très bon marché", false, "No, the answer is 'gratuit'.", frquestion5);
//        Answer frq5answer2 = new Answer("coûteux/coûteuse ", true, "No, the answer is 'gratuit'.", frquestion5);
//        Answer frq5answer3 = new Answer("libre", false, "No, the answer is 'gratuit'.", frquestion5);
//        Answer frq5answer4 = new Answer("gratuit", false, "Correct!", frquestion5);
//        answerRepository.save(frq5answer1);
//        answerRepository.save(frq5answer2);
//        answerRepository.save(frq5answer3);
//        answerRepository.save(frq5answer4);
//
//
//        Question frquestion6 = new Question("What is 'une grève'?", "French");
//        questionRepository.save(frquestion6);
//
//        Answer frq6answer1 = new Answer("A strike", true, "That's right!", ptquestion6);
//        Answer frq6answer2 = new Answer("A bowl", false, "No, it means a strike", ptquestion6);
//        Answer frq6answer3 = new Answer("A coat", false, "No, it means a strike", ptquestion6);
//        Answer frq6answer4 = new Answer("A pill", false, "No, it means a strike", ptquestion6);
//        answerRepository.save(frq6answer1);
//        answerRepository.save(frq6answer2);
//        answerRepository.save(frq6answer3);
//        answerRepository.save(frq6answer4);
//
//
//        Question huquestion1 = new Question("What is the Hungarian word for ‘house’?", "Hungarian");
//                questionRepository.save(huquestion1);
//
//        Answer huq1answer1 = new Answer("Haus", false, "No, the right answer is ‘Ház", huquestion1);
//        Answer huq1answer2 = new Answer("Casa", false, "No, that is the Romanian word", huquestion1);
//        Answer huq1answer3 = new Answer("Ház", true, "Well done", huquestion1);
//        Answer huq1answer4 = new Answer("Dom", false, "No, that is the Russian word", huquestion1);
//        answerRepository.save(huq1answer1);
//        answerRepository.save(huq1answer2);
//        answerRepository.save(huq1answer3);
//        answerRepository.save(huq1answer4);
//
//        Question huquestion2 = new Question("What is the Hungarian word for 'sun'?", "Hungarian");
//                questionRepository.save(ptquestion2);
//        Answer huq2answer1 = new Answer("Nap", true, "Well done", huquestion2);
//        Answer huq2answer2 = new Answer("Sol", false, "No, that is the Spanish word", huquestion2);
//        Answer huq2answer3 = new Answer("Sonne", false, "No, that is the German word", huquestion2);
//        Answer huq2answer4 = new Answer("Aurinko", false, "No, the right answer is 'Nap'", huquestion2);
//        answerRepository.save(huq2answer1);
//        answerRepository.save(huq2answer2);
//        answerRepository.save(huq2answer3);
//        answerRepository.save(huq2answer4);
//
//        Question huquestion3 = new Question("What is the Hungarian word for 'Milk'?",  "Hungarian");
//                questionRepository.save(huquestion3);
//        Answer huq3answer1 = new Answer("Mlijeko", false, "No that is the Croatian word", huquestion3);
//        Answer huq3answer2 = new Answer("Leite", false, "No, that is the Portugese word", huquestion3);
//        Answer huq3answer3 = new Answer("Tej", true, "Well done", huquestion3);
//        Answer huq3answer4 = new Answer("Moloko", false, "No, that is the Ukrainian word", huquestion3);
//        answerRepository.save(huq3answer1);
//        answerRepository.save(huq3answer2);
//        answerRepository.save(huq3answer3);
//        answerRepository.save(huq3answer4);
//
//
//        Question huquestion4 = new Question("What is the Hungarian word for “Sea”?", "Hungarian");
//        questionRepository.save(huquestion4);
//        Answer huq4answer1 = new Answer("More", false, "No that is the Russian word", huquestion4);
//        Answer huq4answer2 = new Answer("Mare", false, "No, that is the Italian word", huquestion4);
//        Answer huq4answer3 = new Answer("Hav", false, "No, the right answer is “Tenger", ptquestion4);
//        Answer huq4answer4 = new Answer("Tenger", true, "Well done", huquestion4);
//        answerRepository.save(huq4answer1);
//        answerRepository.save(huq4answer2);
//        answerRepository.save(huq4answer3);
//        answerRepository.save(huq4answer4);
//
//
//
//
//        Question itquestion1 = new Question("test Q 1", "Italian");
//        questionRepository.save(itquestion1);
//
//        Answer itq1answer1 = new Answer("test", false, "test", itquestion1);
//        Answer itq1answer2 = new Answer("test", true, "test", itquestion1);
//        Answer itq1answer3 = new Answer("test", false, "test", itquestion1);
//        Answer itq1answer4 = new Answer("test", false, "test", itquestion1);
//        answerRepository.save(itq1answer1);
//        answerRepository.save(itq1answer2);
//        answerRepository.save(itq1answer3);
//        answerRepository.save(itq1answer4);
//
//
//        Question itquestion2 = new Question("test Q 2", "Italian");
//        questionRepository.save(itquestion2);
//
//        Answer itq2answer1 = new Answer("test", false, "test", itquestion2);
//        Answer itq2answer2 = new Answer("test", true, "test", itquestion2);
//        Answer itq2answer3 = new Answer("test", false, "test", itquestion2);
//        Answer itq2answer4 = new Answer("test", false, "test", itquestion2);
//        answerRepository.save(itq2answer1);
//        answerRepository.save(itq2answer2);
//        answerRepository.save(itq2answer3);
//        answerRepository.save(itq2answer4);
//
//
//        Question itquestion3 = new Question("test Q 3", "Italian");
//        questionRepository.save(itquestion3);
//
//        Answer itq3answer1= new Answer("test", false, "test", itquestion3);
//        Answer itq3answer2 = new Answer("test", true, "test", itquestion3);
//        Answer itq3answer3 = new Answer("test", false, "test", itquestion3);
//        Answer itq3answer4 = new Answer("test", false, "test", itquestion3);
//        answerRepository.save(itq3answer1);
//        answerRepository.save(itq3answer2);
//        answerRepository.save(itq3answer3);
//        answerRepository.save(itq3answer4);
//
//
//        Question itquestion4 = new Question("test Q 4", "Italian");
//        questionRepository.save(itquestion4);
//
//        Answer itq4answer1 = new Answer("test", false, "test", itquestion4);
//        Answer itq4answer2 = new Answer("test", true, "test", itquestion4);
//        Answer itq4answer3 = new Answer("test", false, "test", itquestion4);
//        Answer itq4answer4 = new Answer("test", false, "test", itquestion4);
//        answerRepository.save(itq4answer1);
//        answerRepository.save(itq4answer2);
//        answerRepository.save(itq4answer3);
//        answerRepository.save(itq4answer4);
//
//        Question itquestion5 = new Question("test Q 5", "Italian");
//        questionRepository.save(itquestion5);
//
//        Answer itq5answer1 = new Answer("test", false, "test", itquestion5);
//        Answer itq5answer2 = new Answer("test", true, "test", itquestion5);
//        Answer itq5answer3 = new Answer("test", false, "test", itquestion5);
//        Answer itq5answer4 = new Answer("test", false, "test", itquestion5);
//        answerRepository.save(itq5answer1);
//        answerRepository.save(itq5answer2);
//        answerRepository.save(itq5answer3);
//        answerRepository.save(itq5answer4);
//
//
//        Question itquestion6 = new Question("test Q 6", "Italian");
//        questionRepository.save(itquestion6);
//
//        Answer itq6answer1 = new Answer("test", false, "test", itquestion6);
//        Answer itq6answer2 = new Answer("test", true, "test", itquestion6);
//        Answer itq6answer3 = new Answer("test", false, "test", itquestion6);
//        Answer itq6answer4 = new Answer("test", false, "test", itquestion6);
//        answerRepository.save(itq6answer1);
//        answerRepository.save(itq6answer2);
//        answerRepository.save(itq6answer3);
//        answerRepository.save(itq6answer4);
//
//
//        Question dequestion1 = new Question("test Q 1", "German");
//        questionRepository.save(dequestion1);
//
//        Answer deq1answer1 = new Answer("test", false, "test", dequestion1);
//        Answer deq1answer2 = new Answer("test", true, "test", dequestion1);
//        Answer deq1answer3 = new Answer("test", false, "test", dequestion1);
//        Answer deq1answer4 = new Answer("test", false, "test", dequestion1);
//        answerRepository.save(deq1answer1);
//        answerRepository.save(deq1answer2);
//        answerRepository.save(deq1answer3);
//        answerRepository.save(deq1answer4);
//
//
//        Question dequestion2 = new Question("test Q 2", "German");
//        questionRepository.save(dequestion2);
//
//        Answer deq2answer1 = new Answer("test", false, "test", dequestion2);
//        Answer deq2answer2 = new Answer("test", true, "test", dequestion2);
//        Answer deq2answer3 = new Answer("test", false, "test", dequestion2);
//        Answer deq2answer4 = new Answer("test", false, "test", dequestion2);
//        answerRepository.save(deq2answer1);
//        answerRepository.save(deq2answer2);
//        answerRepository.save(deq2answer3);
//        answerRepository.save(deq2answer4);

        





//
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
