function solve (arr1, arr2, arr3) {
    let sumLength;
    let sumAverage;

    let sumFirstArr = arr1.length;
    let sumSecArr = arr2.length;
    let sumThirdArr = arr3.length;

    sumLength = sumFirstArr+sumSecArr+sumThirdArr;
    sumAverage = Math.floor(sumLength/3);

    console.log(sumLength);
    console.log(sumAverage);
}

// solve('chocolate', 'ice cream', 'cake')
solve('pasta', '5', '22.3')