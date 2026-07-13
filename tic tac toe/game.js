const boxes = document.querySelectorAll(".box")
const reset = document.getElementById("reset")
<<<<<<< HEAD
const paragraph = document.getElementById("paragraph")
=======
>>>>>>> 45042227be156ea69d760a3592751eac1e72dd99
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
<<<<<<< HEAD
                let findWinner = winner()

                if (!findWinner) {
                    isDraw(click)
                }
=======
                winner()
                isDraw(click)
>>>>>>> 45042227be156ea69d760a3592751eac1e72dd99
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
<<<<<<< HEAD
            pos1.innerText == pos2.innerText && pos2.innerText == pos3.innerText) {
            if (pos1.innerText === "X") {
                displayWinnerX()
            }
            else {
                displayWinnerO()
            }
            disableButtons()
            winnerPattern(val[0], val[1], val[2])
            return true;
        }
    }
    return false;
}


=======
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

>>>>>>> 45042227be156ea69d760a3592751eac1e72dd99
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

function displayDraw() {
    document.querySelector(".msg-box").classList.remove("hideBox")
    paragraph.innerText = "This Game is a Draw !"
<<<<<<< HEAD
    playAgain() 
=======
    playAgain()
>>>>>>> 45042227be156ea69d760a3592751eac1e72dd99
}

/* Check if game is dray */
function isDraw(click) {
    if (click == 9) {
        disableButtons()
        displayDraw()
    }
}

/* to stop marking x or o after finding the winner */
function disableButtons() {
    for (let box of boxes) {
<<<<<<< HEAD
        box.disabled = true; // enable button 
=======
        if (box.innerText === "") {
            box.disabled = true; // disabled button 
        }
>>>>>>> 45042227be156ea69d760a3592751eac1e72dd99
    }
}

/* enable buttons to replay */
function enableButtons() {
    for (let box of boxes) {
<<<<<<< HEAD
        box.disabled = false; // disable button 
=======
        if (box.innerText === "") {
            box.disabled = false; // disabled button 
        }
>>>>>>> 45042227be156ea69d760a3592751eac1e72dd99
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

<<<<<<< HEAD
/* to reset game */
=======
/* reset game */
>>>>>>> 45042227be156ea69d760a3592751eac1e72dd99
reset.addEventListener("click", () => {
    resetGame()
})

<<<<<<< HEAD
=======

>>>>>>> 45042227be156ea69d760a3592751eac1e72dd99
