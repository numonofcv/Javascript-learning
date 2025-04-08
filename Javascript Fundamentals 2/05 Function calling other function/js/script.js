const cutPieces = function (fruit) {
    return fruit * 4;
}
const fruitProcessor = function (apples, orranges) {
    const applePieces = cutPieces(apples)
    const orrangePieces = cutPieces(orranges)
    const juice = ` Juise with ${apples} pieces of apple and ${orrangePieces} piaces of orranges`;
    return juice
}
console.log(fruitProcessor(3,5));
