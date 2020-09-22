// async/await： 这哥俩个其实是 Promise 和 Generator 的语法糖，所以我们把它们转成我们熟悉的 Promise
async function async1() {
    console.log('async1 start');
    await async2();
    console.log('async1 end');
}
// 其实就是
async function async1() {
    console.log('async1 start');
    Promise.resolve(async2()).then(()=>console.log('async1 end'))
}
