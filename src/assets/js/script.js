const positions = document.querySelectorAll(".pos");
const player = document.querySelector(".player");
const playerX = [];
const playerO = [];
let cont = 0;

let winPositions = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
];

positions.forEach(currentItem => {
    currentItem.addEventListener("click", playAction);
});

function playAction(e) {
    if (e.currentTarget.getAttribute("data-disabled")) {
        return;
    }
    cont += 1;
    console.log(cont);
    let currentItem = e.currentTarget;
    let currentPlayer = player.textContent;
    let positionChoose = currentItem.getAttribute("pos");

    currentItem.innerHTML = `${currentPlayer}`;
    if (currentPlayer === "X") {
        player.textContent = "O";
        playerX.push(positionChoose);
        if (checkForWin(playerX)) {
            alert(`O jogador ${currentPlayer} venceu o jogo`);
            location.reload()
        }
    }
    if (currentPlayer === "O") {
        player.textContent = "X";
        playerO.push(positionChoose);
        if (checkForWin(playerO)) {
            alert(`O jogador ${currentPlayer} venceu o jogo`);
            location.reload()
        }
    }
    if (cont === 9) {
        alert(`O jogo terminou empatado !!!`);
        location.reload()
    }
    e.currentTarget.setAttribute("data-disabled", "true");

}

function checkForWin(playerArray) {
    let hasWon = false;

    winPositions.forEach(function (winPosition) {
        if (winPosition.every(function (position) {
            return playerArray.includes(position.toString());
        })) {
            hasWon = true;
        }
    });

    return hasWon;
}
