function capitalize(str) {
    if (str.length !== 0) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    } else {
        return '';
    }
};

function reverseString(str) {
    const inverse = str.split('');
    inverse.reverse();
    return inverse.join('');
};

const calculator = {
    add: function (a, b) {
      return a + b;
    },
    subtract: function (a, b) {
      return a - b;
    },
    multiply: function (a, b) {
      return a * b;
    },
    divide: function (a, b) {
      if (b === 0) {
        return 'Error: División por cero';
      }
      return a / b;
    },
};

function caesarCipher(str, factor) {
    const strArr = str.split('');

    if(factor === 0) {
        return str;
    }

    factor = factor % 26;

    for (let i = 0; i < strArr.length; i++) {
        if (/[a-zA-Z]/.test(strArr[i])) {
            let asciiChar = strArr[i].charCodeAt(0);

            if (asciiChar === 65 && factor < 0 ) { //mayus del 65 al 90, minus del 97 al 122
                asciiChar = 90 + factor + 1;
            } else if (asciiChar === 97 && factor < 0) {
                asciiChar = 122 + factor + 1;
            } else if (asciiChar === 122 && factor > 0) {
                asciiChar = 97 + factor - 1;
            } else if (asciiChar === 90 && factor > 0) {
                asciiChar = 65 + factor - 1;
            } else {
                asciiChar += factor;
            }

            strArr[i] = String.fromCharCode(asciiChar);
        }
    }

    return strArr.join('');
}

function analyzeArray(arr) {
    const valid = arr.every(function(element) {
        return !isNaN(element);
    });

    if (valid) {
        const sum = arr.reduce(function(a, b) {
            return a + b;
        }, 0);

        const avg = sum / arr.length;
        const min = Math.min(...arr);
        const max = Math.max(...arr);
        const len = arr.length;

        return {
            average: avg,
            min: min,
            max: max,
            length: len
        };
    } else {
        return null;
    }
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };