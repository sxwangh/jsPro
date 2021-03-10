// ts中两个类型 内部结构兼容， 两个类型 就是兼容的 （例如Person 和 user）  这就允许我们在实现接口时候只要保证包含了接口要求的结构就可以，而不必明确地使用implements语句
// 2.接口
interface Person {
  firstName: string;
  lastName: string;
}
// 1.注解
function greeter(person: Person) {
  return `Hello, ${person.firstName} ${person.lastName}`;
}

let user = { firstName: 'Wang', lastName: 'sixue' };

document.body.innerHTML = greeter(user);
