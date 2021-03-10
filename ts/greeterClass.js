// 类(构造函数/公共字段)
var Student = /** @class */ (function () {
    function Student(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.fullName = firstName + " " + lastName;
    }
    return Student;
}());
// Person has no age！
function greeter(person) {
    return "Hello: " + person.firstName + " " + person.lastName;
}
// Student has age！
function greeterS(person) {
    return "Hello: " + person.firstName + " " + person.lastName + ", age is " + person.age;
}
var user = new Student('Wang', 'sixue', 27);
console.log(greeter(user));
console.log(greeterS(user));
