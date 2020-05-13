// генератор ключа
// const keyCodeA = 'a'.charCodeAt(0);// let key = '';

// do {
//     const code = Math.floor(Math.random() * 26) + keyCodeA;
//     const symbol = String.fromCharCode(code);
//     console.log(code, symbol);
//     if (key.indexOf(symbol) !== -1)
//         continue;

//     key += symbol;
// }
// while (key.length < 26);

// console.log(key);

// кодировщик

const keyCodeA = 'a'.charCodeAt(0);
let key = 'sqnzbeuigvxtmhfpdcjyoakwlr';

let text = `Back in the good old days | the "Golden Era" of Computers, it was easy 
to separate the men from the boys (sometimes called "Real Men" and "Quiche
Eaters" in the literature). During this period, the Real Men were the ones
that understood computer programming, and the Quiche Eaters were the ones
that didn't.`;
text = text.toLocaleLowerCase();
let encoded = '';

for (let index = 0; index < text.length; index++) {
    let code = text.charCodeAt(index) - keyCodeA;
    if (code < 0 || code >= 26)
        encoded += ' ';
    else
        encoded += key[code];
}

console.log(encoded);
 