// chop - divide the number by two
//  dice - square root of number
//  spice - add 1 to number
//  bake - multiply number by 3
//  fillet - subtract 20% from number

function solve(input) {

    let number = +input[0];

    let operations = {
        chop: (x) => x/2,
        dice: (x) => Math.sqrt(x),
        spice: (x) => x+1,
        bake: (x) => x*3,
        fillet: (x) => 0.8*x
    }

    for (let i = 1; i < input.length; i++) {
        number = operations[input[i]](number);
        console.log(number);
    }
}

solve(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);