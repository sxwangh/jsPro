/*  -------------------------------------简单使用场景-----------------------------------------------  */
// 使用场景

function App() {
    const [num, setNum] = useState(0);

    return (
        <div>
            <div>num: {num}</div>
            <button onClick={() => setNum(num + 1)}>加 1</button>
        </div>
    );
}

// 利用闭包模块化，模拟hook （useState）

function render() {
    ReactDOM.render(<App />, document.getElementById("root"));
}

let state;

function useState(initialState){
    state = state || initialState;

    function setState(newState) {
        state = newState;
        render();
    }

    return [state, setState]; // 返回数组： 利用闭包
}

render(); // 首次渲染

/*  -------------------------------------正常使用场景  useState ，states 和setStates 放到数组里，通过cursor游标控制----------------------------------------------  */
import React from "react";
import ReactDOM from "react-dom";

const states = [];
let cursor = 0; // 1

// 依然是利用Array + Cursor的思路
function useState(initialState) {
    const currenCursor = cursor; // 2
    states[currenCursor] = states[currenCursor] || initialState; // 检查是否渲染过

    function setState(newState) {
        states[currenCursor] = newState; // 3
        render(); // doRender
    }

    cursor+=1; // 更新游标 4
    return [states[currenCursor], setState];
}

function App() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(1);

    return (
        <div>
            <div>count1: {count1}</div>
            <div>
                <button onClick={() => setCount1(count1 + 1)}>add1 1</button>
                <button onClick={() => setCount1(count1 - 1)}>delete1 1</button>
            </div>
            <hr />
            <div>num2: {num2}</div>
            <div>
                <button onClick={() => setCount2(count2 + 1)}>add2 1</button>
                <button onClick={() => setCount2(count2 - 1)}>delete2 1</button>
            </div>
        </div>
    );
}

function render() {
    ReactDOM.render(<App />, document.getElementById("root"));
    cursor = 0; // 重置cursor
}

render(); // 首次渲染


 //
