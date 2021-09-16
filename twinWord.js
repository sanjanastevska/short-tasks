const isTwin = (a, b) => {
    stringA = a.toLowerCase().split("").sort().join("");
    stringB = b.toLowerCase().split("").sort().join("");
    if(stringA === stringB) {
        console.log('True');
    } else {
        console.log('False');

    }
};

isTwin('Silent', 'listen');