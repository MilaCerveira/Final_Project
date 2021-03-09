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
    
    useEffect(() => {
        console.log('useEffect in use in Question component')
        increaseQuestionNumber();
    }, []);


    // useEffect(() => {
    //     console.log('useEffect in use in Question component')
    //     increaseQuestionNumber();
    // }, [questionNumber]);


    useEffect(() => {
            //a function for increasing the question number
        increaseQuestionNumber()
    }, [selectedAnswer])

    // git c
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
                        //return <button onClick ={selectAnswer({answer})} key={answer.id}  className={'btn'}>{answer.answerBody}</button>
                        return <button onClick ={increaseQuestionNumber} key={answer.id}  className={'btn'}>{answer.answerBody}</button>
                        //return <button  className={'btn'}>{answer.answerBody}</button>
        })
        
        }
        </Grid.Column>
        </Grid.Row>
       
        </Grid>
        
        
        <br></br>
        
        
        
        <div>Question {questionNumber} out of {questions.length}</div>
        </div> 
}       
        </>
    

)
};
    
   




export default Question;