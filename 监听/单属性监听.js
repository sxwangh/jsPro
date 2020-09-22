var a = { age: 10 };
Object.defineProperty(a, 'age', {
    get: function () { //取值的时候会触发
        console.log('a.age 被get了');
        return 9;
    },
    set: function(value) { //更新值的时候会触发
        console.log('a.age被set了');
        age = value;
    },
});

a.age = 10;
a.age;
console.log(a.age);
