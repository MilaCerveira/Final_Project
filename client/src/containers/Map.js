import React, {useState, useEffect} from 'react';
import boat from '../assets/boat1.png';
import shark from '../assets/shark.png';
import help from '../assets/help.png';
import map from '../assets/cartooneuromap.png';
import horn2 from '../assets/horn2.mp3';
import Question from '../components/Question';
import tug1 from '../assets/tug.mp3';
import squeak1 from '../assets/squeak.mp3';
import score1 from '../assets/score.mp3';
import biggerboat from '../assets/biggerboat.mp3';


const Map = () => {

    let [showQuestions, setShowQuestions] = useState(false); 

    const [questions, setQuestions] = useState([]);
    // const [activeQuestion, setActiveQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState({});
  


    const getQuestions = () =>{
        console.log('getting questions');
        fetch(`http://localhost:8080/questions/?language=Portuguese`)
        .then(res => res.json())
        .then(data =>  {
            console.log(data);
            setQuestions(data)
        })
        .then(passQuestionsToQuestionComponent())
        // .then(passQuestionsToQuestionComponent());
        console.log(questions)

    }

    useEffect(async() => {
        getQuestions()
    
        // getQuestions().then(passQuestionsToQuestionComponent(), printErrorMessage());
      }, []);


        

     

        



    // const [questions, setQuestions] = useState({});

    // const getQuestions = () =>{
    //     console.log('getting questions');
    //     fetch(`http://localhost:8080/questions/?language=Spanish`)
    //     .then(res => res.json())
    //     .then(data => setQuestions(data));
    // }


    //   useEffect(() => {
    //     getQuestions();
    //   }, []);
    


    // const getLaunch = () => {
    //     console.log("getting launch information");
    //     fetch(`https://api.spacexdata.com/v3/launches/${selectedLaunchId}`)
    //       .then(res => res.json())
    //       .then(data => setLaunch(data));
    //   }





    // function sleep(ms) {
    //     return new Promise(resolve => setTimeout(resolve, ms));
    // }


    const passQuestionsToQuestionComponent = () => {
        console.log("passing questions to question component");

 

    // if (showQuestions === true){
    //     console.log("console log from map.js");
    //     return (
    //         <>
            
    //         <Question questions ={questions}/>
    //         </>
    //     )
    // }
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
     

    return(
        <>
        
       
        
        <button class='top-button' onClick={() => setShowQuestions(!showQuestions)}>{showQuestions ? 'Quit Quiz' : ' Start Quiz'}</button>
        { showQuestions &&
            <>
                <Question questions ={questions}/> 
                <img class="boat" src={boat} onClick={playHorn}/>
                <img class="shark" src={shark} onClick={playJaws}/>
                <img class="help" src={help} onClick={playHelp}/>
            </>
            }
    
    
    
        
       
        
        </>
    )


}

export default Map;


// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
// let done = 0
// while(done < 40) {
//     var img = document.getElementsByClassName("image")
//     console.log("img", img);
//     if (img && img.length > 0) {
//         done = true;
//         const imagePos = img[0].getBoundingClientRect();
//         console.log("imagePos", imagePos + 10);
//         setBoatLeftPosition(imagePos.left);
//     }
//     await sleep(50);
//     done++;
// }
