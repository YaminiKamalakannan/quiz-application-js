const username=document.getElementById('username');
const saveScoreBtn=document.getElementById('saveScoreBtn');
const mostRecentScore=localStorage.getItem('mostRecentScore');
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
console.log(highScores);

//localStorage.setItem("highScores",JSON.stringify([])) ;
//console.log(JSON.parse(localStorage.getItem('highScores')));


finalScore.innerText=mostRecentScore;
username.addEventListener("keyup", () => {
    //console.log(username.value);
    saveScoreBtn.disabled= !username.value;
    
})

saveHighScore = (e) =>{
    console.log("Clicked the save button");
    e.preventDefault();
    
    const score ={
        score:mostRecentScore,
        name:username.value,
        
    };
    console.log(score);
    highScores.push(score);

    highScores.sort((a,b) => b.score-a.score);

    highScores.splice(5);

    localStorage.setItem("highScores",JSON.stringify(highScores));
    //window.location.assign("/index.html");
    //console.log(highScores);
    
}
