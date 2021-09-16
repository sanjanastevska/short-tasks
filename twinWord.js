// A twin of a word is a word written with the same letters(case insensitive) but
//not necesserily in the same order.
//For example Silent is a twin of Listen.

const isTwin = (a, b) => {
    stringA = a.toLowerCase().split("").sort().join("");
    stringB = b.toLowerCase().split("").sort().join("");
    if(stringA === stringB) {
        console.log('True');
    } else {
        console.log('False');

    }
};

isTwin('Silent', 'listenu');