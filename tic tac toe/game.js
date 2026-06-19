let boxes = document.querySelectorAll(".box")
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

// click to reset the game
const reset = document.getElementById("reset");
reset.addEventListener("click", () => {
    window.location.reload()
    
    // boxes.forEach((boxes) => {
    //     if(boxes.innerText != "") 
    //     {
    //         boxes.innerText = ""
    //     }
    // })

})

boxes.forEach((button, index) => {
    button.addEventListener("click", () => {
        // if box is empty only then add
        if(button.innerText === "") 
        {
            if(playerValue) {
                button.textContent = "X"
                playerValue = false;
            } else {
                button.textContent = "O"
                playerValue = true;
            }
        }
    })
})















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
