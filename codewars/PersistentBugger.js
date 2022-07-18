function persistence(num) {
    let multiply = 1;
    let numToArray;
    let i = 0;
    while (num.toString().split('').length !== 1) {
        numToArray = num.toString().split('');
        for (let i = 0; i < numToArray.length; i++) {
            multiply *= parseInt(numToArray[i]);
        }
        num = multiply;
        i++;
        multiply = 1
    }
    return i;
}

for (const arrayElement of array ) {

}
console.log(persistence(4));
