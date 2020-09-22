function throttle(method, context) {
    clearTimeout(method.tId);
    method.tId = setTimeout(function () {
        method.call(context);
    }, 100)
}

// 模糊搜索
function filterMap([], value){
    return arr.filter(item => String(item).includes(value))
}
// 节流--规定时间内执行一次
// 设置一个 timer = null， 传入 time 为
// setTimeout的函数的时间，返回一个函数，当 timer 存在的时候clearTimeout

// 防抖
function debounce(fn,time){
    let timer = null;
    return function(){
        if(timer){
            clearTimeout(timer)
        }
        timer = setTimeout(()=>{
            fn.apply(this,arguments)
        },time)
    }
}


// 设置一个 canRun = true，传入 fn 和 time
// 一个闭包的函数，先设置 canRun = false，直接执行setTimeout在其中把 canRun 置为 true，现在又可以执行了

function throttle(fn,time){
    let canRun = true;
    return function(){
        if(!canRun){
            return
        }
        canRun = false;
        setTimeout(() => {
            fn.apply(this,arguments);
            canRun = true;
        },time)
    }
}

