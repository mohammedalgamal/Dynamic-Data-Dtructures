export default class Knight {
    #isValidPosition(position) {
        if (position[0] > 7 || 
            position[0] < 0 || 
            position[1] > 7 || 
            position[1] < 0) {
                return false;
            };
        
        return true;
    };
    
    getAllMoves(currentPosition) {
        const moves = [];
        const possibleDirections = [[1, 2], [2, 1], [-1, 2], [2, -1],
                                    [-2, 1], [1, -2], [-1, -2], [-2, -1]];

        for (let i = 0; i < 8; i++) {
            const newPosition = [currentPosition[0] + possibleDirections[i][0], 
                                 currentPosition[1] + possibleDirections[i][1]];
            if (this.#isValidPosition(newPosition)) {
                moves.push(newPosition);
            };
        };

        return moves;
    };
};
