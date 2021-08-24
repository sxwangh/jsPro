const target = {
    message1: "wsx",
    message2: "everyone"
};

const handler = {
    // target对象 prop属性
    get: function (target, prop, receiver) {
        if (prop === "message2") {
            return `hi: ${prop}`;
        }
        return Reflect.get(...arguments);
    },
    // 设置属性的时候进行拦截： set() 方法应当返回一个布尔值。
    // 返回 true 代表属性设置成功。
    // 在严格模式下，如果 set() 方法返回 false，那么会抛出一个 TypeError 异常。
    set(target, property, value, receiver) {
        console.log(`handler: set...`);
        // if (property !== 'message1') {
        //     target[property] = value;
        // }
        if (property !== 'message1') {
            return Reflect.set(...arguments); // Reflect.set(target, propertyKey, value[, receiver])
        }
    }
};

const proxy1 = new Proxy(target, handler);

console.log(proxy1.message1); // wsx
console.log(proxy1.message2); // world
proxy1.message3 = 'you';
console.log(proxy1.message3);
proxy1.message2 = 'everyone-new';
console.log(proxy1.message2);
proxy1.message1 = 'wsx-new';
console.log(proxy1.message1); // world

// reflect ==> 等同于
// Reflect.get(target, propertyKey[, receiver])  ==>  target[propertyKey]
// Reflect.set(target, propertyKey, value[, receiver]) ==> target[propertyKey] = value;


