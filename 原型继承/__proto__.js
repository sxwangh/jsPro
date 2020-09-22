function Foo() {}
var foo = new Foo();
console.log(foo.__proto__ === Foo.prototype)
console.log(Foo.__proto__===Function.prototype)
console.log(Foo.prototype)
