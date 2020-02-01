document.getElementById("current-year").innerHTML = new Date().getFullYear();

let keys = {
    arrowUp: 38,
    arrowDown: 40,
    arrowLeft: 37,
    arrowRight: 39
}

let keyUp = false
let keyDown = false
let keyLeft = false
let keyRight = false

document.addEventListener("keydown", e => {
    switch (e.keyCode) {
        case keys.arrowUp:
            keyUp = true
            keyDown = false
            keyLeft = false
            keyRight = false
            console.log("up")
            break
        case keys.arrowDown:
            keyDown = true
            keyUp = false
            keyLeft = false
            keyRight = false
            console.log("down")
            break
        case keys.arrowLeft:
            keyLeft = true
            keyUp = false
            keyDown = false
            keyRight = false
            console.log("left")
            break
        case keys.arrowRight:
            keyRight = true
            keyUp = false
            keyDown = false
            keyLeft = false
            console.log("right")
            break
        default:
            break
    }
})
