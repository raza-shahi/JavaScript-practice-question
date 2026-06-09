function uniqueCh(str){
  let seen = new Map();
  let uniqueLetter = "";
  for(let i=0;i<str.length;i++){
    if(!seen.has(str[i])){
      seen.set(str[i],i);
      uniqueLetter += str[i];
    }
  }
  return uniqueLetter;
}
let value = "hello world"
console.log(uniqueCh(value))