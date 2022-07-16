function pyramidHeight(n) {
    let i = 0;
    while ((i + 1) ** 2 <= n) {
        n = n - (i + 1) ** 2;
        i++;
    }
    return i;
}
console.log(pyramidHeight(5))
