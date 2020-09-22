// 参照 1-new中，
// !类 -- 继承良好做法：
//   1)Person.prototype = { name: 1, age: 3, getName: function() {return this.name}}
//   2)Object.create(Person.prototype)
// ! var instance = new 类()
function Person(name) {
    this.name = name;
    this.age = 23;
}
Person.prototype = {
    name: '西瓜草莓芒果',
    getName: function() {
        return this.name;
    },
}

function Girl(name, eat) {
    Person.call(this, name);
    this.eat = eat;
}
Girl.prototype = Object.create(Person.prototype);
console.log(Girl.prototype);


// 可以不用
Girl.prototype.constructor = Girl;

console.log(Girl.prototype);

var me = new Girl();
console.log(me);
me.getName();
