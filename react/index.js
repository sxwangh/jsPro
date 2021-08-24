// 一、rules
// 1、React Hook "useEffect..." cannot be called at the top level. React Hooks must be called in a React function component or a custom React Hook function.

// 二、react的两套 API: 类（class）API 和基于函数的钩子（hooks） API。

// 写法比对：

// class --- this.props.name
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
// hooks -- 参数 props.name
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }

// *钩子的灵活性太大，初学者不太容易理解。很多人一知半解，很容易写出混乱不堪、无法维护的代码。那就不如使用类了。因为类有很多强制的语法约束，不容易搞乱。

// class和hooks的差异： 不同的写法，代表了不同的编程方法论
// 1.class：是数据和逻辑的封装
//（组件的状态和操作方法是封装在一起的。如果选择了类的写法，就应该把相关的数据和操作，都写在同一个 class 里面）
// 2.hooks: 函数一般来说，只应该做一件事，就是返回一个值
// 数据和操作写在不同函数中， react函数组件（Pure Function 纯函数）：一件事，返回html
// 函数式编程将那些跟数据计算无关的操作，都称为 "副效应" （side effect）
// 纯函数内部只有通过间接的手段（即通过其他函数调用），才能包含副效应

// side Effect (用 hook实现)
// 钩子（hook）就是 React 函数组件的副效应解决方案，用来为函数组件引入副效应
// 1.useState

// 2.useContext
const AppContext = React.createContext({});
// 组件状态共享 username属性
<AppContext.Provider value={{
  username: 'superawesome'
}}>
  <div className="App">
    <Navbar/>
    <Messages/>
  </div>
</AppContext.Provider>
// 组件取值
const Navbar = () => {
    const { username } = useContext(AppContext);
    return (
        <div className="navbar">
        <p>AwesomeSite</p>
        <p>{username}</p>
        </div>
    );
}
// 3.useRef()

// 4.useEffect(function, []) （1/组件每渲染一次，该函数就自动执行一次 2/依赖state监听）

// 5.useReducer()


// class
import React, { Component } from "react";

export default class Button extends Component {
  constructor() {
    super();
    this.state = { buttonText: "Click me, please" };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(() => {
      return { buttonText: "Thanks, been clicked!" };
    });
  }
  render() {
    const { buttonText } = this.state;
    return <button onClick={this.handleClick}>{buttonText}</button>;
  }
}

// hook
import React, { useState } from "react";

export default function  Button()  {
  const  [buttonText, setButtonText] =  useState("Click me,   please");

  function handleClick()  {
    return setButtonText("Thanks, been clicked!");
  }

  return  <button  onClick={handleClick}>{buttonText}</button>;
}

// useEffect (mounted / 监听 / unmounted)

useEffect(() => {
    // DidMound : 生命周期(当界面第一次渲染完成执行，更新时不执行)
    console.log('当界面第一次渲染完成执行，更新时不执行');
    console.log('进度条useEffect');

    return () => {
        // WillUnMount 组件销毁
        console.log('useEffect...  return');
        console.log('WillUnMount 组件销毁');
    };
}, []);
