let msg = document.querySelector("#msg")
const choices = document.querySelectorAll(".choice");
let us = document.querySelector("#uscore");
let cs = document.querySelector("#cscore");

let userScore=0;
let compScore=0;

const choicegen = () => {
    let choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

let showWinner = (userWin,user,computer) => {
    if(userWin === true)
    {
        userScore++;
        us.innerText = userScore;
        msg.textContent = `YOU WIN ${user} BEATS ${computer}`;
    }
    else
    {
        compScore++;
        cs.innerText = compScore;
        msg.textContent = `YOU LOSE  ${computer} BEATS ${user}`;
    }
}

const playgame = (user) => {
    console.log("userchoice = ",user)
    const computer = choicegen();
    console.log("computer choice:",computer);

    if(computer === user)
    {
        console.log("draw");
        msg.textContent = `draw`;
    }
    else {
        let userwin = true;
        if (user === "rock")
            userwin = computer === "paper" ? false : true;
        else if (user === "paper")
            userwin = computer === "scissors" ? false : true;
        else
            userwin = computer === "rock" ? false : true;
        showWinner(userwin,user,computer);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const user = choice.getAttribute("id");
        playgame(user);
    })
})