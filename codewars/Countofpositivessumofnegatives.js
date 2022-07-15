function countPositivesSumNegatives(input) {
    console.log(arguments)
    let pos = 0;
    let neg = 0;
    let arr = [];
    if (input === [] || input === null) {
        arr.push(pos, neg);
    } else {
        for (const inputKey in input) {
            if (input[inputKey] < 0) {
                neg = neg + input[inputKey];
            } else if (input[inputKey] > 0) {
                pos++;
            }
        }
        arr.push(pos, neg);
    }
    return arr
}


console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))

