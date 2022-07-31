const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let str = expr;
    let arr = [];
    let strOut = [];
    // console.log(str.replace(/^.{10}/, ''));

    for (let i = 0; i < expr.length / 10; i++) {
        arr.push(str.slice(0, 10));
        str = str.replace(/^.{10}/, '');
    }

    for (let i = 0; i < arr.length; i++) {
        let arr1 = arr[i];
        if (arr[i] === '**********') {
            strOut.push(' ');
        } else {
            for (let j = 0; j < arr[i].length / 2; j++) {
                if (arr1.slice(0, 2) === '10') {
                    strOut.push('.');
                } else if (arr1.slice(0, 2) === '11') {
                    strOut.push('-');
                } else {
                    strOut.push('');
                }
                arr1 = arr1.replace(/^.{2}/, '');
            }
        }
        strOut.push(' ');
    }

    let str1 = strOut.join('').toString();
    console.log(str1);
    console.log(arr);

    return str1
    .split('   ')
    .map(
      a => a
      .split(' ')
      .map(
        b => MORSE_TABLE[b]
      ).join('')
    ).join(' ');
}

module.exports = {
    decode
}