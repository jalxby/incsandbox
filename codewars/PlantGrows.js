// Input/Output
//     [input] integer upSpeed
// A positive integer representing the daily growth.
//     Constraints: 5 ≤ upSpeed ≤ 100.
//     [input] integer downSpeed
// A positive integer representing the nightly decline.
//     Constraints: 2 ≤ downSpeed < upSpeed.
//     [input] integer desiredHeight
// A positive integer representing the threshold.
//     Constraints: 4 ≤ desiredHeight ≤ 1000.
//     [output] an integer
// The number of days that it will take for the plant to reach/pass desiredHeight
// (including the last day in the total count).
function growingPlant(upSpeed, downSpeed, desiredHeight) {
    let result = 0;
    let i = 0;
    if(upSpeed >= desiredHeight){
        return 1;
    }else{
        while (result < desiredHeight) {
            result += upSpeed;
            i++
            if(result < desiredHeight){
                result -= downSpeed;
            }
        }
    }
    return i;
}

console.log(growingPlant(100, 10, 910))
