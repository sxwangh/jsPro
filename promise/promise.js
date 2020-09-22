// 参照prototype.js

// Promise.resolve()
// Promise.race()
// Promise.reject()
// Promise.resolve()
// Promise.any()

// Promise.prototype.catch()
// Promise.prototype.finally()
// Promise.prototype.then()

// 1.实例
console.info('===promise构造函数 接收一个exector(resolve, reject)函数, resolve 和 reject重写的话，挂载默认函数===');
var promise_1 = new Promise((resolve, reject) => {
    console.log('xhr请求');
    resolve('resMsg');  // return resMsg , reject就不会再走啦 .，但是后面其他的还会执行！！！
    reject('rejMsg');
    console.log('resove he  reject 后面也走了')
});


// 写法一： .then(res, rej)
console.log('--------写法一-----------');
console.info('===.then(函数1，函数2)===  ');  // p.then(onFulfilled[, onRejected]);
console.info('===函数1: 接收Promise构造函数resolve()的返回数据res==='); // Promise 变成接受状态（fulfilled）时调用的函数
console.info('===函数2：接收Promise构造函数reject()的返回数据rej==='); //  当 Promise 变成接受状态或拒绝状态（rejected）时调用的函数 等于 .catch

promise_1.then((res) => {
    console.log('promise_1.then的onresolve-1')
    console.log(res);
}, (rej) => {
    console.log('promise_1.then的onreject')
    console.log(rej); // this
}).catch((rej) => {
    console.log(`catch1: ${rej}`);
});

// // 写法二 .catch(rej)
console.log('--------写法二-----------');
promise_1.then((res) => {
    console.log('promise_1.then的onresolve -2')
    console.log(res);
}).catch((rej) => {
    console.log(`catch2: ${rej}`); // this
});
