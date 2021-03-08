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
    const [selectedAnswer, setSelectedAnswer] = useState({});
    
    
    

    const getQuestions = () =>{
        console.log('getting questions');
        fetch(`http://localhost:8080/questions/?language=Portuguese`)
        .then(res => res.json())
        .then(data =>  {console.log(data);setQuestions(data)});
        //.then(data =>  {console.log(data);setQuestions(data)});


        console.log(questions)

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

      
        
        
<div className={'container'}>
<Grid>
<Grid.Row columns={1}>
<Grid.Column>
<div>
  {questions[activeQuestion].body}
</div>
</Grid.Column>
</Grid.Row>
<Grid.Row columns={2}>
<Grid.Column>
<button onClick={setSelectedAnswer(questions[activeQuestion].answers[0])}>{questions[activeQuestion].answers[0].answerBody}</button>

{/* <button onClick="selectAnswer(questions[activeQuestion].answers[0])">{questions[activeQuestion].answers[0].answerBody}</button> */}
</Grid.Column>
<Grid.Column>

<button>{questions[activeQuestion].answers[1].answerBody}</button>
</Grid.Column>
</Grid.Row>
<Grid.Row columns={2}>
<Grid.Column>
<button>{questions[activeQuestion].answers[2].answerBody}</button>
</Grid.Column>
<Grid.Column>
<button>{questions[activeQuestion].answers[3].answerBody}</button>
</Grid.Column>
</Grid.Row>
</Grid>
<div>Question {0 + 1} out of {questions.length}</div> 
  </div>
 
}
        

        

</> 
        

             
    
    );
    

}
                export default Question;