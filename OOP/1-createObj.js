// if (typeof Object.create !== "function") {
//     Object.create = function (proto, propertiesObject) {
//         if (typeof proto !== 'object' && typeof proto !== 'function') {
//             throw new TypeError('Object prototype may only be an Object: ' + proto);
//         } else if (proto === null) {
//             throw new Error("This browser's implementation of Object.create is a shim and doesn't support 'null' as the first argument.");
//         }
//
//         if (typeof propertiesObject != 'undefined') throw new Error("This browser's implementation of Object.create is a shim and doesn't support a second argument.");
//
//         function F() {}
//         F.prototype = proto;
//
//         return new F();
//     };
// }


// prototype 是function的属性
// B 对象
const Person = {
    name: '',
    arr: [1]
};
const B_1 = Object.create(Person, {
    name: {
        value: 'B_1',
        writable: true,
        enumerable: true,
        configurable: true
    }
});
const B_2 = Object.create(Person);
B_2.arr=[10];

B_1.arr.push(2); // 子没有， 改变了父arr，  危险
B_2.arr.push(3); // 子有，改变自己

console.log(B_1.arr);
console.log(B_2.arr);

console.log(Person.arr);

// test   B_1.__proto__ === Person
console.log(B_1.__proto__); // _proto_ 是实例的属性 （new的时候添加给obj的）
console.log(Person);
console.log(B_1.prototype); // prototype 是function特有属性

console.log(B_1);
console.log(B_2);

// var x = Object.create(Person) 即：
// //1-. function F() {}
// //2-. F.prototype = Peroson;
// //3-. x = new F();  // 新对象 x = {};  原型链建立 x.__proto__ = F.prototype === Person;   this指向 F.call(x) & ruturn x;
// 结果 x.__proto__ === Person  --true

// 总结：
// Object.create(obj)  -- 继承  子instance(子B_1, B_2) 操作父属性obj(父Person)  会改变 父 属性值， 很危险   !!请重新父属性

