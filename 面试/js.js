async function async1(){
  console.log("1");
  await async2()
  console.log("2") // TODO 1  这是语法糖Promise.resolve().then(() => { console.log("async1 end--8") })中的内容
}
async function async2(){
  console.log('3')
  return new Promise((resolve,reject)=>{ // promise 构造函数 接收一个函数function(函数1resolve， 函数2reject) {},不写的话，有默认的reject和resolve函数
    resolve();
    console.log('4')
  })
}
console.log('5')

setTimeout(function(){
  console.log('6')
},0)

async1()

new Promise(function(resolve){
  console.log("7")
  resolve()
}).then(function(){
  console.log("8")
})

console.log("9")
