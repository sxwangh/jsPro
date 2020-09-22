// 函数
function f() {
    this.a = 1;
    this.b = 2;
}
// 在f函数的原型上定义属性
f.prototype.b = 3;
f.prototype.c = 4;
f.prototype.m = function() {
    return this.c + 1;
};


let o = new f(); // {a: 1, b: 2}

// 整个原型链如下:
// 子 o:{a:1, b:2} ---> 父 f.prototype: { b:3, c:4, m: ()=>{} } ---> Object.prototype---> null

// 都需要通过  实例对象  来访问
console.log(o.a); // 1
console.log(o.b); // 2  属性遮蔽 (property shadowing)  -- 相当于：(方法属性) 重写
console.log(o.c); // 4 c是o的自身属性吗？不是，那看看它的原型上有没有，有（父），如果没有继续顺着prototype往上找


// =================================================================函数 继承  (属性，方法)=================================================
// 子 o:{a:1, b:2} ---> 父 f.prototype: { b:3, c:4, m: ()=>{} } ---> Object.prototype---> null
// 子 o:{a:1, b:2， c:10} ---> 父 f.prototype: { b:3, c:4, m: ()=>{} } ---> Object.prototype---> null
console.log('===函数 继承===');

console.log(o.m()); // 子o没有， 用父f.prototype

let o2 = new f();
o2.c = 10;
console.log(o2.m()); // 子o2有

// this指向当前对象o(子)，而不是f.prototype(父)




