// A = Ä = \u00c4     E = Ë = \u00cb     I = Ï = \u00cf
// O = Ö = \u00d6     U = Ü = \u00dc     Y = Ÿ = \u0178
// a = ä = \u00e4     e = ë = \u00eb     i = ï = \u00ef
// o = ö = \u00f6     u = ü = \u00fc     y = ÿ = \u00ff

const rockLetters = {
    'A': '\u00c4',
    'O': '\u00d6',
    'a': '\u00e4',
    'o': '\u00f6',
    'E': '\u00cb',
    'U': '\u00dc',
    'e': '\u00eb',
    'u': '\u00fc',
    'I': '\u00cf',
    'Y': '\u0178',
    'i': '\u00ef',
    'y': '\u00ff',

}

function heavyMetalUmlauts(boringText) {
    let str_arr = boringText.split('');
    for (let i = 0; i < str_arr.length; i++) {
        if (rockLetters.hasOwnProperty(str_arr[i])) {
            str_arr[i] = rockLetters[str_arr[i]]
        }
    }
    return str_arr.join('');
}



console.log(heavyMetalUmlauts('heavyMetalUmlauts'))
