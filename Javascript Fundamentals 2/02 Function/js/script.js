function logger() {
    console.log('My name is John');    
};
//calling / running / invoking function
logger();
logger();
logger();

function fruitProtcessor(aples, oranges) {
    console.log(oranges, aples);
    const juice = `Juice with ${aples} apples va ${oranges} oranges`;
    return juice;
}
const applesJuice = fruitProtcessor(5, 0);
console.log(applesJuice);
const applesOrrangesJuice = fruitProtcessor(15, 5);
console.log(applesOrrangesJuice);
