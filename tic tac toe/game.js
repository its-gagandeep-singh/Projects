const boxes = document.querySelectorAll(".box")
const reset = document.getElementById("reset")
let playerValue = true;

const pattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

start()

/* to restart the game when winner is found */
function playAgain() {
    const playAgain = document.querySelector(".playAgain-btn")
    playAgain.addEventListener("click", () => {
        document.querySelector(".msg-box").classList.add("hideBox")
        resetGame()
    })
}

function resetGame() {
    click = 1
    boxes.forEach((box) => {
        box.innerText = ""
        box.style.color = "black"
        box.style.border = "none"
        box.style.backgroundColor = "white"
    })
    document.querySelector(".msg-box").classList.add("hideBox")
    enableButtons()
}

/* click to mark X or O */
let click = 1
function start() {
    boxes.forEach((box, index) => {
        box.addEventListener("click", function () {
            if (box.innerText === "") { /* check empty value in button */
                if (playerValue === true) {
                    box.innerText = "X"
                    playerValue = false
                } else {
                    if (playerValue === false) {
                        box.innerText = "O"
                        playerValue = true
                    }
                }
                winner()
                isDraw(click)
                click++
            }
        })
    })
}

// to find winner
function winner() {
    for (let val of pattern) {

        let pos1 = boxes[val[0]];
        let pos2 = boxes[val[1]];
        let pos3 = boxes[val[2]];

        if (pos1.innerText !== "" &&
            pos2.innerText !== "" &&
            pos3.innerText !== ""
        ) {
            if (pos1.innerText === "X" &&
                pos2.innerText === "X" &&
                pos3.innerText === "X"
            ) {
                disableButtons()
                winnerPattern(val[0], val[1], val[2])
                displayWinnerX()
            }
            else {
                if (pos1.innerText === "O" &&
                    pos2.innerText === "O" &&
                    pos3.innerText === "O"
                ) {
                    disableButtons()
                    winnerPattern(val[0], val[1], val[2])
                    displayWinnerO()
                }
            }
        }
    }
}

/* to display message container */
function displayWinnerX() {
    document.querySelector(".msg-box").classList.remove("hideBox")
    paragraph.innerText = "X is the Winner ✌️"
    playAgain()
}

/* to display message container  */
function displayWinnerO() {
    document.querySelector(".msg-box").classList.remove("hideBox")
    paragraph.innerText = "O is winner ✌️"
    playAgain()
}

function isDraw(click) {
    if (click == 9) {
        disableButtons()
        console.log("Draw")
    }
}

/* to stop marking x or o after finding the winner */
function disableButtons() {
    for (let box of boxes) {
        if (box.innerText === "") {
            box.disabled = true; // disabled button 
        }
    }
}

/* enable buttons to replay */
function enableButtons() {
    for (let box of boxes) {
        if (box.innerText === "") {
            box.disabled = false; // disabled button 
        }
    }
}

/* pattern where the winner is found */
function winnerPattern(pos1, pos2, pos3) {
    boxes[pos1].style.color = "red"
    boxes[pos2].style.color = "red"
    boxes[pos3].style.color = "red"

    boxes[pos1].style.border = "0.3vmin solid red"
    boxes[pos2].style.border = "0.3vmin solid red"
    boxes[pos3].style.border = "0.3vmin solid red"

    boxes[pos1].style.backgroundColor = "black"
    boxes[pos2].style.backgroundColor = "black"
    boxes[pos3].style.backgroundColor = "black"
}

/* reset game */
reset.addEventListener("click", () => {
    resetGame()
})
