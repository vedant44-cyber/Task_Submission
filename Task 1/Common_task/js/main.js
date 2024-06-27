let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let timerDisplay = document.querySelector("#timer");

let turnO = true;
let count = 0;
let moveTimeLimit = 10;
let timer;
let timeLeft = moveTimeLimit;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turnO = true;
    count = 0;
    timeLeft = moveTimeLimit;
    enableBoxes();
    msgContainer.classList.add("hide");
    clearInterval(timer);
    updateTimerDisplay();
    startMoveTimer();
};

const startMoveTimer = () => {
    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();

        if (timeLeft <= 0) {
            switchTurns();
        }
    }, 1000);
};

const stopMoveTimer = () => {
    clearInterval(timer);
};

const switchTurns = () => {
    if (turnO) {

        turnO = false;
    } else {

        turnO = true;
    }
    stopMoveTimer();
    timeLeft = moveTimeLimit;
    updateTimerDisplay();
    startMoveTimer();
};

const updateTimerDisplay = () => {
    timerDisplay.textContent = `Time Left: ${timeLeft} sec`;
};

boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        if (box.innerText === "") {
            if (turnO) {

                box.innerText = "O";
                switchTurns();
            } else {

                box.innerText = "X";
                switchTurns();
            }
            box.disabled = true;
            count++;

            let isWinner = checkWinner();

            if (count === 9 && !isWinner) {
                gameDraw();
            } else if (isWinner) {
                stopMoveTimer();
            }
        }
    });
});

const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    stopMoveTimer();
};

const disableBoxes = () => {
    boxes.forEach(box => {
        box.disabled = true;
    });
};

const enableBoxes = () => {
    boxes.forEach(box => {
        box.disabled = false;
        box.innerText = "";
    });
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
                return true;
            }
        }
    }
    return false;
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);


resetGame();
