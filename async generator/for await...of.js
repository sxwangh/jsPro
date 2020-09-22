function* generatorWithRejectedPromises() {
    try {
        yield 0;
        yield 1;
        yield Promise.resolve(2);
        yield Promise.reject(3);
        yield 4;
        throw 5;
    } finally {
        console.log('called finally')
    }
}

(async function() {
    try {
        for await (let num of generatorWithRejectedPromises()) {
            console.log(num);
        }
    } catch (e) {
        console.log('catched', e)
    }
})();
// 0
// 1
// 2
// catched 3

// compare with for-of loop:

for (let numOrPromise of generator()) {
    console.log(numOrPromise);
}
// 0
// 1
// Promise { 2 }
// Promise { 3 }
// 4
