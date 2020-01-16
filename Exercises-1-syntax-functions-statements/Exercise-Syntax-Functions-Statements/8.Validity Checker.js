// {x1, y1} to {0, 0}
// {x2, y2} to {0, 0} 
// {x1, y1} to {x2, y2}

function solve(input) {
    let x1 = +input[0];
    let y1 = +input[1];
    let x2 = +input[2];
    let y2 = +input[3];

    function triangle(x1, y1, x2, y2){

    let katetX = x2-x1;
    let katetY = y2-y1;
    return Math.sqrt(katetX**2 + katetY**2);

    }

    if (Number.isInteger(triangle(x1, y1, 0, 0))) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }
 
    if (Number.isInteger(triangle(x2, y2, 0, 0))) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }
 
    if (Number.isInteger(triangle(x1, y1, x2, y2))) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }

}
console.log(solve([3, 0, 0, 4]));
console.log(solve([2, 1, 1, 1]));