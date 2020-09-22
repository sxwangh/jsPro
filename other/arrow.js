let value = 1;
obj = {
    value: 5,
    fun1: function() {
        console.log(`fun1---${this} : ${this.value}`);
    },
    fun2: () => {
        console.log(`fun2---${this} : ${this.value}`);
    },
};

console.log(obj.fun1())
console.log(obj.fun2())
