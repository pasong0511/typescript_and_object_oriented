/**
 * Let's make a game 🕹
 */
type Position = {
    x: number;
    y: number;
};

let position: Position = {
    x: 0,
    y: 0,
};

type Commend = "up" | "down" | "left" | "right";
function move(commend: Commend): Position {
    switch (commend) {
        case "up":
            position.y += 1;
            break;
        case "down":
            position.y -= 1;
            break;
        case "left":
            position.x -= 1;
            break;
        case "right":
            position.x += 1;
            break;
        default:
            throw new Error(`없는 방향 ${commend}`);
            break;
    }

    return position;
}

console.log(position); // { x: 0, y: 0}

move("up");
console.log(position); // { x: 0, y: 1}

move("down");
console.log(position); // { x: 0, y: 0}

move("left");
console.log(position); // { x: -1, y: 0}

move("right");
console.log(position); // { x: 0, y: 0}
