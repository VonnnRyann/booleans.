

const comChoiceDisplay = document.getElementById('comChoice');
const yourChoiceDisplay = document.getElementById('yourChoice');
const resultDisplay = document.getElementById('result1');
const possibleChoices = document.querySelectorAll('button');


let comChoice;
let yourChoice;
let result;

function generateComChoice() {
const randomNumber =  Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1){
        comChoice = 'rock'
    }
    if (randomNumber === 2){
        comChoice = 'scissors'
    }
    if (randomNumber === 3){
        comChoice = 'paper'
    }
comChoiceDisplay.innerHTML = comChoice;

}

function getResult() {
    switch (yourChoice + comChoice) {
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
        resultDisplay.innerHTML = 'You Win!!!';
        break
        case 'papercissors':
        case 'scissorsrock':
        case 'rockpaper':
        resultDisplay.innerHTML = 'You Lose!!!';
        break
        case 'paperpaper':
        case 'scissorsscissors':
        case 'rockrock':
        resultDisplay.innerHTML = 'Its a Draw!!!';
        break
    }
}

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    yourChoice = e.target.id
    yourChoiceDisplay.innerHTML = yourChoice
    generateComChoice();
    getResult();
}))
// compare(yourChoice, comChoice);



/* const comChoice = Math.random();
if (comChoice < 0.34) {
    comChoice = "rock";
} else if(comChoice <= 0.67) {
    comChoice = "paper";
} else {
    comChoice = "scissors";
}

const compare = function(choice1, choice2) {
    if(choice1 === choice2) {
    return "The result is a tie!";
}
if(choice1 === "rock") {
    if(choice2 === "scissors") {
        return "rock wins";
    } else {
        return "paper wins";
    }
}
if(choice1 === "paper") {
    if(choice2 === "rock") {
        return "paper wins";
    } else {
        if(choice2 === "scissors") {
            return "scissors wins";
    }
}
if(choice1 === "scissors") {
    if(choice2 === "rock") {
        return "rock wins";
    } else {
        if(choice2 === "paper") {
            return "scissors wins";
        }
    }
}
}
};
console.log("User Choice: " + yourChoice);
console.log("Computer Choice: " + comChoice);
compare(yourChoice, comChoice); */