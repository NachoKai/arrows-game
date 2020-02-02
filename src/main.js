let keys = {
    arrowUp: 38,
    arrowDown: 40,
    arrowLeft: 37,
    arrowRight: 39
};

let user = {
    keyUp: false,
    keyDown: false,
    keyLeft: false,
    keyRight: false
};

let pc = {
    keyUp: false,
    keyDown: false,
    keyLeft: false,
    keyRight: false
};

let yourScore = 0;
let resetBtn = document.getElementById("reset");
let score = document.querySelector("#game-score");
let highScore = document.querySelector("#high-score");
let gameOn = false;

startGame()

function startGame() {
    gameOn = true;
    let timer = document.querySelector("#time");
    timer.value = 10;
    addKey();
}

function addKey() {
    let randomNumber = Math.floor(Math.random() * 4 + 1);
    let imgDiv = document.querySelector("#key");
    let img = document.createElement("img");

    if (randomNumber === 1) {
        img.src = `img/up-arrow-key.png`;
        imgDiv.appendChild(img);
        pc.keyUp = true;
        pc.keyDown = false;
        pc.keyLeft = false;
        pc.keyRight = false;
    }
    if (randomNumber === 2) {
        img.src = `img/down-arrow-key.png`;
        imgDiv.appendChild(img);
        pc.keyUp = false;
        pc.keyDown = true;
        pc.keyLeft = false;
        pc.keyRight = false;
    }
    if (randomNumber === 3) {
        img.src = `img/left-arrow-key.png`;
        imgDiv.appendChild(img);
        pc.keyUp = false;
        pc.keyDown = false;
        pc.keyLeft = true;
        pc.keyRight = false;
    }
    if (randomNumber === 4) {
        img.src = `img/right-arrow-key.png`;
        imgDiv.appendChild(img);
        pc.keyUp = false;
        pc.keyDown = false;
        pc.keyLeft = false;
        pc.keyRight = true;
    }
}

document.addEventListener("keydown", e => {
    switch (e.keyCode) {
        case keys.arrowUp:
            timerStart();
            pressUp();
            if (pc.keyUp === true) {
                correct();
            } else {
                incorrect();
            }
            break;
        case keys.arrowDown:
            timerStart();
            pressDown();
            if (pc.keyDown === true) {
                correct();
            } else {
                incorrect();
            }
            break;
        case keys.arrowLeft:
            timerStart();
            pressLeft();
            if (pc.keyLeft === true) {
                correct();
            } else {
                incorrect();
            }
            break;
        case keys.arrowRight:
            timerStart();
            pressRight();
            if (pc.keyRight === true) {
                correct();
            } else {
                incorrect();
            }
            break;
        default:
            return null;
    }
});

function scoreUp() {
    yourScore++;
    score.value = yourScore;
}

function scoreDown() {
    let score = document.querySelector("#game-score");
    yourScore--;
    score.value = yourScore;
}

function assignHighScore() {
    if (yourScore > highScore) {
        highScore.value = yourScore;
    }
    yourScore = 0;
    score.value = 0;
    score = 0;
}

function deleteKey() {
    let imgDiv = document.querySelector("#key");
    imgDiv.innerHTML = "";
}

function pressUp() {
    user.keyUp = true;
    user.keyDown = false;
    user.keyLeft = false;
    user.keyRight = false;
}

function pressDown() {
    user.keyDown = true;
    user.keyUp = false;
    user.keyLeft = false;
    user.keyRight = false;
}

function pressLeft() {
    user.keyLeft = true;
    user.keyUp = false;
    user.keyDown = false;
    user.keyRight = false;
}

function pressRight() {
    user.keyRight = true;
    user.keyUp = false;
    user.keyDown = false;
    user.keyLeft = false;
}

function timerStart() {
    if (gameOn === true) {
        gameOn = false;
        let timer = document.querySelector("#time");
        timer.value = 10;
        let downloadTimer = setInterval(function () {
            timer.innerHTML = timer.value;
            timer.value -= 1;
            if (timer.value <= 0) {
                clearInterval(downloadTimer);
                timer.value = "Finished!";
                Swal.fire("Time's up!", `Points: ${score.value}`, "warning");
                gameOn = true;
            }
        }, 1000);
    } else {
        return () => {};
    }
}

function timerStop() {
    let timer = document.querySelector("#time");
    timer.value = 10;
    timer.innerHTML = timer.value;
}

resetBtn.addEventListener("click", () => {
    timerStop()
    assignHighScore()
});

function correct() {
    let imgDiv = document.querySelector(".key");
    scoreUp();
    imgDiv.className = "key-press-ok";
    setTimeout(() => {
        imgDiv.className = "key";
    }, 100);
    deleteKey();
    addKey();
}

function incorrect() {
    let imgDiv = document.querySelector(".key");
    scoreDown();
    imgDiv.className = "key-press-wrong";
    setTimeout(() => {
        imgDiv.className = "key";
    }, 100);
    deleteKey();
    addKey();
}

document.getElementById("current-year").innerHTML = new Date().getFullYear();
