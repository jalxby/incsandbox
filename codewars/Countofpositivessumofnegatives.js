function countPositivesSumNegatives(input) {
    console.log(arguments)
    let pos = 0;
    let neg = 0;
    let arr = [];
    if (input === null || input.length ===0) {
        for (const arrKey in arr) {
            arr.pop();
        }
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


console.log(countPositivesSumNegatives([]))

