import React from 'react';
import  {Grid } from "semantic-ui-react";
import { useState, useEffect } from 'react';
import './Quiz.css'
import map from '../assets/cartooneuromap.png';


const Question = ({questions}) => {

    console.log('Questions in question component: ' ,questions);
    let [selectedAnswer, setSelectedAnswer] = useState({});
    let [questionNumber, setQuestionNumber] = useState(0);
    let [score, setScore] = useState(0);
    let [currentAnswerOutcome, setCurrentAnswerOutcome] = useState("");
    let [languageNumber, setLanguageNumber] = useState(0); 


    const [portugueseScore, setPortugueseScore] = useState(0);
    const [spanishScore, setSpanishScore] = useState(0);
    const [frenchScore, setFrenchScore] = useState(0);
    const [italianScore, setItalianScore] = useState(0);
    const [germanScore, setGermanScore] = useState(0);
    const [hungarianScore, setHungarianScore] = useState(0);
    const [romanianScore, setRomanianScore] = useState(0);
    const [russianScore, setRussianScore] = useState(0);


    const [activeQuestion, setActiveQuestion] = useState(questionNumber);


    
    useEffect(async() => {       
        console.log('useEffect in use in Question component')
        increaseQuestionNumber();
    }, []);


        useEffect(async() => {   
        console.log('useEffect[questionNumber] in use in Question component')
    }, [questionNumber]);


    useEffect(async() => {          
            console.log("used useEffect")
            console.log(questionNumber);
            checkIfAnswerIsCorrect(selectedAnswer);
    }, [selectedAnswer])

    
    const increaseQuestionNumber = (selectedAnswer) => {
        console.log("used increaseQuestionNumber")
        setQuestionNumber(questionNumber + 1);

    }

    const moveToNextQuestion = () => {
        setQuestionNumber(questionNumber + 1); 
            setActiveQuestion(questionNumber)
    }

    const checkIfAnswerIsCorrect = () => {
        setCurrentAnswerOutcome(selectedAnswer.outcome)
 



        if (selectedAnswer.correct == true) {
            setScore(score + 1)
            if (questions[questionNumber].language == "Portuguese") {
                setPortugueseScore(portugueseScore + 1)
            }
            else if (questions[questionNumber].language == "Spanish"){
                setSpanishScore(spanishScore + 1)
            }
            else if (questions[questionNumber].language == "French") {
                setFrenchScore(frenchScore + 1)
            }
            else if(questions[questionNumber].language == "Italian"){
                setItalianScore(italianScore + 1)
            }
            else if(questions[questionNumber].language == "German"){
                setGermanScore(germanScore + 1)
            }

            else if(questions[questionNumber].language =="Hungarian"){
                setHungarianScore(hungarianScore +1)
            }
            else if (questions[questionNumber].language =="Romanian"){
                setRomanianScore(romanianScore + 1)
            }
            else if (questions[questionNumber].language =="Russian"){
                setRussianScore(russianScore + 1)
            }

        }
        console.log("score = ",score);
    };




    const func1 = () => {
        setSelectedAnswer(questions[activeQuestion].answers[0])

    }

    const func2 = () => {
        setSelectedAnswer(questions[activeQuestion].answers[1])
    }

    const func3 = () => {
        setSelectedAnswer(questions[activeQuestion].answers[2])
    }

    const func4 = () => {
        setSelectedAnswer(questions[activeQuestion].answers[3])
    }

    const moveToNextLanguage = () => {
        setLanguageNumber(languageNumber + 1);
    }

if ( questionNumber <= questions.length ) {

return (
   

<>



 { questions && questions[activeQuestion] &&

<div className={'container'}>
          <Grid>
        <Grid.Row columns={1}>
        <Grid.Column>
        <div className={'qs'}>
        
            {questions[activeQuestion].body}
            <div>{score}</div>
 
        </div>
        
            <br></br>

                        <button onClick ={func1} className={'btn'}>{questions[activeQuestion].answers[0].answerBody}</button>
                        <button onClick ={func2} className={'btn'}>{questions[activeQuestion].answers[1].answerBody}</button>
                        <button onClick ={func3} className={'btn'}>{questions[activeQuestion].answers[2].answerBody}</button>
                        <button onClick ={func4} className={'btn'}>{questions[activeQuestion].answers[3].answerBody}</button>
                        <br></br>
                        <button onClick={moveToNextQuestion}  className={'btn'}>Next</button>
 
                        <h3>{currentAnswerOutcome}</h3>

        </Grid.Column>
        </Grid.Row>
       
        </Grid>
    
        <br></br>
    
        <div className={'len'}>Question {questionNumber} out of {questions.length}</div>
        </div> 
        
}       
        </>
)

}

else {

    return (
        <>

    <div className={'container'}>
          <Grid>
        <Grid.Row columns={1}>
        <Grid.Column>
        <div className={'qs'}>
        
          

        </div>
        
        <h5>Well done! Your final score is: {score}</h5>
        <h5>Your score in Portuguese is: {portugueseScore}</h5>
        <h5>Your score in Spanish is: {spanishScore}</h5>
        <h5>Your score in French is: {frenchScore}</h5>
        <h5>Your score in German is: {germanScore}</h5>
        <h5>Your score in Hungarian is: {hungarianScore}</h5>
        <h5>Your score in Italian is: {italianScore}</h5>
        <h5>Your score in Romanian is: {romanianScore}</h5>
        <h5>Your score in Russian is: {russianScore}</h5>
        
                

        </Grid.Column>
        </Grid.Row>
       
        </Grid>
        
        
        
    </div>


 </>
    )
}
}

export default Question;