function printBoard(board) {
    let copyBoard = [...board];
    copyBoard.unshift(['0', '1', '2', '3', '4', '5', '6']);
    let boardLine = '';
    for (let i = 0; i < copyBoard.length; i++) {
        boardLine = copyBoard[i].join(' ');
        console.log(boardLine);
        boardLine = '';
    }
}

function putPiece(board, piece, column) {
    if (column >= 0 && 6 >= column) {
        let columnArray = [];
        board.forEach((element) => {
            columnArray.push(element[column]);
        });
        if (columnArray.includes('-')) {
            let totalEmptySpaces = columnArray.filter(
                (elem) => elem === '-'
            ).length;
            board[totalEmptySpaces - 1][column] = piece;
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

function checkBoard(board) {
    let boardCopy = [...board];

    let hPrWt;
    let dPrWt = [];
    let vPrWt;

    let hPyWt;
    let dPyWt = [];
    let vPyWt;

    boardCopy.forEach((elem) => {
        let checkString = elem.join('');
        if (checkString.includes('RRRR')) {
            hPrWt = true;
        }
        if (checkString.includes('YYYY')) {
            hPyWt = true;
        }
    });

    for (let i = 0; i < 7; i++) {
        let checkArray = [];
        boardCopy.forEach((elem) => {
            checkArray.push(elem[i]);
        });
        let checkString = checkArray.join('');
        if (checkString.includes('RRRR')) {
            vPrWt = true;
        }
        if (checkString.includes('YYYY')) {
            vPyWt = true;
        }
    }

    let drawTrigger = [];
    boardCopy.forEach((elem) => drawTrigger.push(elem.includes('-')));

    if (hPyWt || vPyWt) {
        return 'Y';
    } else if (hPrWt || vPrWt) {
        return 'R';
    } else if (drawTrigger.every((value) => !value)) {
        return 'DRAW';
    } else {
        return 'PENDING';
    }
}

module.exports = {
    printBoard,
    putPiece,
    checkBoard,
};
