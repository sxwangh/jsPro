
String.prototype.replaceByIndex = function(start, length, replaceWord) {
  const end = start + length;
  let newSen = '';
  if (start === 0) {
    newSen = `${replaceWord}${this.slice(end, this.length - 1)}`;
  } else {
    newSen = `${this.slice(0, start)}${replaceWord}${this.slice(end, this.length - 1)}`;
  }
  return newSen;
}
export default String;
//
// var sen = 'mynameiswsx';
// const u = sen.replaceByIndex(6, 2, 'ss');
// console.log(u);
