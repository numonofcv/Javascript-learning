'use strict';
const oneWord = function(str){
    return str.replace(/ /g, '').toLowerCase()
}
const upperFirstWord = function(str){
    const [first, ...others ]= str.split(' ');
    // console.log(first);
    return  [first.toUpperCase(), ...others].join(' ')
    
    // const [first, ...others] = lw;
}

// Higher 
const transformed = function(str, fn ){
    console.log(`Original string : ${str}`);
    console.log(`Transformed string:  ${fn(str)}`);
    console.log(`Transformed string by:  ${fn.name}`);   
}

transformed('Javascript is the best!', upperFirstWord);
transformed('Javascript is the best!' , oneWord);
const button = document.createElement('button');
button.textContent = 'submit';
const body = document.body;
body.append(button)
const high5 = function () {
    console.log(body);   
}
button.addEventListener('click', high5);
['Adam', 'Jonas', 'Martha'].forEach(high5);