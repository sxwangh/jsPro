var p2 = new Promise(function(resolve, reject) {
    resolve(1);
});

p2.then(function(value) {
    console.log(value); // 1
    return value + 1;
}).then(function(value) {
    console.log(value + ' - A synchronous value works');
});

p2.then(function(value) {
    console.log(`下面这个${value}`); // 1
});
