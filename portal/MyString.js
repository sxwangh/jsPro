function MyString(str) {
  String.call(this, str)
}

MyString.prototype = Object.create(String.prototype);
MyString.prototype.constructor = MyString;

MyString.prototype.replaceByIndex = function(start, length, replaceWord) {
  const end = start + length;
  let newSen = '';
  if (start === 0) {
    newSen = `${replaceWord}${String.prototype.slice.call(this, end, this.length - 1)}`;
  } else {
    newSen = `${String.prototype.slice.bind(this)(this,0, start)}${replaceWord}${String.prototype.slice.bind(this)(end, this.length - 1)}`;
  }
  return newSen;
};
//export default MyString; == es6使用浏览器
// commonjs
module.exports = MyString;
// module.exports.MyString = MyString;
