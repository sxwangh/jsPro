// 类(构造函数/公共字段)
class Student {
  fullName: string;
  // 在构造函数的参数上使用public等同于创建了同名的成员变量
  constructor(public firstName: string, public lastName: string, public age: number) {
    this.fullName = `${firstName} ${lastName}`;
  }
}

// 接口 类似泛型
interface Person {
  readonly firstName: string;
  lastName: string;
  [propName: string]: any;
}

// Person has no age！（for ts，编译之后的js可以改写）
function greeter(person: Person) {
  // person.firstName = 'w'; // cant be rewritten becauseof readonly  【const for 变量， readonly for 属性】
  person.lastName = 'sx';
  return `Hello: ${person.firstName} ${person.lastName}`;
}

// Student has age！
function greeterS(person: Student) {
  return `Hello: ${person.firstName} ${person.lastName}, age is ${person.age}`;
}


let user = new Student('Wang', 'sixue', 27);

console.log(greeter(user)); // [满足Person的必要条件就可以]
console.log(greeterS(user));
