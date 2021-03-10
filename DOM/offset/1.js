
document.getElementById('div-3').addEventListener('click', (evt) => {
  console.log(1);
  const el1 = document.getElementsByClassName('el')[0];
  const el2 = document.getElementsByClassName('el')[1];
  const el3 = document.getElementsByClassName('el')[2];
  const el4 = document.getElementsByClassName('el')[3];
  const el5 = document.getElementsByClassName('el')[4];
  const outerDom = document.getElementById('div-2');
  elIsInView(el1, outerDom);
  elIsInView(el2, outerDom);
  elIsInView(el3, outerDom);
  elIsInView(el4, outerDom);
  elIsInView(el5, outerDom);
}, false);

function elIsInView(el, outerDom) {
  // console.log(`el offsetTop(子元素外边框相对于(离自己最近的、拥有定位的position)父元素内边框的距离) -- 与滚动条无关:  ${el.offsetTop}`);
  console.log(`el 相对于 outerDom 的距离 （划出滚动条位移） :  ${el.getBoundingClientRect().top} - ${outerDom.getBoundingClientRect().top}`);
  // console.log(`el scrollHeight(用于获取：el的高度（包括border和滚动条占用的空间） = clientHeight 即dom的height) -- 与滚动条无关:  ${el.scrollHeight} === ${el.clientHeight}`);
  console.log(`outerDom 滑出去的滚动条距离:  ${outerDom.scrollTop}`);
  // console.log(`el 上border相对于浏览器窗口左上角的距离 （滚动条划出后不可见的位置也算） :  ${el.getBoundingClientRect().top}`);
  if (el.getBoundingClientRect().top - outerDom.getBoundingClientRect().top > 0) {
    console.log('当前el是在outerDom可视区域内第一个元素');
    return true;
  }
  return false
}
