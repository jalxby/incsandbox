function countPositivesSumNegatives(input) {
    let pos = 0;
    let neg = 0;
    for (const inputKey in input) {
        if (inputKey === 0) {

        } else if (inputKey < 0) {
            neg = neg + inputKey;
        }else if (inputKey > 0){
            pos++;
        }
    }
    return [].push(pos, neg);

}
countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])
