// Generator.prototype.next()
// Generator.prototype.return()
// Generator.prototype.throw()

// .value  .done

// 生成器 不能new
function* gen() {
    yield 1;
    yield 2;
    yield 3;
}

// 调用一个生成器函数并不会马上执行它里面的语句，而是返回一个这个生成器的 迭代器 （ iterator ）对象
let g = gen();
// "Generator { }"
console.log(g);

console.log(g.next()); // 当这个迭代器的 next() 方法被首次（后续）调用时，其内的语句会执行到第一个（后续）出现yield的位置为止
console.log(g.next());
console.log(g.next());
console.log(g.next());


