// a. constructor is a special function  （Person）
// 1.function's  name  Upper
// 2.this for instance
// 3.by new order

// b.new 命令 原理
// 1.创建空对象o，作为要返回的instance
// 2.o原型 指向 constructor 的 prototype属性
// 3.constructor的this 指向 o
// 4.执行constructor中的代码

// A
function Person() {
    this.age = 20;
}
const A = new Person();
console.log(A.age);

// B
function Person(name, age) {
    this.name = name;
    this.age = age;
}
const B = new Person('王思雪', 20);
console.log(B.name);
console.log(B.age);

// c.变量提升 hosting
// 1.js  编译(在内存中开辟空间 存放变量/函数)  执行
// * 函数 优先于 变量 undefined
// 2.JavaScript only hoists declarations, not initializations. If a variable is declared and initialized after using it, the value will be undefined
// * fuction hosting
//   1)*Function declarations hoisted，you can use the function before you declared it
hoisted(); // logs "foo"
function hoisted() {
    console.log('foo');
}
//   2)*note that function expressions are not hoisted
notHoisted(); // TypeError: notHoisted is not a function
var notHoisted = function() {
    console.log('bar');
};


