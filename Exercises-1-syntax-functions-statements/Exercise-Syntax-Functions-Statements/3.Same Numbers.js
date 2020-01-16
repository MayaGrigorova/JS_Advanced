function solve (input) {
    
    let number = input.toString().split('');
    let allTheSame = true;
    let sum = 0;

    for (let i = 0; i < number.length; i++) {
        
        if (allTheSame) {
            allTheSame = number[i] === number[0];
        }
        sum += +number[i];
    }

    console.log(allTheSame);
    console.log(sum);
}

console.log(solve(2222222));