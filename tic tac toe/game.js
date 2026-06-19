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

// click to reset the game
reset.addEventListener("click", () => {
    window.location.reload()
})

// click to mark X or O 
function start() {
    boxes.forEach((box, index) => {
        box.addEventListener("click", function () {

            if (box.innerText === "") { // empty value in button //
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
            }
        })
    })
}

// find who won the game
const winner = () => {
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
                endOfGame()
                return;
            }
            else if (pos1.innerText === "O" &&
                pos2.innerText === "O" &&
                pos3.innerText === "O"
            ) {
                console.log("O is winner")
                winnerPattern(val[0], val[1], val[2])
                endOfGame()
                return;
            }
        }
    }
}

// to stop marking x or o after finding the winner
function endOfGame() {
    for (let box of boxes) {
        if (box.textContent === "") {
            box.disabled = true; // disabled button 
        }
    }
}

// pattern where the winner is found
const winnerPattern = (pos1, pos2, pos3) => {
    boxes[pos1].style.color = "red"
    boxes[pos2].style.color = "red"
    boxes[pos3].style.color = "red"

    boxes[pos1].style.border = "0.4vmin solid red"
    boxes[pos2].style.border = "0.4vmin solid red"
    boxes[pos3].style.border = "0.4vmin solid red"

    boxes[pos1].style.backgroundColor = "black"
    boxes[pos2].style.backgroundColor = "black"
    boxes[pos3].style.backgroundColor = "black"

}



















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
