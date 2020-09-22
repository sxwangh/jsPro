async function async1(){
    console.log("2");
    await async2()
    console.log("async1 end--8") // TODO 1  这是语法糖Promise.resolve().then(() => { console.log("async1 end--8") })中的内容
}
async function async2(){
    console.log('3')
    return new Promise((resolve,reject)=>{ // promise 构造函数 接收一个函数function(函数1resolve， 函数2reject) {},不写的话，有默认的reject和resolve函数
        resolve();
        console.log('resolve后面如果有reject是不走了，但是其他的还是会走哦~~~~~')
    })
}
console.log('1')

setTimeout(function(){
    console.log('setTimeout --- 9')
},0)

async1()

new Promise(function(resolve){
    console.log("4")
    resolve()
}).then(function(){ // TODO 2
    console.log("promise6")
}).then(function(){
    console.log("promise7")
})

console.log("5")



// 参考async_promise.js
// async 和await 是 【【promise和generator】】的语法糖 Promise.resolve().then();
