// prototype是函数独有的属性，是个{} Object 类型的数据
// [[prototype]] 、__proto__  是实例都有的属性 new的时候创建的，浏览器加的

// B 函数 通过 new 创建 instance
function Person(name, age) {
    this.name = name;
    this.age = 222;
    this.arr = [1];  // ---通过实例对象 调用 子 属性/方法
}
// prototype 函数才有的属性
Person.prototype.xxx = [9]; // ---通过实例对象 调用的 父 属性/方法

// console.log(Person.__proto__); // Function
// console.log(Person.xxx); // 顺着查找查找Person.__proto__.xxx  （即Function.prototype.xxx）
// console.log(Person.prototype.xxx);

const B_1 = new Person('王思雪');
const B_2 = new Person('王思雪', 27);
const B_3 = Object.create(Person.prototype);
B_1.arr.push(2);
B_2.arr.push(3);

console.log(B_1.arr);
console.log(B_2.arr);
console.log('.....B_3');
console.log(B_3.arr);
console.log(B_3.xxx);


B_1.xxx.push(90);
console.log(B_1.xxx);
console.log(B_2.xxx);

//test B_1.__proto__ === Person.prototype
// B_1 B_2 B_3 的上级父类继承都是 Person.prototype
console.log(B_1.__proto__);
console.log(Person.prototype);
console.log(B_3.__proto__);

// ！new 会有构造函数中的属性
// ！Object.create 是清爽空白的{}, 可以往prototype 上查找
console.log(B_3);
console.log(B_1);

// const x = new Person()  即：
// 1-. var o = {};
// 2-. o.__proto__  = Person.prototype;  即：！（ 子.__proto__ = 父 ）    [浏览器加： 为了实例能够 寻找上级 的 原型链 ]
// 3-. x = 【Person.call(o) && return o】;  // 执行Person函数，内部this指向o, 若Person函数内没有return值，则默认return o;
// prototype链为： x --> Person.prototype --> Object.prototype




// 总结：
// new 函数()  --继承， 子 操作父属性 会改变  父 属性值， 很危险  !!请重新父属性 属性遮蔽 (property shadowing)


// test
//console.log(B_1.xxx); // 9 ✅ 实例调用  (子B_1没有，找父Person.prototype)
//console.log(Person.prototype.xxx); // 9 ✅ Person的prototype属性调
// --- Object.defineProperty(Person, "prototype", {descriptor});   Object.defineProperty(Person, "a", {enumerable: false,configurable: false,value: "hhh",get:()=>{}, set:()=>{}});
// ---Person.a = 'hhh';



// 错误示范
//console.log(Person.arr); // undefined
//console.log(Person.xxx); // undefined
//console.log(Person.prototype.arr); // undefined

