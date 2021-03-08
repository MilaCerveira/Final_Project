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