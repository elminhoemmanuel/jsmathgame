var isPlaying=false;
var score;
var timer;
var timeLeft;
var correctAnswer;

//if we click on the start/reset button
document.getElementsByClassName("start-reset")[0].onclick=
function(){

    //if we are playing
    if (isPlaying==true){
        location.reload();   //reload page
    }else{  //if we are not playting

        //playing is false
        isPlaying==true;

        //set score to 0
        score=0;
        addHtmlByClass("score-value", score);


        //show countdown
        showDiv("time-remaining");
        timeLeft=20;
        addHtmlByClass("time", timeLeft);


        hideDiv("game-over");



        // change button to reset
        addHtmlByClass("start-reset","Reset Game");


        // start countdown
        startCountdown();

        //generate new question
        generateQA();
    }

}
    
        
//if we click on answer box
document.getElementById("choice1").onclick=function(){
    //if we are playing?
    if (isPlaying==true){
        if(this.innerHTML==correctAnswer){  //correct?
            //increase score
            //show correct box for 1 sec
            //generate new question
            score++;
            addHtmlByClass("score-value",score);
            showDiv("correct");
            hideDiv("try-again");
            setTimeout(function(){
                hideDiv("correct")
                
            }, 1000);
            generateQA();
        }else{    //no?
            showDiv("try-again");
            hideDiv("correct");
            setTimeout(function(){
                hideDiv("try-again")
                
            }, 1000);
        }

    }
}
      

    
        
            
                
            
                //show try again box for 1 sec\

// functions used 

// startCountdown
//reduce time by 1 sec in loops
            //timeleft?
                //yes-->continue
                //no-->gameover
                //change button to reset
function startCountdown(){
    timer=setInterval(function(){
        timeLeft-=1;
        addHtmlByClass("time", timeLeft);

        if (timeLeft==0){
            stopCountdown();
            showDiv("game-over");
            addHtmlByClass("game-over","<p>Game Over!</p><p>Your score is "+score+"</p>");
            hideDiv("time-remaining");
            hideDiv("correct");
            hideDiv("try-again");
            isPlaying=false;
            addHtmlByClass("start-reset", "Start game");
            
        }

    },1000);
}


// stopCountdown
function stopCountdown(){
    clearInterval(timer);
}


// hide a div
function hideDiv(givenClass){
    document.getElementsByClassName(givenClass)[0].style.display="none";
}

// show a div
function showDiv(givenClass){
    document.getElementsByClassName(givenClass)[0].style.display="block";
}


// add html using a class
function addHtmlByClass(className,addedValue){
    document.getElementsByClassName(className)[0].innerHTML=addedValue;

}

// generate question and answer

function generateQA(){
    // Declare vars for the two question numbers
    var x=1+Math.round(Math.random()*9);
    var y=1+Math.round(Math.random()*9);
    correctAnswer=x*y;
    addHtmlByClass("question",x+"x"+y);

    // Declare var for the correct box
    correctPosition=1+Math.round(Math.random()*3);

    // Add the correct answer to the correct box
    addHtmlByClass("choice-"+correctPosition,correctAnswer);

    var answers=[];
    // fill other boxes with wrong answers
    for (i=1; i<5; i++){
        if ( i!=correctPosition){
            var wrongAnswer;
            do{
                wrongAnswer=(1+Math.round(Math.random()*9))*(1+Math.round(Math.random()*9));//wrong answer
            }while(answers.indexOf(wrongAnswer)>-1)

            answers.push(wrongAnswer);

                 
            addHtmlByClass("choice-"+i,wrongAnswer);

        }

    }
}


