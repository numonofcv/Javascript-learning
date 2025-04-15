'use strict'

function calcAge(birthYear) {
    const age = 2037-birthYear;
    function printAge(){

        let output = `You are ${age}, born in ${birthYear}`;
        console.log(output);

        if (birthYear >= 1981 && 1996>=birthYear) {
            var millianial=true;
            const firstName = 'Steven';
            const str = `Oh, And you're millianial, ${firstName}`;
            console.log(str);

            function add(a, b) {
                return a+b;
            }
            output='NEW OUTPUT';
        }
        // console.log(add(5,2));
        console.log(millianial);
        console.log(output);
        
        // console.log(str);//ReferenceError
    }
    printAge()
    // console.log(firstName);
    return age;
}
let firstName = "Jonas"
calcAge(1991)