Promise.resolve()
    .then(() => {
        console.log('2');
        // 使 .then() 返回一个 rejected promise
        throw new Error('1.Oh no!');
    })
    .then(() => {
        console.log('1.Not called.');
    }, error => {
        console.log('1.onRejected function called: ' + error.message);
    });


console.log('=========1=============');  // 1
Promise.reject('2222')
    .then(() => {
        // 使 .then() 返回一个 rejected promise
        console.log('unuse')
        throw new Error('2.Oh no!');
    })
    .then(() => {
        console.log('2.Not called.');
    }, error => {
        console.log('2.onRejected function called: ' + error);
        // console.error('error.onRejected function called: ' + error);
    }).catch((rej) => {
        console.log(`2.catch:${rej}`);
});

// 如果函数抛出错误或返回一个拒绝的Promise，则 then 将返回一个拒绝的Promise。


Promise.reject()
    .then(() => 99, () => 42) // ！！！！ onRejected returns 42 which is wrapped in a resolving Promise
    .then(solution => console.log('Resolved with ' + solution)); // Resolved with 42
