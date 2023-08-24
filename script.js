const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';

cells.forEach(cell => {
    cell.addEventListener('click', () => {
        if(!cell.textContent) {
            cell.textContent = currentPlayer;
            if(checkWin()) {
                alert(`${currentPlayer} wins!`);
                resetGame();
            } else if(checkDraw()) {
                alert('It\'s a draw!');
                resetGame();
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        }
    });
});

function checkDraw() {
    return [...cells].every(cell => cell.textContent !== '');
}

function resetGame() {
    cells.forEach(cell => {
        cell.textContent = '';
    });
    currentPlayer = 'X'
}

function checkWin() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Columns
        [0, 4, 8], [2, 4, 6]              // Diagonal
    ];

    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (cells[a].textContent &&
            cells[a].textContent === cells[b].textContent && 
            cells[a].textContent === cells[c].textContent) {
                return true;
            }
    }

    return false;
}