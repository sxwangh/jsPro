if (Function.prototype.binddd === undefined) {
  console.log('该浏览器不知道吃bind');
  Function.prototype.binddd = function(newThis) { // 别用箭头函数
    if (typeof this !== "function") {
      throw new TypeError("不是function 不能用bind");
    }
    const argList = Array.from(arguments);
    return () => {
      this.apply(newThis, argList);
    }
  }
}

// test
obj = { name : 'Tom' };
function fun(){
  console.log(this.name);
}
fun.binddd(obj)();
