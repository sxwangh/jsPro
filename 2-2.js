// 写一个 eq 函数用来判断两个参数是否相等，使用效果如下

function eq(a, b) {
    if (a === b) { // 基本数据类型
        return true;
    } else if (JSON.stringify(a) === JSON.stringify(b)) { // 数组, 序列化完全一样的对象
        return true;
    } else if(Object.prototype.toString.call(a) === "[object Object]"
        && Object.prototype.toString.call(b) === "[object Object]"){ // Object
        const keysA = Object.keys(a);
        const keysB = Object.keys(b);
        if(keysA.length === keysB.length) {
            for (let i = 0; i < keysA.length; i++){
                if (a[keysA[i]] !== b[keysA[i]]) {
                    console.log(a[keysA[i]])
                    return false;
                }
            }
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}
var a = [1];
var b = [1];
console.log(eq(a, b)) // true


a = {name: 'haha', arr: 1};
b = {arr: 1, name: 'haha'};
console.log(eq(a, b)) // true
