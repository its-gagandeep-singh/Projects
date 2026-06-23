const boxes = document.querySelectorAll(".box")
const reset = document.getElementById("reset");
let playerValue = true; // X

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

function resetGame() {
    click = 1
    enableButtons()
    boxes.forEach((box) => {
        box.innerText = ""
        box.style.color = "black"
        box.style.border = "none"
        box.style.backgroundColor = "white"
    })
}

// click to mark X or O 
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
                console.log("x is winner")
                winnerPattern(val[0], val[1], val[2])
                disableButtons()
            }
            else if (pos1.innerText === "O" &&
                pos2.innerText === "O" &&
                pos3.innerText === "O"
            ) {
                console.log("O is winner")
                winnerPattern(val[0], val[1], val[2])
                disableButtons()
            }
        }
    }
}

function isDraw(click) {
    if(click >= 9) {
        disableButtons()
        console.log("Draw")
    }
    
}

// to stop marking x or o after finding the winner
function disableButtons() {
    for (let box of boxes) {
        if (box.textContent === "") {
            box.disabled = true; // disabled button 
        }
    }
}

// enable buttons to replay
function enableButtons() {
    for (let box of boxes) {
        if (box.textContent === "") {
            box.disabled = false; // disabled button 
        }
    }
}

// pattern where the winner is found
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

// reset the values in the cells
reset.addEventListener("click", resetGame)















/*
    // TO DO

    1. WHEN THE GAME DRAW THEN WHAT WILL HAPPEN
    2. DISPLAY OF THE WINNER ON THE SCREEN WHEN THE PLAYER WINS THE GAME


*/


// color logic //
/*
    if(array.innerText === "X") {
    array.style.backgroundColor="red"
    } else {
    array.style.backgroundColor="blue"
    }

*/


// toggle the background color of the second box (index 1)
// const box = document.querySelectorAll(".box")[1];
// if (!box) return;

// if (c === 1) {
//     box.style.backgroundColor = "red";
//     c = 2;
// } else {
//     box.style.backgroundColor = "royalblue";
//     c = 1;
// }


// querySelectorAll -> returns array called node list with values of html element shares same class //
/*
    // Event object (passed in event function parameter)

1. event object has differenct type of method like target, type, key
2. e.target -> tells which button is clicked
*/

// boxes = array = nodelist return by querySelectorAll // 
