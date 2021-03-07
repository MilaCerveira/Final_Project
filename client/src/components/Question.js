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

    const [questions, setQuestions] = useState(0);
    const [activeQuestion, setActiveQuestion] = useState(0);

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
    


      useEffect(() => {
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
         <h1>{questions[activeQuestion].body}</h1> 
       
        

        
{/* 
        <div className={'container'}></div>
        
            <Grid>
                <Grid.Row columns={1}>
                    <Grid.Column>
                        <div>
                            {/* {questions[0].body} */}
                            {/* {questions}
                        </div>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={2}>
                    <Grid.Column>
                        {questions[0].answers[0].answerbody}
                    </Grid.Column>
                    <Grid.Column>
                        {questions[0].answers[1].answerbody}
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={2}>
                    <Grid.Column>
                        {questions[0].answers[2].answerbody}
                    </Grid.Column>
                    <Grid.Column>
                        {questions[0].answers[3].answerbody}
                    </Grid.Column>
                </Grid.Row> */}
            {/* </Grid>
            <div>Question {0 + 1} out of {questions.length}</div> */}
            {/* </div> */} 
    </>





        // <>
        

        //     <div className={'container'}>
            
        //         <Grid>
        //             <Grid.Row columns={1}>
        //                 <Grid.Column>
        //                     <div>
        //                         {questions[activeQuestion].description}
        //                     </div>
        //                 </Grid.Column>
        //             </Grid.Row>
        //             <Grid.Row columns={2}>
        //                 <Grid.Column>
        //                     {questions[activeQuestion].answers[0].description}
        //                 </Grid.Column>
        //                 <Grid.Column>
        //                     {questions[activeQuestion].answers[1].description}
        //                 </Grid.Column>
        //             </Grid.Row>
        //             <Grid.Row columns={2}>
        //                 <Grid.Column>
        //                     {questions[activeQuestion].answers[2].description}
        //                 </Grid.Column>
        //                 <Grid.Column>
        //                     {questions[activeQuestion].answers[3].description}
        //                 </Grid.Column>
        //             </Grid.Row>
        //         </Grid>
        //         <div>Question {activeQuestion + 1} out of {questions.length}</div>
        //         </div>
        // </>
    );
}
                export default Question;