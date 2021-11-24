function gameLoop() {
    var prompt = require('prompt-sync')({ sigint: true });
    const { printBoard, putPiece, checkBoard } = require('./board');

    let board = [
        ['-', '-', '-', '-', '-', '-', '-'],
        ['-', '-', '-', '-', '-', '-', '-'],
        ['-', '-', '-', '-', '-', '-', '-'],
        ['-', '-', '-', '-', '-', '-', '-'],
        ['-', '-', '-', '-', '-', '-', '-'],
        ['-', '-', '-', '-', '-', '-', '-'],
    ];

    let turn = 'Y';

    while (true) {
        gameState = checkBoard(board);
        if (gameState === 'Y') {
            printBoard(board);
            console.log('Y won the game!');
            break;
        } else if (gameState === 'R') {
            printBoard(board);
            console.log('R won the game!');
            break;
        } else if (gameState === 'DRAW') {
            printBoard(board);
            console.log('Nobody won today.');
            break;
        }

        if (turn === 'Y') {
            printBoard(board);
            const moveY = prompt(
                'Next move is Y. In which column does it go? '
            );
            const checkY = putPiece(board, turn, moveY);
            if (checkY) {
                turn = 'R';
                continue;
            } else {
                console.log(
                    "ERROR! You can't put a piece in this column. Choose another one!"
                );
                continue;
            }
        }
        printBoard(board);
        const moveR = prompt('Next move is R. In which column does it go? ');
        const checkR = putPiece(board, turn, moveR);
        if (checkR) {
            turn = 'Y';
            continue;
        } else {
            console.log(
                "ERROR! You can't put a piece in this column. Choose another one!"
            );
            continue;
        }
    }
}
gameLoop();

module.exports = gameLoop;
