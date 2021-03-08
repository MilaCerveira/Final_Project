<Grid>
<Grid.Row columns={1}>
    <Grid.Column>
        <div>

        </div>
    </Grid.Column>
</Grid.Row>
<Grid.Row columns={2}>
    <Grid.Column>
        {questions[activeQuestion].body}
    </Grid.Column>
    <Grid.Column>
        
        {/* {questions[activeQuestion].answers[1].answerbody} */}
        {questions[activeQuestion].body}
    </Grid.Column>
</Grid.Row>
<Grid.Row columns={2}>
    <Grid.Column>
        {questions[activeQuestion].body}
    </Grid.Column>
    <Grid.Column>
        {questions[activeQuestion].body}
    </Grid.Column>
</Grid.Row>
</Grid>
<div>Question {0 + 1} out of {questions.length}</div> 






<>
<h1>Hello</h1>
{questions[activeQuestion] &&
<h1>
  {questions[activeQuestion].body}
</h1>
}







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
        {questions[activeQuestion].answers[0]}
    </Grid.Column>
    <Grid.Column>
        
        {/* {questions[activeQuestion].answers[1].answerbody} */}
        {questions[activeQuestion].body}
        </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
        <Grid.Column>
        {questions[activeQuestion].body}
        </Grid.Column>
        <Grid.Column>
        {questions[activeQuestion].body}
        </Grid.Column>
        </Grid.Row>
        </Grid>
        <div>Question {0 + 1} out of {questions.length}</div> 
            </div>
            </>
      }




     
        
        
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
<button>{questions[activeQuestion].answers[1].answerBody}</button>

{/* <button onClick={setSelectedAnswer(questions[activeQuestion].answers[0])}>{questions[activeQuestion].answers[0].answerBody}</button> */}

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