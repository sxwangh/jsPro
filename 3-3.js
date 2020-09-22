// 3：实现一个方法，用于比较两个版本号（version1、version2）

/**
 * 如果version1 > version2，返回1；如果version1 < version2，返回-1，其他情况返回0
 * 版本号规则`x.y.z`，xyz均为大于等于0的整数，至少有x位
 * 示例：
 * compareVersion('0.1', '1.1.1'); // 返回-1
 * compareVersion('13.37', '1.2 '); // 返回1
 * compareVersion('1.1', '1.1.0'); // 返回0
 */
function fedArr(arr, maxLen) {;
    let newArr = []
    for (let i = 0; i < maxLen; i++) {
        if(arr[i] === undefined) {
            newArr[i] = '0';
        } else {
            newArr[i] = arr[i];
        }
    }
    return newArr;
}
function compareVersion(version1, version2) {
    let arr1 = version1.split('.');
    let arr2 = version2.split('.');
    let maxLen = Math.max(arr1.length, arr2.length);
    let newArr1 = fedArr(arr1, maxLen);
    let newArr2 = fedArr(arr2, maxLen);
    console.log(newArr1);
    console.log(newArr2);
    let isEqual = false;
    for (let i = 0; i < maxLen; i++) {
        if(Number(newArr1[i]) > Number(newArr2[i])) {
            return 1;
        } else if(Number(newArr1[i]) < Number(newArr2[i])){
            return -1;
        } else {
            isEqual = true;
        }
    }
    if(isEqual) {
        return 0
    }
}

console.log(compareVersion('0.1', '1.1.1')); // 返回-1
console.log(compareVersion('13.37', '1.2 ')); // 返回1
console.log(compareVersion('1.1', '1.1.0')); // 返回0
