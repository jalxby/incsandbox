function solution(str) {
    let new_str="";
    for (let i = str.length - 1; i >= 0; i--) {
        new_str += str[i];
    }
    return new_str;
}
console.log(solution("world"))
//
// function solution2(str){
//     return str.split('').reverse().join('');
// }
//
// console.log(solution2("world burning"))
