const imgs = [...document.getElementsByTagName('img')];

let n = 0;

lazyload();

function lazyload() {
  const innerHeight = window.innerHeight;
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  imgs.forEach((img) => {
    if (img.offsetTop < innerHeight + scrollTop) {
      // 加载图片
      img.src = img.getAttribute("data-src");
    }
  });
}

function throttle(fn, wait) {
  let timer = null;
  return function(...args) {
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
        fn.apply(this, args);
      }, wait);
    }
  }
}

window.addEventListener('scroll', throttle(lazyload, 200));

// --- 弊端
// 1. 每次读取 scrollTop 都会引起回流
// 2. scrollTop跟DOM的嵌套关系有关，应该根据DOM.getboundingclientrect(获取它对应于视口左上角的坐标，再判断是否在视口之内。这种方法的缺点是，由于scroll事件密集发生，计算量很大，容易造成性能问题)
// 3.
// 3. 滑到最后的时候刷新，会看到所有的图片都加载了

