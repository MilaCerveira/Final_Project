import React from 'react';
import boat from '../assets/boat1.png'
import map from '../assets/cartooneuromap.png';
import Question from '../components/Question';







const Map = () => {

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    let displayQuestionComponent =true;

    if (displayQuestionComponent == true){
        return (
            <Question/>
        )
    }

    return(
        <>
        <div className="image-container">
        <img class="image" src={map}/>
    </div>

        <h1>I am the map container</h1>
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
