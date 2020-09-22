const Base = function(){
    this.a = '123';
};
const o1 = Object.create(Base);
const o2 = new Base();


console.log(o1.a);
console.log(o2.a);
