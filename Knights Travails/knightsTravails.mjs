import Knight from "./knight.mjs";
import getIndex, { getArray } from "./utils.mjs";

class MovesGraph {
    constructor() {
        this.adjList = this.makeAllPossibleMoves();
    };

    makeAllPossibleMoves() {
        const graph = new Map();

        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                const newKnight = new Knight([i, j]);
                graph.set(getIndex(newKnight.currentPosition), newKnight.nextMoves);
            };
        };

        return graph;
    };

    #fillQueue(node) {
        let nextMoves = this.adjList.get(node);
        const returnArray = [];

        for (let i = 0; i < nextMoves.length; i++) {
            returnArray.push([node, nextMoves[i]]);
        };

        return returnArray;
    };

    #makePathsMap(start) {
        const paths = new Map();

        for (let i = 0; i < 64; i++) {
            paths.set(i, -1);
        };

        paths.set(start, -2);

        return paths;
    };

    searchGraph(start, target) {
        const queue = [...this.#fillQueue(start)];
        const paths = this.#makePathsMap(start);
        
        while (queue.length > 0 && paths.get(target) === -1) {
            const position = queue.shift();

            if (paths.get(position[1]) === -1) { 
                paths.set(position[1], position[0]);
                queue.push(...this.#fillQueue(position[1]));
            };
        };
        
        return paths;
    };

    constructPath(start, target) {
        const pathMap = this.searchGraph(start, target);

        const path = [];
        let pointer = target;

        while(path.indexOf(start) === -1) {
            path.unshift(pointer);
            pointer = pathMap.get(pointer);
        };

        return path;
    };

    knightMoves(startArr, targetArr) {
        const currentPosition = getArray(startArr);
        const targetPosition = getArray(targetArr);

        if (currentPosition.some(value => value > 7 || value < 0) ||
            targetPosition.some(value => value > 7 || value < 0)) {
                console.log("Error: invalid positions!");
                return; 
        };

        const path = this.constructPath(getIndex(currentPosition), getIndex(targetPosition));
        
        let outputStr = `You made it in ${path.length - 1} moves!  Here's your path:\n`;
        if (path.length === 2) {
            outputStr = `You made it in ${path.length - 1} move!  Here's your path:\n`;
        } 
        else if (path.length === 1){
            outputStr = `You made it immediately!  Here's your path:\n`;
        }

        for (let i = 0; i < path.length; i++) {
            const arr = getArray(path[i])
            outputStr += `[${arr[0]}, ${arr[1]}]\n`;
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
graph.knightMoves([0, 0], [0, 0]);
graph.knightMoves([0, 0], [1, 2]);
graph.knightMoves([3, 3], [0, 0]);
graph.knightMoves([3, 3], [4, 3]);