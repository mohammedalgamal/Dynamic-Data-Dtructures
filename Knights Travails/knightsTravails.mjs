import Knight from "./knight.mjs";

class MovesGraph {
    constructor() {
        this.adjList = this.makeAllPossibleMoves();
    };

    makeAllPossibleMoves() {
        const graph = new Map();

        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                const newKnight = new Knight([i, j]);
                graph.set(newKnight.currentPosition, newKnight.nextMoves);
            };
        };

        return graph;
    };

    searchGraph(start, target) {

    };

    knightMoves(currentPosition, targetPosition) {
        const path = this.searchGraph(currentPosition, targetPosition);
        const outputStr = `You made it in ${path.length} moves!  Here's your path:`;

        for (let i = 0; i < path.length; i++) {
            outputStr += `${path[i]}\n`;
        };

        console.log(outputStr);
    };

    printGraph() {
        let keys = this.adjList.keys();
    
        for (let i of keys) {
            let values = this.adjList.get(i);
            let conc = "";

            for (let j of values) {
                conc += `[${j}] `;
            };
            
            console.log(`[${i}] -> ${conc}`);
        };
    };
};

const graph = new MovesGraph;
graph.printGraph();