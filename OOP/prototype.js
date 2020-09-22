// 函数
function f() {
    this.a = 1;
    this.b = 2;
}
let o = new f(); // {a: 1, b: 2}
// 在f函数的原型上定义属性
f.prototype.b = 3;
f.prototype.c = 4;
f.prototype.m = () => {
    return this.c + 1;
};
// 整个原型链如下:
// o:{a:1, b:2} ---> f.prototype: { b:3, c:4, m: ()=>{} } ---> Object.prototype---> null

// 都需要通过  实例对象  来访问
console.log(o.a); // 1
console.log(o.b); // 2  属性遮蔽 (property shadowing)  -- 相当于：(方法属性) 重写
console.log(o.c); // 4 c是o的自身属性吗？不是，那看看它的原型上有没有，有，如果没有继续顺着prototype往上找

console.log('===函数 继承===');
console.log(o.m());

// this指向当前对象o(子)，而不是f.prototype(父)

// 对象  --- 继承
console.log('===继承===');
const old = {
    a: 1,
    m: () => { // 箭头函数指向最外层了，用function吧
        return (this.a + 1);
    }
};

let child = Object.create(old);
child.a = 3;
console.log(old.m());
console.log(child.m());



