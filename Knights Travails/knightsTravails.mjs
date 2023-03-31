import Knight from "./knight.mjs";

class MovesGraph {
    constructor() {
        this.graph = this.makeAllPossibleMoves();
    };

    makeAllPossibleMoves() {
        const graph = [];

        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                const newKnight = new Knight([i, j]);
                graph.push(newKnight);
            };
        };

        return graph;
    };
};

const graph = new MovesGraph;

console.log(graph.graph);