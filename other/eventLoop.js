// setTimeout macroTask 后
setTimeout(() => {
    console.log(7);
}, 0)
console.log(1);


new Promise((resolve, reject) => {
    console.log(2)
    resolve('res'); // 没有你，promise的状态一直是pending
}).then((res) => {
// promise.then  microTask 先执行
    console.log(4);
    console.log(res);
}).then(() => {
    console.log(5)
}).finally(() => {
    console.log(6)
})
console.log(3);

// * 主线程  -> microTask 队列中的事件处理完，主线程才轮到macroTask队列中方法

// js 单线程， 主线程 处理到异步时， 先挂起pending， 异步处理完， 主线程 根据规则去 执行回调 （事件队列）
// 执行栈清空， 去找mircoTask队列中的回调， 微任务队列都完事  再找macrotask队列回调



// 常见的微任务
// Promise.then
// Object.observe
// MutationObserver

// 常见的宏任务
// setTimeout
// setInterval
// setImmediate
// UI交互事件
