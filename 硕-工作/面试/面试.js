// 1.说一下 Http 缓存策略


// 2.css水平、垂直居中的写法，请至少写出4种？
// 1）行内元素  text-align: center   line-height 等于height
// 行内元素: text-align: center
// 块级元素: margin: 0 auto
// position:absolute +left:50%+ transform:translateX(-50%)
// display:flex + justify-content: center
// 垂直居中
//
// 设置line-height 等于height
// position：absolute +top:50%+ transform:translateY(-50%)
// display:flex + align-items: center
// display:table+display:table-cell + vertical-align: middle;


// 3.1rem、1em、1vh、1px各自代表的含义？
// rem
// rem是全部的长度都相对于根元素<html>元素。通常做法是给html元素设置一个字体大小，然后其他元素的长度单位就为rem。
//
// em
// 子元素字体大小的em是相对于父元素字体大小
// 元素的width/height/padding/margin用em的话是相对于该元素的font-size
// vw/vh
// 全称是 Viewport Width 和 Viewport Height，视窗的宽度和高度，相当于 屏幕宽度和高度的 1%，不过，处理宽度的时候%单位更合适，处理高度的 话 vh 单位更好。
//
// px
// px像素（Pixel）。相对长度单位。像素px是相对于显示器屏幕分辨率而言的。
//
// 一般电脑的分辨率有{1920*1024}等不同的分辨率
//
// 1920*1024 前者是屏幕宽度总共有1920个像素,后者则是高度为1024个像素



// 4. 盒模型
// 盒模型是css中重要的基础知识，也是必考的基础知识
// 盒模型的组成，由里向外content,padding,border,margin.
//
//   在IE盒子模型中，width表示content+padding+border这三个部分的宽度
//
// 在标准的盒子模型中，width指content部分的宽度
//
// box-sizing的使用
//
// box-sizing: content-box 是W3C盒子模型
// box-sizing: border-box 是IE盒子模型
// box-sizing的默认属性是content-box



// 5.画三角
// .a{
//   width: 0;
//   height: 0;
//   border-width: 100px;
//   border-style: solid;
//   border-color: transparent #0099CC transparent transparent;
//   transform: rotate(90deg); /*顺时针旋转90°*/
// }

// <div class="a"></div>



// 6.跨域

// 7.事件委托
// 事件委托是指将事件绑定到目标元素的父元素上，利用冒泡机制触发该事件
//
// ulEl.addEventListener('click', function(e){
//   var target = event.target || event.srcElement;
//   if(!!target && target.nodeName.toUpperCase() === "LI"){
//     console.log(target.innerHTML);
//   }
// }, false);


//8.target、currentTarget的区别？
// currentTarget当前所绑定事件的元素
//
// target当前被点击的元素


// 9.js事件循环

// 10.this 指向改变
// fun.call(this,a,b,c,d)
// fun.apply(this,args)


// vue双向绑定原理

// websocket 用过没
