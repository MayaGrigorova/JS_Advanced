function solve (fruit, gram, price) {

    let result=0;

    result = (gram / 1000)*price;

    console.log(`I need $${result.toFixed(2)} to buy ${(gram/1000).toFixed(2)} kilograms ${fruit}.`);

}
solve('orange', 2500, 1.80);
solve('apple', 1563, 2.35);