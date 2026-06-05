function morseConvertor(morseCode) {
  const morseDictionary = {
    ".-": "A",
    "-...": "B",
    "-.-.": "C",
    "-..": "D",
    ".": "E",
    "..-.": "F",
    "--.": "G",
    "....": "H",
    "..": "I",
    ".---": "J",
    "-.-": "K",
    ".-..": "L",
    "--": "M",
    "-.": "N",
    "---": "O",
    ".--.": "P",
    "--.-": "Q",
    ".-.": "R",
    "...": "S",
    "-": "T",
    "..-": "U",
    "...-": "V",
    ".--": "W",
    "-..-": "X",
    "-.--": "Y",
    "--..": "Z",
  };

  morseCode = morseCode.split(" ");
  let res = "";
  for (let i = 0; i < morseCode.length; i++) {
    for (code in morseDictionary) {
      if(morseCode[i] === code){
        res += morseDictionary[code];
      }
    }
  }
  return res
}
let code = ".... . .-.. .-.. --- .-- --- .-. .-.. -..";
console.log(morseConvertor(code))
