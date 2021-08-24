
// 对象  --- 继承
console.log('===继承===');
const old = {
    a: 1,
    m: function() { // 不可以用箭头函数  ： 箭头函数this指向外层，return NAN
        return (this.a + 1);
    }
};

let child = Object.create(old);
child.a = 3;
console.log(old.m());
console.log(child.m());
console.log(old);
console.log(child);



