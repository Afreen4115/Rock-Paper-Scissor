let userscore=0;
let comscore=0;
let choices=document.querySelectorAll('.choice');
const msgContainer=document.querySelector('.msg-container');
const msg=document.querySelector('#msg');
const userScore=document.getElementById('user-score');
const compScore=document.getElementById('computer-score');



const gameDrawn=()=>{
    console.log("Game drawn");
    msg.innerHTML="Game was drawn";
    msg.style.backgroundColor="grey";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        // console.log("you win!");
        userscore++;
        userScore.innerText=userscore;
        msg.innerHTML=`You win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor='#93C572';
    }
    else{
        // console.log("you loose");
        comscore++;
        compScore.innerText=comscore;
        msg.innerHTML=`You loose ☹,${userChoice} beaten by ${compChoice}`;
        msg.style.backgroundColor='rgb(255,123,123)';
       
    }
}
const playGame=(userChoice)=>{
    // console.log("U have clicked ",userChoice);
   const compChoice= generatecompChoice();
    // console.log("Computer choice is",compChoice);

    if(compChoice===userChoice){
      //game drawn
      gameDrawn();

    }
    else{
        //comp can be scissor ,paper'
        let userWin=true;
        if(userChoice==='rock'){
           userWin= compChoice==='paper'?false:true;
        }
        else if(userChoice=='paper'){
            userWin= compChoice==='scissor'?false:true;
        }
        else{
            userWin= compChoice==='rock'?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
   
}
const generatecompChoice=()=>{
    const options=['rock','paper','scissor'];
    // *3 is generate b/w 0->2 
    //random generated b/w 0-1
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}


choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener('click',()=>{
     const choiceId=choice.getAttribute("id");
    //  console.log("U hav clicked choice",choiceId);
      playGame(choiceId);
    });
});