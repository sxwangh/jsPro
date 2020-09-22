Promise.resolve("foo")
    // 1. 接收 "foo" 并与 "bar" 拼接，并将其结果做为下一个 resolve 返回。
    .then(function(string) {
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                string += 'bar';
                resolve(string);
            }, 1);
        });
    })
    // 2. 接收 "foobar", 放入一个异步函数中处理该字符串
    // 并将其打印到控制台中, 但是不将处理后的字符串返回到下一个。
    .then(function(string) {
        setTimeout(function() {
            string += 'baz';
            console.log(string);
        }, 1)
        return string;
    })
    // 3. 打印本节中代码将如何运行的帮助消息，
    // 字符串实际上是由上一个回调函数之前的那块异步代码处理的。
    .then(function(string) {
        console.log("Last Then:  oops... didn't bother to instantiate and return " +
            "a promise in the prior then so the sequence may be a bit " +
            "surprising");

        // 注意 `string` 这时不会存在 'baz'。
        // 因为这是发生在我们通过setTimeout模拟的异步函数中。
        console.log(string);
    });


// Last Then: oops... didn't bother to instantiate and return a promise in the prior then so the sequence may be a bit surprising
// foobar
// foobarbaz

// * 当一个值只是从一个 then 内部返回时，它将等价地返回 Promise.resolve(<由被调用的处理程序返回的值>




// 执行栈 与 任务队列
// js主线程一次执行代码 ，遇到函数 入栈， 执行完函数 出栈，遇到异步回调函数放到 任务队列中， 直到所有代码执行完，栈为空。 主线程开始读取  队列中的任务
// 微任务 优先 --- process.nextTick, Promises, Object.observe(废弃), MutationObserver
// macroTask  （ task queues  ）  ---  setTimeout, setInterval, setImmediate, I/O, UI rendering

// * 主线程执行完，先检查microTask微任务队列，并完成microTask中全部任务，再执行macroTask（Task）

// !!** html standard : 每一个macroTask（Task） 执行完，UI都会重新渲染。
//                      所以在microTask中进行数据处理，这样macroTask结束之后就可以更新UI，避免UI更新太频繁。
