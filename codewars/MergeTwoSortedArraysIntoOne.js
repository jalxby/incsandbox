function mergeArrays(arr1, arr2) {
    return Array.from(new Set(arr1.concat(arr2))).sort(function(a, b) {
        return a - b;
    });;
}

console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]))
