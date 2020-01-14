function solve (input=5) {
    let result = new Array(input);

    for (let i=0; i<input; i++) {
        result[i] = "* ".repeat(input).trim();
    }

    

    console.log(solve(5));
   
}