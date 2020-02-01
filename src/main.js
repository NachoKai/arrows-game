document.getElementById("current-year").innerHTML = new Date().getFullYear();

let keys = {
    arrowUp: 38,
    arrowDown: 40,
    arrowLeft: 37,
    arrowRight: 39
};

let keyUp = false;
let keyDown = false;
let keyLeft = false;
let keyRight = false;

let yourScore = 0;
let highScore = 0;

let timer = 0;

document.addEventListener("keydown", e => {
    switch (e.keyCode) {
        case keys.arrowUp:
            keyUp = true;
            keyDown = false;
            keyLeft = false;
            keyRight = false;
            console.log("up");
            deleteKey();
            addKey();
            randomKeys();
            break;
        case keys.arrowDown:
            keyDown = true;
            keyUp = false;
            keyLeft = false;
            keyRight = false;
            console.log("down");
            deleteKey();
            addKey();
            randomKeys();
            break;
        case keys.arrowLeft:
            keyLeft = true;
            keyUp = false;
            keyDown = false;
            keyRight = false;
            console.log("left");
            deleteKey();
            addKey();
            randomKeys();
            break;
        case keys.arrowRight:
            keyRight = true;
            keyUp = false;
            keyDown = false;
            keyLeft = false;
            console.log("right");
            deleteKey();
            addKey();
            randomKeys();
            break;
        default:
            return null;
    }
});

function randomKeys() {
    const randomNumber = Math.floor(Math.random() * 4 + 1)

    switch (randomNumber) {
        case 1:
            console.log("UP")
            break;
        case 2:
            console.log("DOWN")
            break;
        case 3:
            console.log("LEFT")
            break;
        case 4:
            console.log("RIGHT")
            break;
        default:
            break;
    }
}

randomKeys()

function scoreUp() {
    if (keyUp === true) {
        yourScore++
    }
}

function addKey() {
    let key = ''
    let imgDiv = document.querySelector(".key")
    let img = document.createElement("img");


    if (keyUp === true) {
        key = "up-arrow-key.png";
        img.src = `img/${key}`;
        imgDiv.appendChild(img);
    }
    if (keyDown === true) {
        key = "down-arrow-key.png";
        img.src = `img/${key}`;
        imgDiv.appendChild(img);
    }
    if (keyLeft === true) {
        key = "left-arrow-key.png";
        img.src = `img/${key}`;
        imgDiv.appendChild(img);
    }
    if (keyRight === true) {
        key = "right-arrow-key.png";
        img.src = `img/${key}`;
        imgDiv.appendChild(img);
    }
}

function deleteKey() {
    let imgDiv = document.querySelector(".key");
    imgDiv.innerHTML = ''

}
