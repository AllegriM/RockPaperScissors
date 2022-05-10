// Variables

let gameBtns = document.querySelectorAll('.hand');
let pickPage = document.querySelector('.game-container');
let resPage = document.querySelector('.guerra');

let machSelect = document.querySelector('.machSelect');
let imageMyPick = document.querySelector('.elSelect');
let resetBtn = document.querySelector('.resetBtn');
let scoreNum = document.querySelector('.num-score')


let score = 0;

// Event Listeners

for (let i = 0; i < gameBtns.length; i++) {   
    const gameBtn = gameBtns[i];
    gameBtn.addEventListener('click', (e) => {
        myPick(e);
        pickPage.style.display = 'none';
        resPage.style.display = 'block';
        resetButton();
    })
}


// Creacion del elemento que yo seleccione //


function myPick(e) {
    let myPick = e.target.classList[1];
    let createEl = document.createElement('div');
    createEl.classList.add('hand');
    createEl.classList.add(`${myPick}`);
    createEl.classList.add('humanPick')
    createElCont = `
                    <img id="myPickImage" class="hand-icon" src="images/icon-${myPick}.svg" alt="">
                    `
    createEl.innerHTML = createElCont;
    imageMyPick.appendChild(createEl);
    let humPicked = createEl.classList[1];
    contestWinner(humPicked, machinePick())
}

// Crear un algoritmo que elija un numero random entre 0 y 2 //

function machinePick(){
    let choices = ["rock", "paper", "scissors"];
    let randomNumber = choices[Math.floor(Math.random() * 3)];
    let createMachDiv = document.createElement('div');
    createMachDiv.classList.add('hand');
    createMachDiv.classList.add(`${randomNumber}`);
    createMachDiv.classList.add('botPick')
    createElCont = `
                    <img id="myPickImage" class="hand-icon" src="images/icon-${randomNumber}.svg" alt="">
                    `
    createMachDiv.innerHTML = createElCont;
    machSelect.appendChild(createMachDiv);
    let machPicked = createMachDiv.classList[1];
    return machPicked
}




function resetButton() {
    resetBtn.addEventListener('click', () =>{
        pickPage.style.display = 'flex';
        resPage.style.display = 'none';
        let botLastPick = document.querySelector('div .botPick');
        let humanLastPick = document.querySelector('div .humanPick');
        let machEliminado = machSelect.removeChild(botLastPick);
        let humanEliminado = imageMyPick.removeChild(humanLastPick);
    })
}

function contestWinner(humanPick, compPick) {
    if (humanPick == "scissors" && compPick == "paper") {
        titleMatch('You win!');
        addPoint();
    }if (humanPick == "scissors" && compPick == "rock"){
        titleMatch('You lose!');
        score = 0;
    }if (humanPick == "scissors" && compPick == "scissors"){
        titleMatch("Tie");
    }if (humanPick == "rock" && compPick == "scissors") {
        titleMatch('You win!');
        addPoint();
    }
    if (humanPick == "rock" && compPick == "paper") {
        titleMatch('You lose!');
        score = 0;
    }
    if (humanPick == "rock" && compPick == "rock") {
        titleMatch("Tie");
    }
    if (humanPick == "paper" && compPick == "scissors") {
        titleMatch('You lose!');
        score = 0;
    }
    if (humanPick == "paper" && compPick == "rock") {
        titleMatch('You win!');
        addPoint();
    }
    if (humanPick == "paper" && compPick == "paper") {
        titleMatch("Tie");
    }
}

function titleMatch(text) {
    document.querySelector('.finalRes').innerHTML = text;
    if (text == "You lose!") {
        scoreNum.innerHTML = 0;
    }
}

function addPoint(){
    score += 1;
    scoreNum.innerHTML = score;
}