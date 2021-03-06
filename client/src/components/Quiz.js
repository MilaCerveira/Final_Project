import React from 'react';
import  {Grid } from "semantic-ui-react";
import { useState, useEffect } from 'react';
import './Quiz.css'
import a from '../assets/a.png'
import b from '../assets/cartooneuromap.png';

const mockData = [
    {
        id: '1',
        description: 'Mock question',
        answers: [
            {
                id: '1',
                description: 'This is an answer'
            },
            {
                id: '2',
                description: 'This is an answer'
               
            },
            {
                id: '3',
                description: 'This is an answer'
            },
            {
                id: '4',
                description: 'This is an answer'
            }
        ],
        correctAnswer: '3'
    },
    {
        id: '2',
        description: 'Mock question',
        answers: [
            {
                id: '5',
                description: 'an answer'
            },
            {
                id: '6',
                description: 'an answer'
            },
            {
                id: '7',
                description: 'an answer'
            },
            {
                id: '8',
                description: 'an answer'
            }
        ],
        correctAnswer: '1'
    }
    
]

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const Quiz = () => {
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [boatLeftPosition, setBoatLeftPosition] = useState(-1);
    useEffect(async () => {
        // do the following when component first mounts
        // this is where we will call our  API
        setQuestions(mockData);

        let done = 0
        while(done < 40) {
            var img = document.getElementsByClassName("image")
            console.log("img", img);
            if (img && img.length > 0) {
                done = true;
                const imagePos = img[0].getBoundingClientRect();
                console.log("imagePos", imagePos + 10);
                setBoatLeftPosition(imagePos.left);
            }
            await sleep(50);
            done++;
        }

    }, [])

    if (questions.length === 0) {
        return <div>Start your engines...</div>
    }
    return (
        <>
        
            <div className="image-container">
                <img class="image" src={b}/>
            </div>
            <div className={'container'}>
            
                <Grid>
                    <Grid.Row columns={1}>
                        <Grid.Column>
                            <div>
                                {questions[activeQuestion].description}
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            {questions[activeQuestion].answers[0].description}
                        </Grid.Column>
                        <Grid.Column>
                            {questions[activeQuestion].answers[1].description}
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            {questions[activeQuestion].answers[2].description}
                        </Grid.Column>
                        <Grid.Column>
                            {questions[activeQuestion].answers[3].description}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <div>Question {activeQuestion + 1} out of {questions.length}</div>
                

            </div>

            {boatLeftPosition >= 0 &&
                <img style={{left: boatLeftPosition}} className={'boat'} src={a} alt="boat" />
            }
        </>
    );
}
export default Quiz;
            

