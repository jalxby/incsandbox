//
//
// function compareArrays(a, b) {
//     if (a.length !== b.length) return false;
//     for (let i = 0; i < b.length; i++)
//         if (a[i] !== b[i]) return false;
//     return true
// }
//
// function shuffle(arr1, arr2) {
//     let tempArr = [];
//     for (let i = 0; i < 2 * arr1.length / 2; i++) {
//         tempArr.push(arr1[i]);
//         tempArr.push(arr2[i]);
//     }
//     return tempArr
// }
//
// function faroCount(deckSize) {
//     let arr = new Array(deckSize);
//     let arr1;
//     let arr2;
//     let shu = [];
//     let count;
//     for (let i = 0; i < deckSize; i++) {
//         arr[i] = i;
//     }
//     arr1 = arr.slice(0, (deckSize / 2))
//     arr2 = arr.slice((deckSize / 2), deckSize)
//
//
//     if(arr1.length === 1)
//         count = 0;
//     else
//         count = 1;
//     shu = shuffle(arr1, arr2);
//
//     do {
//         arr1 = shu.slice(0, (deckSize / 2));
//         arr2 = shu.slice((deckSize / 2), deckSize);
//         shu = shuffle(arr1, arr2);
//         count++;
//     } while (!(compareArrays(arr, shu)))
//     return count;
//
//
// }
//
// console.log(faroCount(2));
function faroCount(deckSize){
    let pos = 2, step = 0;
    do {
        pos *= 2;
        pos -= pos > deckSize ? deckSize : 1;
        step++;
    } while (pos !== 2)
    return step;
}

faroCount(8);
