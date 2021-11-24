function printBoard(board) {
    board.unshift(['0', '1', '2', '3', '4', '5', '6']);
    let boardLine = '';
    for( let i = 0; i < board.length; i++){
        boardLine = board[i].join(' ');
        console.log(boardLine);
        boardLine = '';
    }
}

module.exports = printBoard;