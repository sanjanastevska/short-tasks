// Longest word chain from a list of words
let array = prompt("Enter array: ").split(",");
console.log(array)

let counter = 0;
let wordChain = [];
for (i = 1; i < array.length - 1; i++) {
    let lastCharacter = array[i].charAt(array[i].length - 1);
    let firstCharacter = array[i + 1][0];
    if (lastCharacter == firstCharacter) {
        counter++;
        wordChain.push(array[i], array[i + 1]);
    }
}

wordChain = [...new Set(wordChain)]

console.log("Word Chain: ", wordChain);
console.log("The longest prefix: ", counter);
