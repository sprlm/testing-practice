function normalizeShift(shift) {
  return (shift > 26 || shift < -26) ? (shift % 26) : shift;
}

function shiftChar(char, shift) {
  // do not shift if char is not a letter
  if (!/^[a-zA-Z]+$/.test(char)) {
    return char;
  }

  let newChar;
  const charCode = char.charCodeAt(0);
  
  if (charCode >= 65 && charCode <= 90) {
    if (charCode + shift > 90) {
      newChar = String.fromCharCode(charCode + shift - 26);
    } else if (charCode + shift < 65) {
      newChar = String.fromCharCode(charCode + shift + 26);
      console.log('cum');
    } else {
      newChar = String.fromCharCode(charCode + shift);
    }
  }

  if (charCode >= 97 && charCode <= 122) {
    if (charCode + shift > 122) {
      newChar = String.fromCharCode(charCode + shift - 26);
    } else if (charCode + shift < 97) {
      newChar = String.fromCharCode(charCode + shift + 26);
    } else {
      newChar = String.fromCharCode(charCode + shift);
    }
  }

  return newChar;
}

function caesarCipher(str, shift) {
  shift = normalizeShift(shift);

  return str.split('').map(char => shiftChar(char, shift)).join('');
}

export default caesarCipher;
