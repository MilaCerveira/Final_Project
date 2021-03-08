import React from 'react';
import  {Grid } from "semantic-ui-react";
import { useState, useEffect } from 'react';
import './Quiz.css'
import map from '../assets/cartooneuromap.png';


const Question = ({questions}) => {

    console.log(questions);
    console.log('message from question component')

    let activeQuestion = questions[0];

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
    <h1>Question Component</h1>
)
    
   



}
export default Question;