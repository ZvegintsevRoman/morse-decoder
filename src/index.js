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
    
    let letters = '';
    
    for (let i = 0; i < expr.length; i += 10) {
        let partOfString = expr.slice(i, i+10);
        letters += partOfString + '!';
    }

    let decoded = letters.replace(/11/g, '-').replace(/10/g, '.').replace(/00/g, '');
    
    let arrayOfWords = decoded.split('!');

    let result = arrayOfWords.map(current => {
        if (current in MORSE_TABLE) {
            return MORSE_TABLE[current];
        } else { return current; 
        }
    }).join("").split('**********').join(" ");
    
    return result;
    
}

module.exports = {
    decode
}