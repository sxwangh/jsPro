
hasClass(element, cls) {
  return (` ${element.className} `).indexOf(` ${cls} `) > -1;
},
// getClassName(index) {
//   if (this.hasClass(document.getElementsByClassName('i-class')[index].parentNode, 'is-active')) {
//     console.log(`${index}-return-is-active`);
//     return 'is-active';
//   }
//   console.log(`${index}-return-''`);
//   return '';
// },
