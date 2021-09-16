let array = prompt("Enter array").split(",");
console.log(array);

let counter = 0;
for (i = 0; i < array.length - 1; i++) {
    if(array[i+1] - array[i] <= 1) {
        counter++;
    } else {
        counter--;
    }
}

if(counter == array.length - 1) {
    console.log("YES");
} else  {
    console.log("NO");
}

