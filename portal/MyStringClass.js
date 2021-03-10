class MyString extends String {
  // function MyString() {}
  // (constructor方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。一个类必须有constructor方法，如果没有显式定义，一个空的constructor方法会被默认添加。)
  constructor(str) {
    debugger;
    super(str);
  }
  // MyString.prototype.replaceByIndex
  replaceByIndex(start, length, replaceWord) {
    const end = start + length;
    let newSen = '';
    if (start === 0) {
      newSen = `${replaceWord}${this.slice(end, this.length - 1)}`;
    } else {
      newSen = `${this.slice(0, start)}${replaceWord}${this.slice(end, this.length - 1)}`;
    }
    return newSen;
  }
}

//export default MyString; == es6使用浏览器
// commonjs
// module.exports.MyString = MyString;
module.exports = MyString;
