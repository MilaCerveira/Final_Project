import React from 'react';
import  {Grid } from "semantic-ui-react";
import { useState, useEffect } from 'react';
import './Quiz.css'
import map from '../assets/cartooneuromap.png';


const Question = ({questions}) => {

    console.log('qusetins' ,questions);
    console.log('message from question component')

    const [activeQuestion, setActiveQuestion] = useState(0);

    // const [questions, setQuestions] = useState([]);
    // const [activeQuestion, setActiveQuestion] = useState(0);
    // const [selectedAnswer, setSelectedAnswer] = useState({});
    
    
    

    // const getQuestions = () =>{
    //     console.log('getting questions');
    //     fetch(`http://localhost:8080/questions/?language=Portuguese`)
    //     .then(res => res.json())
    //     .then(data =>  {console.log(data);setQuestions(data)});
    //     //.then(data =>  {console.log(data);setQuestions(data)});


    //     console.log(questions)

    // }

    
    // const selectAnswer = (input) => {
    //     setSelectedAnswer(input)
    // }

    // for(let i = questions.length - 1; i > 0; i--){
    //     const j = Math.floor(Math.random() * i)
    //     const temp = questions[i]
    //     questions[i] = questions[j]
    //     questions[j] = temp
    //   }

    //questions.pop();
    


    //   useEffect(async() => {
    //     getQuestions();
    //   }, []);


    // const [activeQuestion, setActiveQuestion] = useState(0);
    // const [questions, setQuestions] = useState([]);
    // const [boatLeftPosition, setBoatLeftPosition] = useState(-1);
    // useEffect(async () => {
    //     // do the following when component first mounts
    //     // this is where we will call our  API
    //     setQuestions(mockData);
    // }, [])

    // if (questions.length === 0) {
    //     return <div>Start your engines...</div>
    // }
    // if (activeQuestion){
return (
   

<>

{//activeQuestion.body
}

 { questions && questions[activeQuestion] &&

<div className={'container'}>
          <Grid>
        <Grid.Row columns={1}>
        <Grid.Column>
        <div ClassName={'questionBody'}>
        
            {questions[activeQuestion].body}
            
            
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
        {questions[activeQuestion].answers.map((answer) => {
            return <button  className={'btn'}>{answer.answerBody}</button>
        })
        
        }
        </Grid.Column>
        </Grid.Row>
       
        </Grid>
        
        <br></br>
        
        
        <div>Question {0 + 1} out of {questions.length}</div>
        </div> 
}
        </>
    

)
};
    
   




export default Question;