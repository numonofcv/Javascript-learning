let aboutAnd = " (&&)  —  AND ya'ni ( Va ) operatori sifatida tanilgan. U ikkita operand nolga" +
        " teng yoki yo'qliginitekshiradi (0, noto'g'ri, aniqlanmagan, null yoki ' ' nol" +
        " deb hisoblanadi). Agar ular nol bo'lmasa, 1 ni qaytaradi; aks holda, 0 qaytar" +
        "adi.";
console.log(aboutAnd);
let a = 5,
    b = 10;
console.log((a != b) && (a < b)); // returns true

console.log((a > b) && (a == b)); // returns false
console.log((a < b) && (a == b)); // returns true


const hasDriversLicense = true;
// const hasGoodVision = false;
const hasGoodVision = true;
 
console.log(hasDriversLicense && hasGoodVision);
if (hasDriversLicense && hasGoodVision) {
    console.log('John is able to derive...');
} else {
    console.log('Someone else should drive...');
}
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
let aboutOr = "( || ) — OR  ya'ni (Yoki) operatori sifatida tanilgan. U ikkita operanddan birortasi nolga teng yoki yo'qligini tekshiradi (0, noto'g'ri, aniqlanmagan, null yoki '' nol deb hisoblanadi). Agar ulardan biri nolga teng bo'lmasa, u 1 ni qaytaradi; aks holda, 0 qaytaradi.";
const isTired = true;
console.log(hasDriversLicense || hasGoodVision||isTired);

let input = null;
let defaultValue = "Hello, World!";
console.log(input || defaultValue);  // Natija: Hello, World!

console.log((a > b) || (a == b)); // returns false

/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////

console.log(!hasDriversLicense);

console.log(!(a < b)); // returns false
console.log(!(a > b)); // returns true

console.log(hasDriversLicense && hasGoodVision && isTired);
if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('John is able to derive...');
} else {
    console.log('Someone else should drive...');
}