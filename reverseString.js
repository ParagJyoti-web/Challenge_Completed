function reverseString(text) {
  let reversed = "";

  for (let i = text.length - 1; i >= 0; i--) {
    reversed += text[i];
  }

  return reversed;
}

console.log(reverseString("hello")); 
console.log(reverseString("name")); 
console.log(reverseString("Eye")); 
console.log(reverseString("Tent")); 

