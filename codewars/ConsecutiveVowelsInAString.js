//'a', 'e', 'i', 'o', 'u'
const values = {
    'a': 1, 'e': 2, 'i': 3, 'o': 4, 'u': 5
}

function checkIfA(arr) {
    if (/a/.exec(arr)) {
        return arr.substring((/a/.exec(arr).index))
    } else {
        return 0;
    }
}

function getTheVowels(word) {
    let result = 0;
    let count;
    if (checkIfA(word) !== 0) {
        let arr = checkIfA(word).match(/[aeiou]+/g);
        let str = [1, 2, 5, 3, 1, 1, 1, 4, 5, 1, 3, 3, 3, 2] //arr.join('');
        let j = 0;
        for (let i = 0; i < str.length; i++) {
            if (str[j] - str[i + 1] === -1 || (str[j]===5 && str[i + 1] === 1)) {
                j = i;
                result++;
                j++;
            } else {

            }

        }
        return result;
    } else {
        return 0;
    }

}

console.log(getTheVowels("akfheujfkgiaaaofmmfkdfuaiiie"))
