// 1-React 前端開發：簡介與安裝
// React 和 ReactDOM 這兩個物件，是 React 套件的核心物件
// console.log("React:", React);
// console.log("ReactDOM:", ReactDOM);
// ==========================
// 2-React 前端開發：快速入門範例
/* 
window.addEventListener("load", () => {
    // 1.建立型態為 H1 的 React Element，並且包含文字 Hello Zack (文字也是一種子元件)
    //   相當於 <H1>Hello Zack</H1>
    let reactElement = React.createElement("H1", null, "Hello Zack");
    // 2.將建立好的 React Element 畫到容器中，這裡的容器使用 HTML Body Element
    ReactDOM.render(
        reactElement, document.body
    );
});
*/
// ==========================
// 4-React 前端開發：我的第一個組件 Component
/* 
class MyHead extends React.Component {
    render() {
        return React.createElement("H1", null, "Hello Component");
    }
}
window.addEventListener("load", () => {
    // 1. 建立自訂的 React 組件實體
    let myComponent = React.createElement(MyHead, null);
    // 2. 將建立好的 React 組件實體畫到容器中
    ReactDOM.render(myComponent, document.body);
});
*/
// ==========================
// 5-React 前端開發：組件的屬性 Props
/* 
class MyHead extends React.Component {
    render() {
        // console.log(this.props.level); // 3
        // 根據屬性可以設定不同的標籤
        return React.createElement("H" + this.props.level, null, "Hello Component");
    }
}
window.addEventListener("load", () => {
    // 1. 建立自訂的 React 組件實體，給定屬性
    let myComponent = React.createElement(MyHead, { level: 3 });
    // 2. 將建立好的 React 組件實體畫到容器中
    ReactDOM.render(myComponent, document.body);
});
*/
// ==========================
// 6-React 前端開發：巢狀組件結構
/* 
class MyHead extends React.Component {
    render() {
        return React.createElement("H" + this.props.level, null, "Hello Component");
    }
}
class MyHeadList extends React.Component {
    render() {
        let heads = [];
        let head;
        // 用迴圈製作不同的子元件
        for (let i = 1; i < 6 ; i++ ) {
            head = React.createElement(MyHead, { level: i });
            heads.push(head);
        }
        // 將全部的子元件放入 heads 陣列中，並放入 DIV tag 中
        return React.createElement("DIV", null, heads);
    }
}
window.addEventListener("load", () => {
    let myComponent = React.createElement(MyHeadList, null);
    ReactDOM.render(myComponent, document.body);
});
*/
// ==========================
// 7-React 前端開發：組件的狀態 State
/*
class MyHead extends React.Component {
    render() { // 繪製 MyHead 組件的邏輯
        return React.createElement("H" + this.props.level, null, "Hello Component");
    }
}
class MyHeadList extends React.Component {
    constructor(props) {
        super(props);
    // 設定 maxLevel 狀態，以動態調整屬性
        this.state = { maxLevel: 3 };
    // 2 秒鐘之後，執行這裡的程式碼
        window.setTimeout(() => {
            // 更新狀態(無關連)
            // this.setState({ maxLevel: 6 });
            // 更新狀態(有關連)
            this.setState((currentState, currentProps) => ({ maxLevel: currentState.maxLevel + 1 }));
        }, 2000);
    }
    render() { // 繪製 MyHeadList 組件的邏輯
        let heads = [];
        let head;
    // 修改上限為 maxLevel 狀態，以動態調整屬性
        for (let i = 1; i < this.state.maxLevel ; i++ ) {
            head = React.createElement(MyHead, { level: i });
            heads.push(head);
        }
        return React.createElement("DIV", null, heads);
    }
}
window.addEventListener("load", () => {
    let myComponent = React.createElement(MyHeadList, null);
    ReactDOM.render(myComponent, document.body);
});
*/
// ==========================
// 8-React 前端開發：組件的生命週期 Lifecycle
/* 
class MyHead extends React.Component {
    render() { // 繪製 MyHead 組件的邏輯
        return React.createElement("H" + this.props.level, null, "Hello Component");
    }
}
class MyHeadList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { maxLevel: props.start };
    }
    // 設定連續逐步顯示
    componentWillMount() { // 組件將要繪製前的時刻
        this.intervalId = window.setInterval(() => {
            // 每秒鐘執行這裡的邏輯
            this.setState((currentState, currentProps) => {
                if (currentState.maxLevel > currentProps.end) { // 不要更新
                    return currentState;
                }
                else { // maxLevel + 1
                    return { maxLevel: currentState.maxLevel + 1 };
                }
            });

        }, 1000);
    }
    componentWillUnmount() { // 組件將要刪除前的時刻
        // 需要刪除排程，否則系統會一直執行排程
        window.clearInterval(this.intervalId);
    }
    render() { // 繪製 MyHeadList 組件的邏輯
        let heads = [];
        let head;
        for (let i = 1; i < this.state.maxLevel ; i++ ) {
            head = React.createElement(MyHead, { level: i });
            heads.push(head);
        }
        return React.createElement("DIV", null, heads);
    }
}
window.addEventListener("load", () => {
    // 動態調整開始與結束時的個數
    let myComponent = React.createElement(MyHeadList, { start: 2, end: 5 });
    ReactDOM.render(myComponent, document.body);
});
*/
