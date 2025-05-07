let level = 0;
let start = false;
let sequence = ["red", "green", "blue", "yellow"];
let compSequence = [];
let userSequence = [];
let highScr = 0;
let newHighScore = 0;


let h2 = document.querySelector("h2");
let startBtn = document.querySelector("button");
let body = document.querySelector("body");
let userClick = document.querySelectorAll(".innerDiv");





startBtn.addEventListener("click", function () {
    if (start == false) {
        startBtn.classList.add("removeStartBtn");
        start = true;
        for (btn of userClick) {
            btn.addEventListener("click", userFlash);
        }

        levelUp();
    }

});

function levelUp() {
    userSequence = [];

    level++;
    h2.innerText = `Level : ${level}`;

    compFlash();
    // console.log(compSequence);
}

function compFlash() {
    //TO generate random color  we have to use sequence arary to generate the random index and at that index which color is there that will flash
    let ranIndx = Math.floor(Math.random() * 4);
    let ranColor = sequence[ranIndx];

    //to select the id having randColor we have to select the id
    let randBtn = document.querySelector(`.${ranColor}`);
    //Push the rancolor to array to track the game 
    compSequence.push(ranColor);
    btnFlash(randBtn);
    // console.log(userClick);
}

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 200);
    // console.log(btn);
}

function userFlash() {
    // console.log(this);
    let btn = this;
    btnFlash(btn);
    let userColor = btn.getAttribute("id");
    userSequence.push(userColor);

    // console.log(userSequence);

    let index = userSequence.length - 1;
    checkAns(index);
}

function checkAns(indx) {
    // console.log(userSequence[indx]);
    // console.log(userSequence.length);

    if (userSequence[indx] == compSequence[indx]) {
        if (userSequence.length == compSequence.length) {
            setTimeout(levelUp, 500);
        }
    } else {
        body.style.backgroundColor = "red";
        setTimeout(function () {
            body.style.backgroundColor = "white";
        }, 200);
        gameOver();
    }
}

function gameOver() {

    for (btn of userClick) { btn.disabled = true; }
    let score = level - 1;
    highScore(score);
    start = false;
    startBtn.classList.remove("removeStartBtn");
    level = 0;
    compSequence = [];
}

function highScore(score) {

    if (score > highScr) {
        highScr = score;
        if (highScr > newHighScore) {
            newHighScore = highScr;
        }
    }
    h2.innerHTML = `GAME OVER!!. <br> Your Score is <b>${score}</b>. <br> High Score is ${newHighScore}`;
}