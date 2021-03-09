import React from 'react';
import  {Grid } from "semantic-ui-react";
import { useState, useEffect } from 'react';
import './Quiz.css'
import map from '../assets/cartooneuromap.png';


const Question = ({questions}) => {

    console.log('qusetins' ,questions);
    console.log('message from question component')
    let [selectedAnswer, setSelectedAnswer] = useState({});
    let [questionNumber, setQuestionNumber] = useState(0);

    const [activeQuestion, setActiveQuestion] = useState(questionNumber);
    
    useEffect(() => {       //this useEffect prevents the first question being repeated
        console.log('useEffect in use in Question component')
        increaseQuestionNumber();
    }, []);


    // useEffect(() => {   //Why is this triggering an infinite loop?
    //     console.log('useEffect in use in Question component')
    //     increaseQuestionNumber();
    // }, [questionNumber]);


    useEffect(() => {          //this does not trigger an infinite loop (as long as no argument is passed to increasQuestionNumber)
            //a function for increasing the question number
        increaseQuestionNumber()
    }, [selectedAnswer])

    
    const increaseQuestionNumber = (selectedAnswer) => {
        console.log("used increaseQuestionNumber")
        setQuestionNumber(questionNumber + 1); // this is triggering infinite recursion!!!!!
        console.log(questionNumber);
        setActiveQuestion(questionNumber);
        // if (selectedAnswer.correct == "true"){
            // score += 1

        //     console.log("correct answer selected")
        // }
    }
        
    const selectAnswer = (input) => {
        console.log('using selectAnswer function')
        setSelectedAnswer(input)
    }


    // for(let i = questions.length - 1; i > 0; i--){
    //     const j = Math.floor(Math.random() * i)
    //     const temp = questions[i]
    //     questions[i] = questions[j]
    //     questions[j] = temp
    //   }

    //questions.pop();

 
    

return (
   

<>

{//activeQuestion.body
}

 { questions && questions[activeQuestion] &&

<div className={'container'}>
          <Grid>
        <Grid.Row columns={1}>
        <Grid.Column>
        <div ClassName={'qs'}>
        
            {questions[activeQuestion].body}
            
            
            
            
        </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        {questions[activeQuestion].answers.map((answer) => {
                         return <button onClick ={selectAnswer(answer)} key={answer.id}  className={'btn'}>{answer.answerBody}</button>
                        //return <button onClick ={increaseQuestionNumber} key={answer.id}  className={'btn'}>{answer.answerBody}</button>
                        //return <button  className={'btn'}>{answer.answerBody}</button>
        })
        
        }
        </Grid.Column>
        </Grid.Row>
       
        </Grid>
        
        
        <br></br>
        
        
        
        <div className={'len'}>Question {questionNumber} out of {questions.length}</div>
        </div> 
}       
        </>
    

)
};
    
   




export default Question;