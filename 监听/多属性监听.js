var obj = {};
Object.defineProperties(obj, {
    a: {
        configurable: true,
        get: function() {
            console.log('get: ', a);
            return a;
        },
        set: function(value) {
            a = value;
            console.log('set: ', a);
        }
    },
    b: {
        configurable: true,
        get: function() {
            console.log('get: ',b);
            return b;
        },
        set: function(value) {
            b = value;
            console.log('set: ', b);
        }
    }
});

obj.a = 10;
obj.a;
