// Promise.resolve()
Promise.reject('aaaaa')
    .then((res) => {
        console.log('xxxxx');
        // return new Error('Oh no!'); // 使 .then() 返回一个 rejected promise
        // return Promise.reject("end"); //此处返回了一个新的promise
    })
    .catch(error => {
        console.log('onRejected function called: ' + error.message + error);
        return '我' // 正常return 的值会被resolve(值)包裹
    })
    .then((res) => {
        console.log("I am always called even if the prior then's promise rejects!!!" + res);
    });



// onrejected （catch）后面 的then仍然可以执行
// 【【因为.catch是.then(, onrejected)的语法糖，返回是promise，仍可chain调用】】


// pending: 初始状态，既不是成功，也不是失败状态。
// fulfilled: 意味着操作成功完成。
// rejected: 意味着操作失败。

// then方法包含两个参数：onfulfilled 和 onrejected，它们都是 Function 类型。
// 当Promise状态为fulfilled时，调用 then 的 onfulfilled 方法，
// 当Promise状态为rejected时，调用 then 的 onrejected 方法，
// 所以在异步操作的完成和绑定处理方法之间不存在竞争）。

// 因为 Promise.prototype.then 和  Promise.prototype.catch 方法返回promise 对象， 所以它们可以被链式调用。
