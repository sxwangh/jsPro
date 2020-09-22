// 所有非箭头函数 都有的局部变量

// 如果一个函数传递了三个参数 , 类数组，只能用下标，没有其他array的属性
// arguments[0]
// arguments[1]
// arguments[2]
function a() {
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    // 类数组转数组
    console.log( Array.prototype.slice.call(arguments) );
    console.log( [].slice.call(arguments) );
    // ES2015
    // const args = Array.from(arguments);
    // const args = [...arguments];
}
a('wang', 'si', 'xue');


//
