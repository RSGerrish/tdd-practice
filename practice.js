function reverseString(str) {
  let splitString = str.split("");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("");

  return joinArray;
}

function capitalizeFirst(str) {
  const firstLetter = str.substring(0, 1);
  const lastWord = str.substring(1, str.length);
  let capString = firstLetter.toUpperCase() + lastWord.toLowerCase();

  return capString;
}

const calculator = {
  
  add: function(a, b) {
    return a + b;
  },

  subtract: function(a, b) {
    return a - b;
  },

  divide: function(a, b) {
    return a / b;
  },

  multiply: function(a, b) {
    return a * b;
  }
}

function caesarCipher(str) {
  const splitString = str.split("");
  
  for (let i = 0; i < splitString.length; i++) {
    let charCode = splitString[i].charCodeAt(0);
    
    if (charCode === 122) {
      charCode = 97;
    } else if (charCode > 96 && charCode < 122) {
      charCode += 1;
    }

    let newChar = String.fromCharCode(charCode);

    splitString[i] = newChar;
  }

  const joinArray = splitString.join();

  return joinArray.replaceAll(',', '');
};

function analyzeArray(array) {
  const obj = {
    average: (array.reduce((prev, curr) => prev + curr, 0)) / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  }

  return obj;
};

export { reverseString, capitalizeFirst, calculator, caesarCipher, analyzeArray };