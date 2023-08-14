const startingPosition = [0, 0];
const seconds = 5;
const finalPositions = [];

const gridSize = 6;

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))


function drawBug(b, char) {
    console.clear();


    console.log("\n########");
    for (let y = gridSize - 1; y >= 0; y--) {
        let row = "#";
        for (let x = 0; x < gridSize; x++) {
            if (x == b[0] && y == b[1]) {
                row += char;
            } else {
                row += " ";
            }
        }
        row += "#";
        console.log(row);
    }
    console.log("########");
}


async function moveBug(b, depth) {
    if (depth >= 5) {
        finalPositions.push(b);

        drawBug(b, "X");
        await delay(200);

        return;
    } else {
        drawBug(b, "x");
        await delay(150);
    }
    
    let newPositions = [
        [b[0] + 1, b[1]],
        [b[0], b[1] + 1],
    ];
    for (let i = 0; i < newPositions.length; i++) {
        let newBug = newPositions[i];
        await moveBug(newBug, depth + 1);
    }

}

async function run() {
    await moveBug(startingPosition, 0);

    console.log(finalPositions);


    let matches = 0;
    for (p of finalPositions) {
        matches += p[0] == 3 && p[1] == 2
    }

    console.log(`Final positions (includes duplicate positions): ${finalPositions.length}`);
    console.log(`Positions that are (3, 2): ${matches}`);
    console.log(`Probability of (3, 2): ${matches / finalPositions.length}`);
}



run();
