export default class Board {
    constructor() {
        this.board = this.makeBoard();
    };

    makeBoard() {
        const board = [];

        for (let i = 0; i < 8; i++) {
            let tempRow = [];
            for (let j = 0; j < 8; j++) {
                tempRow.push(0);
            };
            board.push(tempRow);
        };

        board[0][0] = 1;

        return board;
    };

    makeMove(from = [0, 0], to = [1, 1]) {
        this.board[from[0]][from[1]] = 0;
        this.board[to[0]][to[1]] = 1;
    };
};