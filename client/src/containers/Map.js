import React, {useState, useEffect} from 'react';
import boat from '../assets/boat1.png';
import shark from '../assets/shark.png';
import help from '../assets/help.png';
import Question from '../components/Question';
import tug1 from '../assets/tug.mp3';
import score1 from '../assets/score.mp3';
import biggerboat from '../assets/biggerboat.mp3';
import alex from '../assets/alex.mp3';
import sos from '../assets/sos.png';
import ab from '../assets/ab.mp3';
import duck from '../assets/duck.png';


const Map = () => {

    let [showQuestions, setShowQuestions] = useState(false); 
    const [questions, setQuestions] = useState([]);
    const [selectedAnswer, setSelectedAnswer] = useState({});
    const [listOfCountries, setListOfCountries] = useState([]);



    const getQuestions = () =>{
        console.log('getting questions');
        fetch(`http://localhost:8080/questions`)
        .then(res => res.json())
        .then(data =>  {
            console.log(data);
            setQuestions(data)
        })
        .then(passQuestionsToQuestionComponent())
        console.log(questions)

    }

    useEffect(async() => {
        getQuestions()
    
      }, []);


    const passQuestionsToQuestionComponent = () => {
        console.log("passing questions to question component");


    
}

    const printErrorMessage = () => {
        return "Error fetching API data"
    }

    const playHorn = () => {
        const hornSound = new Audio(tug1);
        hornSound.play();
    }

    const playJaws = () => {
        const jaws = new Audio(score1);
        jaws.play();
    }

    const playHelp = () => {
        const jaws = new Audio(biggerboat);
        jaws.play();
    }

    const playAlex = () => {
        const gremlin = new Audio(alex);
        gremlin.play();
    }
     
    const playAbba = () => {
        const abba = new Audio(ab);
        abba.play();
    }

    return(
        <>
        
       
        <button class='top-button' onClick={() => setShowQuestions(!showQuestions)}>{showQuestions ? 'Quit Quiz' : ' Start Quiz'}</button>
        { showQuestions &&
            <>
                <Question questions ={questions}/> 
                <img class="boat" src={boat} onClick={playHorn}/>
                <img class="shark" src={shark} onClick={playJaws}/>
                <img class="help" src={help} onClick={playHelp}/>
                <img class= "abbaBaby" src={duck} onClick={playAbba}/>
            </>
            }
    
    <img class ='gremlin' src={sos} onClick={playAlex} />
    

        
        </>
    )


}

export default Map;



