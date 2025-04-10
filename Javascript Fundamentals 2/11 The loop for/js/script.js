for (let rep = 0; rep <= 5; rep++) {
    console.log(`Lifting weight repetition ${rep}`);
}
const students = [
    { firstName: "Ali", lastName: "Khan", age: 20, birthYear: 2003, email: "ali.khan@example.com", phoneNumber: "123-456-7890" },
    { firstName: "Vali", lastName: "Azimov", age: 21, birthYear: 2002, email: "vali.azimov@example.com", phoneNumber: "234-567-8901" },
    { firstName: "Gulnora", lastName: "Saidova", age: 22, birthYear: 2001, email: "gulnora.saidova@example.com", phoneNumber: "345-678-9012" },
    { firstName: "Dilshod", lastName: "Rakhimov", age: 23, birthYear: 2000, email: "dilshod.rakhimov@example.com", phoneNumber: "456-789-0123" },
    { firstName: "Jamshid", lastName: "Musaev", age: 24, birthYear: 1999, email: "jamshid.musaev@example.com", phoneNumber: "567-890-1234" },
    { firstName: "Murod", lastName: "Shodiev", age: 21, birthYear: 2002, email: "murod.shodiev@example.com", phoneNumber: "678-901-2345" },
    { firstName: "Zarina", lastName: "Abdullaeva", age: 20, birthYear: 2003, email: "zarina.abdullaeva@example.com", phoneNumber: "789-012-3456" },
    { firstName: "Otabek", lastName: "Tursunov", age: 22, birthYear: 2001, email: "otabek.tursunov@example.com", phoneNumber: "890-123-4567" },
    { firstName: "Yulduz", lastName: "Mamatova", age: 23, birthYear: 2000, email: "yulduz.mamatova@example.com", phoneNumber: "901-234-5678" },
    { firstName: "Maksud", lastName: "Khudoyberganov", age: 21, birthYear: 2002, email: "maksud.khudoyberganov@example.com", phoneNumber: "012-345-6789" },
    { firstName: "Shakhzod", lastName: "Tursunov", age: 20, birthYear: 2003, email: "shakhzod.tursunov@example.com", phoneNumber: "123-456-7891" },
    { firstName: "Samira", lastName: "Rizayeva", age: 21, birthYear: 2002, email: "samira.rizayeva@example.com", phoneNumber: "234-567-8902" },
    { firstName: "Durdona", lastName: "Rakhimova", age: 23, birthYear: 2000, email: "durdona.rakhimova@example.com", phoneNumber: "345-678-9013" },
    { firstName: "Sarvar", lastName: "Mavlonov", age: 22, birthYear: 2001, email: "sarvar.mavlonov@example.com", phoneNumber: "456-789-0124" },
    { firstName: "Bunyod", lastName: "Tursunov", age: 24, birthYear: 1999, email: "bunyod.tursunov@example.com", phoneNumber: "567-890-1235" },
    { firstName: "Rustam", lastName: "Sodiqov", age: 20, birthYear: 2003, email: "rustam.sodiqov@example.com", phoneNumber: "678-901-2346" },
    { firstName: "Farida", lastName: "Abduvahidova", age: 21, birthYear: 2002, email: "farida.abduvahidova@example.com", phoneNumber: "789-012-3457" },
    { firstName: "Iskandar", lastName: "Mamatov", age: 22, birthYear: 2001, email: "iskandar.mamatov@example.com", phoneNumber: "890-123-4568" },
    { firstName: "Laziz", lastName: "Bekturdiyev", age: 23, birthYear: 2000, email: "laziz.bekturdiyev@example.com", phoneNumber: "901-234-5679" },
    { firstName: "Anvar", lastName: "Dzhuraboev", age: 24, birthYear: 1999, email: "anvar.dzhuraboev@example.com", phoneNumber: "012-345-6790" },
    { firstName: "Shirin", lastName: "Eshonqulova", age: 20, birthYear: 2003, email: "shirin.eshonqulova@example.com", phoneNumber: "123-456-7892" },
    { firstName: "Shokhrukh", lastName: "Amarov", age: 21, birthYear: 2002, email: "shokhrukh.amarov@example.com", phoneNumber: "234-567-8903" },
    { firstName: "Amina", lastName: "Rahmatova", age: 22, birthYear: 2001, email: "amina.rahmatova@example.com", phoneNumber: "345-678-9014" },
    { firstName: "Jasmina", lastName: "Karimova", age: 23, birthYear: 2000, email: "jasmina.karimova@example.com", phoneNumber: "456-789-0125" },
    { firstName: "Tamerlan", lastName: "Muhammadov", age: 24, birthYear: 1999, email: "tamerlan.muhammadov@example.com", phoneNumber: "567-890-1236" },
    { firstName: "Ravshan", lastName: "Shermatov", age: 20, birthYear: 2003, email: "ravshan.shermatov@example.com", phoneNumber: "678-901-2347" }
  ];
 

  const newList = [];
for (let index = 0; index < students.length; index++) {
    const element = students[index];
element.age=(2037 - element.birthYear);
newList.push(element)
}  
console.log(newList);

const jonasArray = [
    'Jonas', 'Schmedtmann', 2037 - 1997,
    'teacher',
    [
        'Michael', 'Stiven', 'Peter'
    ]
];
console.log('------ONLY TYPE OF STRING-------------');

for (let index = 0; index <jonasArray.length; index++) {
    if (typeof jonasArray[index] !== 'string') continue;
    console.log(jonasArray[index], typeof jonasArray[index]);   
}

for (let index = 0; index <jonasArray.length; index++) {
    console.log(jonasArray[index], typeof jonasArray[index]);   
    if (typeof jonasArray[index] === 'number') break;
}