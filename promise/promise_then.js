
// 1. 先看Promise.prototype.catch()
// It behaves the same as calling Promise.prototype.then(undefined, onRejected).
//     这里说，catch()是then()的语法糖。
// 2. 再来看Promise.prototype.then()
// The then() method returns a Promise.
//     这里说，then()返回的是一个promise。As the then and

// Promise.prototype.catch() methods return promises, they can be chained — an operation called composition.
//     这里说，因为then()和catch()又返回了一个promise，因此，后续调用可以串联起来。
// Values returned from the onFulfilled or onRejected callback functions will be automatically wrapped in a resolved
// promise.then()的两个参数函数中返回的值，会自动包装成一个已resolved的promise。


function test(res) {
    return Promise.resolve(res)
        .then(res => {
            console.log(res += '!');
            return res;
        })
        .then(res => {
            console.log(res += '!');
            return Promise.reject("end"); //此处返回了一个新的promise
        })
        .catch(res => { // ！ catch 是.then(onresolve, onreject) 不写onresolver的语法糖
            console.log(res);
            return res;  //此处也返回了一个新的resolved的promise
        })
        .then(res => {
            console.log('catch 后面的then')
            console.log(res += '!');  //肯定会执行了
        });
}
test('hello');
