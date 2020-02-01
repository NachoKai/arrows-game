document.getElementById("current-year").innerHTML = new Date().getFullYear();

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
let highScore = 0;
let timer = 0;

startGame();

document.addEventListener("keydown", e => {
    switch (e.keyCode) {
        case keys.arrowUp:
            pressUp()
            break;
        case keys.arrowDown:
            pressDown();
            break;
        case keys.arrowLeft:
            pressLeft();
            break;
        case keys.arrowRight:
            pressRight();
            break;
        default:
            return null;
    }
});

function randomKeys() {
    let randomNumber = Math.floor(Math.random() * 4 + 1);

    switch (randomNumber) {
        case 1:
            pc.keyUp = true;
            pc.keyDown = false;
            pc.keyLeft = false;
            pc.keyRight = false;
            return;
        case 2:
            pc.keyUp = false;
            pc.keyDown = true;
            pc.keyLeft = false;
            pc.keyRight = false;
            break;
        case 3:
            pc.keyUp = false;
            pc.keyDown = false;
            pc.keyLeft = true;
            pc.keyRight = false;
            break;
        case 4:
            pc.keyUp = false;
            pc.keyDown = false;
            pc.keyLeft = false;
            pc.keyRight = true;
            break;
        default:
            return null;
    }
}

function scoreUp() {
    let score = document.querySelector('#game-score')
    yourScore++;
    score.value = yourScore
}

function scoreDown() {
    let score = document.querySelector("#game-score");
    yourScore--;
    score.value = yourScore;
}

function addKey() {
    let randomNumber = Math.floor(Math.random() * 4 + 1);
    let imgDiv = document.querySelector(".key");
    let img = document.createElement("img");

    if (randomNumber === 1) {
        img.src = `img/right-arrow-key.png`;
        imgDiv.appendChild(img);

        // if (keyUp === true) {
        //     img.src = `img/up-arrow-key.png`;
        //     imgDiv.appendChild(img);
        //     imgDiv.className = "key-press-ok";
        //     setTimeout(() => {
        //         imgDiv.className = "key";
        //     }, 100);
        // } else if (keyUp === false) {
        //     img.src = `img/up-arrow-key.png`;
        //     imgDiv.appendChild(img);
        //     imgDiv.className = "key-press-wrong";
        //     setTimeout(() => {
        //         imgDiv.className = "key";
        //     }, 100);
        // }
    }
    if (randomNumber === 2) {
        img.src = `img/up-arrow-key.png`;
        imgDiv.appendChild(img);
    }
    if (randomNumber === 3) {
        img.src = `img/left-arrow-key.png`;
        imgDiv.appendChild(img);
    }
    if (randomNumber === 4) {
        img.src = `img/right-arrow-key.png`;
        imgDiv.appendChild(img);
    }

    // if (keyDown === true) {
    //     key = "down-arrow-key.png";
    //     img.src = `img/${key}`;
    //     imgDiv.appendChild(img);
    // }
    // if (keyLeft === true) {
    //     key = "left-arrow-key.png";
    //     img.src = `img/${key}`;
    //     imgDiv.appendChild(img);
    // }
    // if (keyRight === true) {
    //     key = "right-arrow-key.png";
    //     img.src = `img/${key}`;
    //     imgDiv.appendChild(img);
    // }
}

function deleteKey() {
    let imgDiv = document.querySelector(".key");
    imgDiv.innerHTML = "";
}

function startGame() {
    addKey();
}

function pressUp() {
    user.keyUp = true;
    user.keyDown = false;
    user.keyLeft = false;
    user.keyRight = false;
    deleteKey();
    addKey();
    randomKeys();
}

function pressDown() {
    user.keyDown = true;
    user.keyUp = false;
    user.keyLeft = false;
    user.keyRight = false;
    deleteKey();
    addKey();
    randomKeys();
}

function pressLeft() {
    user.keyLeft = true;
    user.keyUp = false;
    user.keyDown = false;
    user.keyRight = false;
    deleteKey();
    addKey();
    randomKeys();
}

function pressRight() {
    user.keyRight = true;
    user.keyUp = false;
    user.keyDown = false;
    user.keyLeft = false;
    deleteKey();
    addKey();
    randomKeys();
}
