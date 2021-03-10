// ---浅拷贝（引用类型：共用指针内存）  /  深拷贝 （独立）
const target = {
  field1: 1,
  field2: undefined,
  field3: 'ConardLi',
  field4: {
    child: 'child',
    child2: {
      child2: 'child2'
    }
  }
};



// 1. JSON.parse(JSON.stringify());
// 2. 对象类型  -- 对象只有一层 试用
function clone2(target) {
  let cloneTarget = {};
  for (const key in target) {
    cloneTarget[key] = target[key];
  }
  return cloneTarget;
};
// 3. 对象类型 --多层
function clone3(target) {
  if (typeof target === 'object') {
    let cloneTarget = {};
    for (const key in target) {
      cloneTarget[key] = clone3(target[key]);
    }
    return cloneTarget;
  } else {
    return target;
  }
};
// 4.数组可用版本

// test
let copy = clone3(target);
target.field4.child = 'wsx';
target.field4.child2.child2 = 'wsx2';
console.log(target);
console.log(copy);
