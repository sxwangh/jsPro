// 1：判断一个字符串"xyzzzzzzzzzyxyz"中出现次数最多的字符，并统计次数

const x = 'xyzzzzzzzzzyxyz';
const arr = Array.from(x);
const obj = {};
let max = 0;
let maxStr = '';
arr.forEach((item) => {
   console.log(item);
   if(!obj[item]) {
       obj[item] = 1;
   } else {
       obj[item]++;
   }
});
console.log(obj);

for(let key in obj) {
    if(obj[key] > max) {
        max = obj[key];
        maxStr = key;
    }
}
console.log(`${maxStr}出现的次数最多，出现了${max}次`);
