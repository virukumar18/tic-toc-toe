let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset-btn");
let messContainer = document.querySelector(".container-mess");
let messbtn = document.querySelector(".mess-button");
let winner = document.querySelector(".mess")

let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

const resetGame = () => {
    turnO = true;
    enableBoxes();
    messContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disebled = true;
        
        chekWinner();
    });
});

const disableBoxes = () => {
    for (let box of boxes) {
        box.disebled = true;
    }
}

const enableBoxes = () => {
    for (let box of boxes) {
        box.disebled = false;
        box.innerText = "";
    }
}

const showWinner = (winningplayer) => {
    winner.innerText = `congratulaion, winner is ${winningplayer}`
    messContainer.classList.remove("hide");
    disableBoxes();
};

const chekWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val)
            };
        };
    };
};

messbtn.addEventListener("click", resetGame)
reset.addEventListener("click", resetGame)
