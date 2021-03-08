import React from 'react';
import  {Grid } from "semantic-ui-react";
import { useState, useEffect } from 'react';
import './Quiz.css'
import map from '../assets/cartooneuromap.png';


// const mockData = [
//     {
//         id: '1',
//         description: 'Mock question',
//         answers: [
//             {
//                 id: '1',
//                 description: 'This is an answer'
//             },
//             {
//                 id: '2',
//                 description: 'This is an answer'
               
//             },
//             {
//                 id: '3',
//                 description: 'This is an answer'
//             },
//             {
//                 id: '4',
//                 description: 'This is an answer'
//             }
//         ],
//         correctAnswer: '3'
//     },
//     {
//         id: '2',
//         description: 'Mock question',
//         answers: [
//             {
//                 id: '5',
//                 description: 'an answer'
//             },
//             {
//                 id: '6',
//                 description: 'an answer'
//             },
//             {
//                 id: '7',
//                 description: 'an answer'
//             },
//             {
//                 id: '8',
//                 description: 'an answer'
//             }
//         ],
//         correctAnswer: '1'
//     }
    
// ]




export const Question = () => {

    const [questions, setQuestions] = useState([]);
    const [activeQuestion, setActiveQuestion] = useState(0);
    //const [answers, setAnswers] = useState([]);
    
    

    const getQuestions = () =>{
        console.log('getting questions');
        fetch(`http://localhost:8080/questions/?language=Portuguese`)
        .then(res => res.json())
        .then(data =>  {console.log(data);setQuestions(data)});


        console.log(questions)




    }

    // for(let i = questions.length - 1; i > 0; i--){
    //     const j = Math.floor(Math.random() * i)
    //     const temp = questions[i]
    //     questions[i] = questions[j]
    //     questions[j] = temp
    //   }

    //questions.pop();
    


      useEffect(async() => {
        getQuestions();
      }, []);


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
    return (

        

        <>
        <h1>Hello</h1>
        {questions[activeQuestion] &&
        <h1>
        {questions[activeQuestion].answers[0].answerBody}
      </h1>
      
}
        
        
        </>
        

        

        
        

             
    
    );
    

}
                export default Question;