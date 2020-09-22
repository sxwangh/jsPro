// prototype是函数独有的属性，是个{} Object 类型的数据
// [[prototype]] 、__proto__  是实例都有的属性 new的时候创建的，浏览器加的
function Foo() {
    this.xxx = 'xxx';
}
Foo.prototype.xxx = '123';


console.log('===1.原型链===');
var foo = new Foo();
console.log(foo.__proto__ === Foo.prototype)
console.log(Foo.__proto__===Function.prototype)
console.log(Function.__proto__===Object.prototype)
console.log(Foo.prototype)

// Object.prototype.__proto__    //null
// Function.prototype.__proto__  //Object.prototype
// Object.__proto__              //Function.prototype

console.log('===2.Foo.xxx 和 Foo.prototype.xxx 的区别===');
console.log(Foo.xxx); // 顺着查找查找Foo.__proto__.xxx  （即Function.prototype.xxx）
console.log(Foo.prototype.xxx);



//  ===同理promise

// Promise.resolve()
// Promise.race()
// Promise.reject()
// Promise.resolve()
// Promise.any()

// Promise.prototype.catch()
// Promise.prototype.finally()
// Promise.prototype.then()
