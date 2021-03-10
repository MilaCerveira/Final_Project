import React from 'react';
import  {Grid } from "semantic-ui-react";
import { useState, useEffect } from 'react';
import './Quiz.css'
import map from '../assets/cartooneuromap.png';

// The problem could be with our question map. Functions within it seem to run recusively.

//Update- the map is not triggering it. Having different buttons already renders the page, which we don't want

//currently trying to put the 'return' which renders the page, in a useEffect, with a [] parameter to only render once, when the page has loaded. UPDATE- didn't work

// line 126 shows that a button with a function which takes an argument will cause an automatic re-render

//ps the map function that creates the answer buttons has been moved to junk.js

// deleting our 'promise fix' ( { questions && questions[activeQuestion] &&) does not solve the problem

const Question = ({questions}) => {

    console.log('Questions in question component: ' ,questions);
    let [selectedAnswer, setSelectedAnswer] = useState({});
    let [questionNumber, setQuestionNumber] = useState(0);
    let [score, setScore] = useState(0);
    let [currentAnswerOutcome, setCurrentAnswerOutcome] = useState("");
    
    
    

    const [activeQuestion, setActiveQuestion] = useState(questionNumber);

    let nonStateAnswer = {};
    const assignNonStateAnswer = (value) => {
        nonStateAnswer = questions[activeQuestion].answers[0];
        console.log("the value of nonStateAnswer is ", nonStateAnswer)
        // setSelectedAnswer(questions[activeQuestion].answers[0])   // this line causes an infinite render crash
        // console.log("the value of nonStateAnswer is ", selectedAnswer)
    }

    const printTestMessage = () => {
        console.log('test message from printTestMessage')
    }

    const printTestMessagewithArgument = (argument) => {
        console.log('test message from printTestMessagewithArgument', argument)
    }

    
    useEffect(async() => {       //this useEffect prevents the first question being repeated
        console.log('useEffect in use in Question component')
        increaseQuestionNumber();
    }, []);

    // useEffect(() =>{
    //     console.log('using display Page useEffect')
    //     displayPage();
    // })


    // useEffect(async() => {   //This triggering an infinite loop?
    //     console.log('useEffect in use in Question component')
    //     increaseQuestionNumber();
    // }, [questionNumber]);


        useEffect(async() => {   //This triggering an infinite loop?
        console.log('useEffect[questionNumber] in use in Question component')
        // increaseQuestionNumber();
    }, [questionNumber]);


    useEffect(async() => {          //this does not trigger an infinite loop (as long as no argument is passed to increasQuestionNumber)
            //a function for increasing the question number
            console.log("used useEffect")
            //setQuestionNumber(questionNumber + 1); // this is triggering infinite recursion!!!!!
            console.log(questionNumber);
            checkIfAnswerIsCorrect(selectedAnswer);
            //setActiveQuestion(questionNumber);    
        //increaseQuestionNumber()
    }, [selectedAnswer])

    
    const increaseQuestionNumber = (selectedAnswer) => {
        console.log("used increaseQuestionNumber")
        setQuestionNumber(questionNumber + 1); // this is triggering infinite recursion!!!!!
    //     console.log(questionNumber);
    //     setActiveQuestion(questionNumber);
    //     if (selectedAnswer.correct == "true"){
    //         score += 1

    //         console.log("correct answer selected")
    //     }
    }

    const moveToNextQuestion = () => {
        setQuestionNumber(questionNumber + 1); // this is triggering infinite recursion!!!!!
        //     console.log(questionNumber);
            setActiveQuestion(questionNumber)
    }

    const checkIfAnswerIsCorrect = () => {
        setCurrentAnswerOutcome(selectedAnswer.outcome)
        if (selectedAnswer.correct == true) {
            setScore(score + 10)
        }
        else if (selectedAnswer.correct == false) {setScore(score + 1)}
        console.log("score = ",score);
    };


        
    const selectAnswer = (input) => {
        console.log('using selectAnswer function')
        //setSelectedAnswer(input)
    }


    // for(let i = questions.length - 1; i > 0; i--){
    //     const j = Math.floor(Math.random() * i)
    //     const temp = questions[i]
    //     questions[i] = questions[j]
    //     questions[j] = temp
    //   }

    //questions.pop();


    const func1 = () => {
        //console.group("before assignment in func1", selectedAnswer)
        setSelectedAnswer(questions[activeQuestion].answers[0])
        //(console.group("after assignment in func1", selectedAnswer)
        //checkIfAnswerIsCorrect(selectedAnswer);
    }

    const func2 = () => {
        setSelectedAnswer(questions[activeQuestion].answers[1])
        //checkIfAnswerIsCorrect(selectedAnswer);
    }

    const func3 = () => {
        setSelectedAnswer(questions[activeQuestion].answers[2])
        //checkIfAnswerIsCorrect(selectedAnswer);
    }

    const func4 = () => {
        setSelectedAnswer(questions[activeQuestion].answers[3])
        //checkIfAnswerIsCorrect(selectedAnswer);
    }



 
// const displayPage = () => {

return (
   

<>
<h1>some message</h1>
{//activeQuestion.body
}

 { questions && questions[activeQuestion] &&

<div className={'container'}>
          <Grid>
        <Grid.Row columns={1}>
        <Grid.Column>
        <div className={'qs'}>
        
            {questions[activeQuestion].body}
            <h2>{score}</h2>
            
            
            
            
        </div>
        
            <br></br>
            <br></br>
            <br></br>
            <br></br>


        
                        <button onClick ={func1} className={'btn'}>{questions[activeQuestion].answers[0].answerBody}</button>
                        <button onClick ={func2} className={'btn'}>2</button>
                        <button onClick ={func3} className={'btn'}>3</button>
                        <button onClick ={func4} className={'btn'}>4</button>
                        <button onClick={moveToNextQuestion}  className={'btn'}>Next Question</button>
                        {/* <button onClick ={printTestMessage} className={'btn'}>Print test message</button>
                        <button onClick ={printTestMessagewithArgument(1)} className={'btn'}>Print test message with argument</button> */}

                        {/* some buttons with no functions attached! */}
                         {/* <button  className={'btn'}>no function button 1</button>
                        <button  className={'btn'}>no function button 2</button> */}

        {/* <h3>Outcome will go here</h3> */}
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

//}
};
    
   




export default Question;