// DOM 对象
const DOM = {
  // 标签名
  tagName: 'div',
  // 属性
  properties: {
    // 样式
    style: {},
  },
  // 子节点
  children: [],
  // 唯一标识
  key: 1,
};

// 真正的dom 对象很大的  （页面重排很耗费性能的）
const divDom = document.createElement('div');
for(var key in divDom) {
  console.log(key); // 很多很多很多
}


// 通过Element.js类来创建DOM (组建DOM树-数据结构、渲染DOM-document.createElement)
const tree = new Element('div', {classname: 'div'}, [
  new Element('h1', {style: 'color: red;'},['Hello, This is my Vdom library']),
  new Element('ul', [
    new Element('li', ['1111']),
    new Element('li', ['2222']),
  ])
]);
const $dom = tree.render();
console.log(111, $dom);
// 类比vue 的render    (vue中也是把template解析成render模板进行渲染的;)
() => {
  return h('div', {
    style: {
      background: '#fff',
    },
    class: {
      'content': true,
    },
    on: {
      click: () => {

      },
      mouseenter: () => {

      },
      mouseleave: () => {

      },
    },
  }, [
    h('p', {}, '文本')
  ])
};

// diff.js  新旧DOM树比对
// ---------------------------------------
// Dom树结构
var element = {
  tagName: 'ul', // 节点标签名
  props: { // DOM的属性，用一个对象存储键值对
    id: 'list'
  },
  children: [ // 该节点的子节点
    {tagName: 'li', props: {class: 'item'}, children: ["Item 1"]},
    {tagName: 'li', props: {class: 'item'}, children: ["Item 2"]},
    {tagName: 'li', props: {class: 'item'}, children: ["Item 3"]},
  ]
};
// 上诉结构对应的html
// <ul id='list'>
//    <li class='item'>Item 1</li>
//    <li class='item'>Item 2</li>
//    <li class='item'>Item 3</li>
// </ul>

// virtual DOM 步骤
// 1.用 JavaScript 对象结构表示 DOM 树的结构；然后用这个树构建一个真正的 DOM 树，插到文档当中
// 2.当状态变更的时候，重新构造一棵新的对象树。然后用新的树和旧的树进行比较，记录两棵树差异
// 3.把2所记录的差异应用到步骤1所构建的真正的DOM树上，视图就更新了


// 1.js 模拟DOM树   element.js
// 2.diff.js  深度优先(竖着) / 广度优先(横向)
// ---- 1)比较   属性        变化
// ---- 2)比较   子元素      变化
// ---- 3)比较   innerHTML  变化
// ---- 4)用 pathes 来存储差异


// 3）
// --1、newNode === unddefined 节点 移除 （delete）
// --2、typeof oldNode === 'String' typeof newNode === 'String'  && oldNode !== newNode  节点 文本 修改   （modify）
// --3、oldNode.tagName === newNode.tagName && oldNode.key === newNode.key 根据tagName、key都相同的话，比对属性props （删除、修改、新增）和 比对children（）
// --4、else   （replace）











































