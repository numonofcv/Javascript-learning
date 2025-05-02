// 1) Parent – Person konstruktor funksiyasi
const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};
Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
};

// 2) Child – Student konstruktor funksiyasi
const Student = function (firstName, birthYear, course) {
    // Person.call(...) – Person ichidagi this.firstName va this.birthYear
    // o‘rnatishni qayta ishlatamiz
    Person.call(this, firstName, birthYear);
    this.course = course;
};

// 3) Prototip zanjirini bog‘lash    Student.prototype ni Person.prototype
// asosida yaratamiz,    shunda Student instansiyalari calcAge() metodini meros
// oladi
Student.prototype = Object.create(Person.prototype);

// 4) Student’ga o‘ziga xos metod qo‘shamiz
Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

// 5) Instansiya yaratamiz
const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce(); // “My name is Mike and I study Computer Science”
mike.calcAge(); // Person.prototype.calcAge → 17

// 6) Tekshiruv: mike.__proto__ → bu aslida Student.prototype,    u ham
// Person.prototype ga ulanadi (meros zanjiri)
console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);
// Output: Student.prototype, uning [[Prototype]] = Person.prototype

console.dir(Student.prototype.constructor);
console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

// ///////////////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////////////
// Inheritance Between "Classes": ES6 Classes 1) Parent klass
class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }
    calcAge() {
        console.log(2037 - this.birthYear);
    }
}

// 2) Child klass — PersonCl’dan meros oladi
class StudentCl extends PersonCl {
    constructor(fullName, birthYear, course) {
        // super() — bu ota-ona klassning constructor’ini chaqiradi. Har doim eng
        // birinchi bajarilishi kerak!
        super(fullName, birthYear);

        // Keyin o‘ziga xos xususiyatlarni qo‘shamiz
        this.course = course;
    }

    // 3) StudentCl ga xos metod
    introduce() {
        console.log(`My name is ${this.fullName} and I study ${this.course}`);
    }

    // 4) Ota-ona klassdagi calcAge metodini "override" qilish
    calcAge() {
        // oldingi yoshni hisoblaymiz
        const age = 2037 - this.birthYear;
        // va student ekanimiz uchun yana boshqacha xabar chiqaramiz
        console.log(
            `I'm ${age} years old, but as a student I feel more like ${age + 10}`
        );
    }
}

// 5) Instansiya yaratamiz
const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');

// 6) Ikki metodni chaqiрамиз:
martha.introduce(); // → My name is Martha Jones and I study Computer Science
martha.calcAge(); // → I'm 25 years old, but as a student I feel more like 35

// 7) Prototip zanjiri tekshiruvi
console.log(martha instanceof StudentCl); // true
console.log(martha instanceof PersonCl); // true

// ///////////////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////////////
// Inheritance Between "Classes": Object.create
const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },
    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear
    },
};
const steven = Object.create(PersonProto);
const StudentProto = Object.create(PersonProto);
const jay = Object.create(StudentProto);

StudentProto.init = function(firstName, birthYear, course){
    PersonProto.init.call(this, firstName, birthYear,);
    this.course = course;
};

StudentProto.introduce = function(firstName,birthYear, course, ){
    console.log(`My name is ${firstName} and I study ${course} course`);
}

PersonProto.init.call(this)
jay.init('Jay', 2002, 'JS');
jay.introduce();
jay.calcAge();

// //////////////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////////////
