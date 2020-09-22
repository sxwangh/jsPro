setTimeout(() => console.log('setTimeout')); // 放到macroTask
Promise.resolve().then(() => { // 放到microTask
    console.log('Promise');
    Promise.resolve().then(() => console.log('Promise queued by Promise')); // 放到microTask
});
console.log('stack');

// 上述代码片段中有两个Task（stack, setTimeout），两个 Microtask（Promise、Promise queued by Promise）。
// stack 是当前任务会先执行；setTimeout 是第二个任务，在它执行前会清空 Microtask Queue。
// 这时 Microtask Queue 只有一个 Microtask（Promise）， 在它执行的过程中会插入第二个 Microtask（Promise queued by Promise）。
// 这些 Microtask 都会在下一个 Task（setTimeout）之前执行。因此输出为：

// 一个事件循环， macroTask前会先执行 清空完microTask queue、
