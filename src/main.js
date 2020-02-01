document.getElementById("current-year").innerHTML = new Date().getFullYear();

let keys = {
    arrowUp: 38,
    arrowDown: 40,
    arrowLeft: 37,
    arrowRight: 39
}


document.addEventListener("keydown", e => {

    switch (e.keyCode) {
        case keys.arrowUp:
            console.log("up")
            break
        case keys.arrowDown:
            console.log("down")
            break
        case keys.arrowLeft:
            console.log("left")
            break
        case keys.arrowRight:
            console.log("right")
            break
        default:
            break
    }
})
