// JavaScript ES6 與 React 前端開發：從入門到進階
// https://www.youtube.com/watch?v=LlMBgyWs-Qw&list=PL-g0fdC5RMboo-XNa2DzFvYg_9QWBIos6&index=19

// 1-React 前端開發：簡介與安裝
// React 是甚麼？
    // 1.用來開發「使用者介面」的 JavaScript 套件
    // 2.以組件 (Component) 為核心
    // 3.容易理解和除錯
    // 4.Facebook 開發團隊支援
    // 5.未來可延伸至手機應用

// 安裝 React 套件
// 請參考官方網站：https://facebook.github.io/react/
// 在下方網址中複製 CDN (已壓縮版本)，並貼至 index.html 的 <head> 中
// https://zh-hant.reactjs.org/docs/cdn-links.html
// =======
// in index.html:
/* 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React</title>
    <script crossorigin src="https://unpkg.com/react@17/umd/react.production.min.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script>
    <script src="index.js"></script>
</head>
<body>
    
</body>
</html>
*/
// =======
// in index.js:
// React 和 ReactDOM 這兩個物件，是 React 套件的核心物件
console.log("React:", React);
    // React: {Fragment: Symbol(react.fragment), StrictMode: Symbol(react.strict_mode), Profiler: Symbol(react.profiler), Suspense: Symbol(react.suspense), Children: {…}, …}
console.log("ReactDOM:", ReactDOM);
    // ReactDOM: {__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {…}, createPortal: ƒ, findDOMNode: ƒ, flushSync: ƒ, hydrate: ƒ, …}
// ==========================
// 2-React 前端開發：快速入門範例
// React Element：React 應用中最小的組成單位
// 1.使用
React.createElement(
    型態、[屬性]、[子元件]
)
// 2.使用
ReactDOM.render(
    React_Element, 容器
)
// =======
// in index.js:
window.addEventListener("load", () => {
    // 1.建立型態為 H1 的 React Element，並且包含文字 Hello Zack (文字也是一種子元件)
    //   相當於 <H1>Hello Zack</H1>
    let reactElement = React.createElement("H1", null, "Hello Zack");
    // 2.將建立好的 React Element 畫到容器中，這裡的容器使用 HTML Body Element
    ReactDOM.render(
        reactElement, document.body
    );
});
// ==========================
// 3-React 前端開發：基本設計理念
// React_Root.png

// React Element 分成兩種
// 1. 基本的 HTML DOM(Document Object Model) Element
// 2. React 組件 (Component) => 後續的教學重點
// =======
// in index.js:
// ==========================
// 4-React 前端開發：我的第一個組件 Component
// 組件：自訂的 React Element

React.Component --(繼承)--> 我的組件類別 -- render()

// 定義一個組件類別
class 組件類別名稱 extends React.Component {
    組件類別內的程式碼...
// 在組件類別中定義 render 方法
    render() {
        return React_Element;
    }
}

// 建立組件實體
React.createElement(
    組件類別名稱, [屬性物件], [子元件]
);

// 將組件實體加入畫面中
ReactDOM.render(
    組件實體, 容器元件
);
// =======
// in index.js:
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
// ==========================
// 5-React 前端開發：組件的屬性 Props
// 組件屬性：初始設定，建立後不變動
React.Component --(繼承)--> 我的組件類別 -- render() & props

// 建立組件實體時，設定屬性物件
React.createElement(
    組件類別名稱, [屬性物件], [子元件]
);

// 在組件的方法中使用屬性物件
class 組件類別名稱 extends React.Component {
    render() {
        // 使用 this.props 取得屬性物件
        this.props;
    }
}
// =======
// in index.js:
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
// ==========================
// 6-React 前端開發：巢狀組件結構
// 建立組件實體時，設定子元件
// 子元件可以是其他的組件實體
React.createElement(
    組件類別名稱, [屬性物件], [子元件]
);

// React_Nest.png
// =======
// in index.js:
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
// ==========================
// 7-React 前端開發：組件的狀態 State
// 組件狀態：預期未來會變動的設定
React.Component --(繼承)--> 我的組件類別 -- render() & props & state

// 組件類別的建構式
class 組件類別名稱 extends React.Component {
    constructor(props) {
        // 一定要先呼叫父類別的建構式
        super(props);
    }
}

// 組件類別的建構式中，初始化狀態
class 組件類別名稱 extends React.Component {
    constructor(props) {
        super(props);
    // 下面二選一
        this.state = {}; // 初始化狀態為空白物件
        this.state = { data: 10 }; // 初始化狀態物件
    }
}

// 更新狀態
setState(新的組件狀態);

// 更新組件狀態
class 組件類別名稱 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    // update() 是隨興建立的測試用方法
    update() {
        // 使用 setState(狀態物件) 來更新狀態
        this.setState({ data: "新的資料" });
        // 【禁止】直接更新狀態物件
        // this.state = { data: "新的資料" };
    }
}

// 更新狀態，與目前的狀態有關連
setState((目前狀態, 目前屬性) => (新的狀態));

// 更新組件狀態
class 組件類別名稱 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: 10 };
    }
    // update() 是隨興建立的測試用方法
    update() {
        // 新狀態資料 = 目前狀態資料 + 1
        this.setState((currentState, currentProps) => (
            { data: currentState.data + 1 }
        ));
    }
}

// 「更新狀態」會自動呼叫 render() 重繪畫面
// =======
// in index.js:
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
            this.setState({ maxLevel: 6 });
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
// ==========================
// 8-React 前端開發：組件的生命週期 Lifecycle
// 組件的重要操作
    // 1.建立組件
    // 2.更新組件
    // 3.刪除組件

// 建立組件：依照順序執行以下方法
    // 1. constructor();
    // 2. componentWillMount();
    // 3. render();
    // 4. componentDidMount();

// 更新組件：依照順序執行以下方法
    // 1. componentWillUpdate();
    // 2. render();
    // 3. componentDidUpdate();

// 刪除組件：依照順序執行以下方法
    // 1. componentWillUnmount();

// 在組件類別中複寫方法，自訂邏輯
// 範例：複寫 render()，自訂繪製邏輯
// =======
// in index.js:
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
// ==========================
// 9-React 前端開發：JSX 語法與 Babel 編譯器
// JSX：在 JS 中類似 HTML 標籤的語法
// JSX 用途：方便產生 React Element

// 原生的寫法
React.createElement();

// 設計組件類別
class MyHead extends React.Component {
    render() {
        // 建立以【原生 HTML 標籤】為基礎的 React Element
        return React.createElement('h1', null, 'Hello Zack');
    }
}
window.addEventListener('load', () => {
    // 建立以【React 組件】為基礎的 React Element
    let myElement = React.createElement(MyHead);
    ReactDOM.render(
        myElement, document.body
    );
});

// JSX 寫法
// 設計組件類別
class MyHead extends React.Component {
    render() {
        // 取代 React.createElement('h1', null, 'Hello Zack') 
        return <h1>Hello Zack</h1>;
    }
}
window.addEventListener('load', () => {
    let myElement = <MyHead/>; // 取代 React.createElement(MyHead)
    ReactDOM.render(
        myElement, document.body
    );
});

// 瀏覽器「不支援」 JSX 語法

// Babel：將 JSX 轉換成瀏覽器相容的程式

包含 JSX 的 JavaScript -> Babel 編譯器 -> 瀏覽器支援的 JavaScript

// 載入 Babel 編譯器：
// babel 官網 -> Setup -> In the browser -> 複製載入碼
// https://babeljs.io/setup#installation

// =======
// in index(old).html: (因 HTML 特性難以多行註解，故註解須寫在 tutorial.js 中)
// 在 <head> 中：
// 載入 Babel 編譯器
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
// 包含 JSX 語法的 JavaScript 必須使用 type="text/babel"
<script type="text/babel">
    // 以下組件設計，使用 JSX 語法
    class MyHead extends React.Component {
        render() {
            // 取代 React.createElement('h1', null, 'Hello Zack') 
            return <h1>Hello Zack</h1>;
        }
    }
    window.addEventListener('load', () => {
        let myElement = <MyHead/>; // 取代 React.createElement(MyHead)
        ReactDOM.render(
            myElement, document.body
        );
    });
</script>
// =======
// in index.js:
// 因為 src="index.js" 需在 Node.js 的環境中使用 Webpack 才可使用 Babel 編譯器，
// 故程式碼先必須放在 index.html 中
// ==========================
// 10-React 前端開發：JSX 基本使用與動態資料
// JSX：取代 React.createElement 方法
// 取代 React.createElement(MyHead);
let myComponent = <MyHead/>;

// 元件的屬性
// 取代 React.createElement(MyHead, { level: 3 });
let myComponent = <MyHead level="3"/>;

// 在 JSX 中使用 { JS程式 } 結合動態資料
class MyHead extends React.Component {
    render() {      
    // 取代 React.createElement("div", { className: "head" }, "Hello Zack" + this.props.level) 
    // className：class 在 JavaScript 中的名稱
        return <div className="head">Hello Zack { this.props.level }</div>; // Hello Zack 3
    }
}
window.addEventListener('load', () => {
    let myElement = <MyHead level="3"/>; 
    ReactDOM.render(
        myElement, document.body
    ); 
});

// 建立巢狀結構
class MyHead extends React.Component {
    render() { return <div className="head">Hello Zack { this.props.level }</div>; }
}
class MyHeadList extends React.Component {
    render() { // 類似 HTML 般使用巢狀的結構
        return <div> 
            <MyHead level="1"/>
            <MyHead level="2"/>
            <MyHead level="3"/>
        </div>
    }
}
window.addEventListener('load', () => {
    let list = <MyHeadList/>; 
    ReactDOM.render(list, document.body); 
});

// 比起 HTML，JSX 更接近 JavaScript
// 使用 className 而不是 class
<div className="head">Hello Zack { this.props.level }</div>
// =======
// in index(old).html: (因 HTML 特性難以多行註解，故註解須寫在 tutorial.js 中)
// 在 <head> -> <script type="text/babel"> 中：
        class MyHead extends React.Component {
            render() {      
            // 取代 React.createElement("div", { className: "head" }, "Hello Zack" + this.props.level) 
                return <div className="head">Hello Zack { this.props.level }</div>;
            }
        }
        class MyHeadList extends React.Component {
            render() {
                return <div>
                    <MyHead level="1"/> {/* Hello Zack 1 */}
                    <MyHead level="2"/> {/* Hello Zack 2 */}
                    <MyHead level="3"/> {/* Hello Zack 3 */}
                </div>
            }
        }
        window.addEventListener('load', () => {
            let elem = <MyHeadList/>; // React.createElement(MyHeadList);
            ReactDOM.render(
                elem, document.body
            );
        });
// =======
// in index.js:
// 因為 src="index.js" 需在 Node.js 的環境中使用 Webpack 才可使用 Babel 編譯器，
// 故程式碼先必須放在 index.html 中
// ==========================
// 11-React 前端開發：JSX 套用樣式 CSS Style
// 透過 className 屬性對應 CSS

// React.createElement 套用「行內樣式」
// 在屬性的部分使用 style，並設定 CSS 的樣式物件
React.createElement('div', { style: { color: 'red' }}, 'Hello Zack');

// 使用 JSX 套用「行內樣式」
// 一樣的：在屬性的部分使用 style，並設定 CSS 的樣式物件
<div style = {{ color: 'red' }}>Hello Zack</div>

// Note: index(old).html 不允許同時存在多個 DOCTYPE，故將舊碼需移動至 index(old).html；
// 而 index.html 則專門跑最新的程式碼

// =======
// in index(old).html: (因 HTML 特性難以多行註解，故註解須寫在 tutorial.js 中)
// 在 <head> 中：
// 在 <style type="text/css"> 中：
    .head{ font-size: 24px; font-weight: bold; }
// 在 <style type="text/babel"> 中：
    class MyHead extends React.Component {
        render() {      
        // 取代 React.createElement("div", { className: "head", style: { color: this.props.color } }, "Hello Zack" + this.props.level) 
        // style={ JSX } 行內樣式：this.props.color 可動態調整每一個 MyHead 標籤的 color 屬性
            return <div className="head" style={{ color: this.props.color }}>Hello Zack { this.props.level }</div>;
        }
    }
    class MyHeadList extends React.Component {
        render() {
            return <div>
                <MyHead level="1" color="red" />
                <MyHead level="2" color="green" />
                <MyHead level="3" color="blue" /> 
            </div>
        }
    }
    window.addEventListener('load', () => {
        let elem = <MyHeadList/>; // React.createElement(MyHeadList);
        ReactDOM.render(
            elem, document.body
        );
    });
// =======
// in index.js:
// 因為 src="index.js" 需在 Node.js 的環境中使用 Webpack 才可使用 Babel 編譯器，
// 故程式碼先必須放在 index.html 中
// ==========================
// 12-React 前端開發：事件處理 Event Handling
// React.createElement 事件處理
class MyHead extends React.Component {
    render() {
        return React.createElement('h' + this.props.level, {
            // 在屬性中註冊事件處理器 onclick => onClick
            onClick: this.clickHandler
        }, 'Hello Zack');
    }
    clickHandler(e) { // 事件處理器的第一個參數，取得 Event Object
        console.log('觸發點擊事件');
        console.log(this); // this 預設沒有綁定任何物件，印出 undefined
    }
}

// JSX 事件處理
class MyHead extends React.Component {
    render() {
        // 在屬性中註冊事件處理器 onclick => onClick
        return <div onClick = { this.clickHandler } 
            className = { 'head-' + this.props.level }>Hello Zack</div>;
    }
    clickHandler(e) { // 事件處理器的第一個參數，取得 Event Object
        console.log('觸發點擊事件');
        console.log(this); // this 預設沒有綁定任何物件，印出 undefined
    }
}

// 建立綁定物件
class MyHead extends React.Component {
    render() {
        return React.createElement('h' + this.props.level, {
            // 呼叫 bind 設定當前的組件 (this) 為綁定物件
            onClick: this.clickHandler.bind(this)
        }, 'Hello Zack');
    }
    clickHandler(e) { // 事件處理器的第一個參數，取得 Event Object
        console.log('觸發點擊事件');
        console.log(this.props); // this 為當前組件，可取得 props 或 state
    }
}

class MyHead extends React.Component {
    render() {
        // 呼叫 bind 設定當前的組件 (this) 為綁定物件
        return <div onClick = { this.clickHandler.bind(this) } 
            className = { 'head-' + this.props.level }>Hello Zack</div>;
    }
    clickHandler(e) { // 事件處理器的第一個參數，取得 Event Object
        console.log('觸發點擊事件');
        console.log(this.props); // this 為當前組件，可取得 props 或 state
    }
}

// =======
// in index(old).html: (因 HTML 特性難以多行註解，故註解須寫在 tutorial.js 中)
// 在 <head> 中：
// 在 <style type="text/css"> 中：
    .head-3{ font-size: 1.2em; font-weight: bold; }
// 在 <style type="text/babel"> 中：
class MyHead extends React.Component {
    constructor(props) {
        super(props);
        this.state = { color: "red" };
    }
    render() {      
        return <div className = { "head-" + this.props.level }
        style = {{ color: this.state.color }}
        onClick = { this.clickHandler.bind(this) }
        onMouseOver = { this.mouseOverHandler.bind(this) }
        // 老師出的作業，未解決~~~~
        onMouseOut = { this.mouseOutHandler.bind(this) }>Hello Zack</div>;
    }
    clickHandler(e) {
        // 當使用者點擊，把顏色換掉
        this.setState({ color: "blue" });
    }
    mouseOverHandler(e) {
        this.setState({ color: "green" });
    }
    mouseOutHandler(e) {
        // 未解決~~~~
        this.setState({ color: this.state.color })
    }
}
window.addEventListener('load', () => {
    ReactDOM.render(<MyHead level="3"/>, document.body);
});

// =======
// in index.js:
// 因為 src="index.js" 需在 Node.js 的環境中使用 Webpack 才可使用 Babel 編譯器，
// 故程式碼先必須放在 index.html 中
// ==========================
// 13-React 前端開發：表單處理 Form Handling
// 使用 onSubmit 事件處理表單
class MyForm extends React.Component {
    render() {
        // 在表單中註冊 onSubmit 事件
        return <form onSubmit = { this.handleSubmit.bind(this) }>
            <input type="text" />
            <input type="submit" value="Submit" />
        </form>;
    }
    handleSubmit(e) {
        e.preventDefault(); // 可停止瀏覽器預設的表單處理動作
        console.log('表單送出'); // 使用者點擊 Submit 送出表單後，在此進行處理
    }
}

// 使用 state 紀錄輸入元件中的資料
class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: "" }; // 初始化 state 紀錄單行輸入框的資料
    }
    render() {
        // 在單行輸入框中設定 value 屬性，讓介面反應資料的變更
        return <form onSubmit = { this.handleSubmit.bind(this) }>
            <input type="text" value = { this.state.text } />
            <input type="submit" value="Submit" />
        </form>;
    }
    // 以下省略
}

// 使用 onChange 追蹤輸入元件的資料變更
class MyForm extends React.Component {
    constructor(props) { super(props); this.state = { text: "" }; }
    render() {
        // 在單行輸入框中註冊 onChange 事件
        return <form onSubmit = { this.handleSubmit.bind(this) }>
            <input type="text" value = { this.state.text }
                onChange = { this.handleTextChange.bind(this) } />
            <input type="submit" value="Submit" />
        </form>;
    }
    handleTextChange(e) { // 處理資料變更的事件處理器
        // e.currentTarget 可以取得觸發事件的 HTML Element
        this.setState({ text: e.currentTarget.value });
    }
    // 以下省略
}

// 使用 value 屬性表達 textarea 的輸入
class MyForm extends React.Component {
    constructor(props) { super(props); this.state = { textarea: "" }; }
    render() {
        // 在多行輸入框中設定 value 屬性，並註冊 onChange 事件
        return <form onSubmit = { this.handleSubmit.bind(this) }>
            <textarea value = { this.state.textarea }
                onChange = { this.handleTextareaChange.bind(this) } />
            <input type="submit" value="Submit" />
        </form>;
    }
    handleTextareaChange(e) {
        this.setState({ textarea: e.currentTarget.value });
    }
    // 以下省略
}

// 使用 value 屬性表達 select 的輸入
class MyForm extends React.Component {
    constructor(props) { super(props); this.state = { selected: "male" }; }
    render() {
        // 在下拉式選單中設定 value 屬性，並註冊 onChange 事件
        return <form onSubmit = { this.handleSubmit.bind(this) }>
            <select value = { this.state.selected }
                onChange = { this.handleSelectChange.bind(this) }>
                    <option value="male">男</option>
                    <option value="female">女</option>
                </select>
            <input type="submit" value="Submit" />
        </form>;
    }
    handleSelectChange(e) {
        this.setState({ selected: e.currentTarget.value });
    }

    // 以下省略
}
// =======
// in index(old).html: (因 HTML 特性難以多行註解，故註解須寫在 tutorial.js 中)
// 在 <head> 中：
// 在 <style type="text/babel"> 中：
class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            gender: "male",
            story: ""
        };
    }
    render() {
        return <form onSubmit = { this.handleSubmit.bind(this) }>
            Name <input type="text" value = {this.state.name}
            onChange = {this.handleNameChange.bind(this)} />
            <br/>
            Gender <select value = { this.state.gender } onChange = { this.handleGenderChange.bind(this) }>
                <option value="male">男</option>    
                <option value="female">女</option>    
            </select>
            <br/>
            Story <textarea value = { this.state.story } onChange = { this.handleStoryChange.bind(this) } />
            <br/>
            <input type="submit" value="Submit" />
        </form>;
    }
    handleStoryChange(e) {
        this.setState({ story: e.currentTarget.value });
    }
    handleGenderChange(e) {
        this.setState({ gender: e.currentTarget.value });
    }
    handleNameChange(e) {
        this.setState({ name: e.currentTarget.value })
    }
    handleSubmit(e) {
        e.preventDefault(); 
        console.log('表單送出'); 
        console.log('Name: ' + this.state.name); 
        console.log('Gender: ' + this.state.gender); 
        console.log('Story: ' + this.state.story); 
        // 根據使用者輸入的資料，進行任何想要的運算、邏輯
    }
}
window.addEventListener('load', () => {
    ReactDOM.render(<MyForm/>, document.body);
});
// =======
// in index.js:
// 因為 src="index.js" 需在 Node.js 的環境中使用 Webpack 才可使用 Babel 編譯器，
// 故程式碼先必須放在 index.html 中
// ==========================
// 14-React 前端開發：程式碼分工 Code Responsibility
// 應用程式
// 程式碼分工：每段程式都有自己的責任
    // 使用者介面 User Interface
    // 狀態管理 Application State
    // 資料管理 Data Management
    // 膠合程式：串接上述三方面的程式
// Example: 繪圖編輯軟體
// 檔案讀取、編輯影像、儲存檔案
// =======
// in index(old).html: (因 HTML 特性難以多行註解，故註解須寫在 tutorial.js 中)
// 在 <head> 中：
// =======
// in index.js:
// 因為 src="index.js" 需在 Node.js 的環境中使用 Webpack 才可使用 Babel 編譯器，
// 故程式碼先必須放在 index.html 中
// ==========================
// 15-React 前端開發：選項開關元件實務範例
// 使用者介面：按鈕 on /off 圖示
// 應用程式狀態：{ on: true 或 false}
// 資料管理：目前沒有
// =======
// in index(old).html: (因 HTML 特性難以多行註解，故註解須寫在 tutorial.js 中)
// 在 <head> 中：
// 在 <style type="text/css"> 中：
        .switch{
            width: 60px; height: 30px; background-color: #eeeeee; border-radius: 15px;
        }
        .switch>.btn{
            width: 30px; height: 30px; background-color: #444444; border-radius: 15px;
        }
        .switch-on{
            background-color: #ddffdd;
        }
        .switch-on>.btn{
            /* margin-left 會讓按鈕左邊空出 30px ，所以會往右邊跑 */
            background-color: #448844; margin-left: 30px;
        }
// 在 <script type="text/babel"> 中：
        class Switch extends React.Component {
            constructor(props) {
                super(props);
                this.state = { on: false };
            }
            render() {
                // 後面的 class 會覆蓋前面的 class 中相同的屬性，其他屬性則維持原樣
                let className = "switch";
                if (this.state.on) {
                    className += " switch-on";
                }

                // { className } 動態套用 className
                return <div onClick = { this.update.bind(this) } className={ className }>
                        <div className="btn"></div>
                    </div>

            }
            update() {
                // 運用 ! 表示反運算
                this.setState((currentState) => ({ on: !currentState.on}))
            }
        }
        window.addEventListener('load', () => {
            // React 厲害之處：可利用 id 創造多個相同的按鈕
            ReactDOM.render( <Switch/>, document.getElementById('switch-0'));
            ReactDOM.render( <Switch/>, document.getElementById('switch-1'));
        });
    
// 在 <body> 中：
    <div id="switch-0"></div>
    <hr/>
    <div id="switch-1"></div>
// =======
// in index.js:
// 因為 src="index.js" 需在 Node.js 的環境中使用 Webpack 才可使用 Babel 編譯器，
// 故程式碼先必須放在 index.html 中
// ==========================
// 16-React 前端開發：井字遊戲實務範例
// 使用者介面：九宮格 / O / X / 連成一直線
// 應用程式狀態：
{
    circle: 遊戲回合數,
    marks; 每一個框框的標記,
    winner: 是否已經分出勝負
}
// 資料管理：目前沒有
// =======
// in index(old).html: (因 HTML 特性難以多行註解，故註解須寫在 tutorial.js 中)
// 在 <head> 中：
// 在 <style type="text/css"> 中：
        .board{
            width: 300px; height: 300px; margin: 50px auto;
            border: 5px solid #000000; border-radius: 10px;
            position: relative;
        }
        .board>.cell{
            box-sizing: border-box;
            width: 100px; height: 100px; line-height: 100px; font-size: 50px;
            text-align: center; border: 1px solid #000000; cursor: pointer;
            display: inline-block; vertical-align: middle;
        }
        .board>.line{
            position: absolute; top: 0px; left: 0px;
            width: 300px; height: 300px;
        }
// 在 <script type="text/babel"> 中：
    // 建立贏家的線條呈現
    class Line extends React.Component {
        render() {
            let startX = this.props.startIndex % 3;
            let startY = Math.floor(this.props.startIndex / 3);
            let endX = this.props.endIndex % 3;
            let endY = Math.floor(this.props.endIndex / 3);
            return <svg className="line">
                <line x1 = { startX * 100 + 50 } y1 = { startY * 100 + 50 }
                        x2 = { endX * 100 + 50 } y2 = { endY * 100 + 50 } 
                        stroke = "red" stroke-width = "5"
                />
                </svg>
        }
    }
    // 建立框框組件
    class Cell extends React.Component {
        render() {
            let text = "";
            if (this.props.mark === 0) {
                text = "O";
            }
            if (this.props.mark === 1) {
                text = "X";
            }
            return <div className="cell" onClick = { this.click.bind(this) }>{ text }</div>;
        }
        click() {
            this.props.update(this.props.index);
        }
    }
    // 建立遊戲盤組件
    class Board extends React.Component {
        constructor(props) {
            super(props);
            /*
                框框在 marks 中的編號 (index)
                0 1 2
                3 4 5
                6 7 8

            */
            // 應用程式狀態
            this.state = {
                circle: 0,
                marks: [-1, -1, -1, -1, -1, -1, -1, -1, -1], // 框框標記： -1 無, 0: 圈, 1: 叉
                winner: null // 贏家的資訊： null 代表沒有
            };
        }
        render() {
            let cells = [];
            for (let i = 0; i < this.state.marks.length; i++) {
                cells.push(<Cell index = {i} mark = { this.state.marks[i] }
                    update = { this.updateMark.bind(this) } />);
            }
            if (this.state.winner !== null) {
                cells.push(<Line startIndex = {this.state.winner.startIndex }
                    endIndex = {this.state.winner.endIndex} />);
            }
            return <div className="board">{ cells }</div>;
        }
        updateMark(index) {
            // alert('Clicked:' + index);
            let currentMark = this.state.marks[index];
            /*
                a. 目前的標記必須是 -1，代表框框空白
                b. 目前沒有贏家
            */
            if (currentMark === -1 && this.state.winner === null) { 
                this.setState((preState) => {
                    let mark = preState.circle % 2; // 根據回合數，決定要畫圈或叉
                    preState.marks[index] = mark; // 把圈或叉的標記，記錄到 marks 裡面
                    let winner = this.checkWinner(preState.marks); // 偵測贏家
                    return {
                        circle: preState.circle + 1,
                        marks: preState.marks,
                        winner: winner
                    }
                })
            }

        }
        checkWinner(marks) {
            /*
                若有贏家，回傳
                { side: 贏家是圈或叉，startIndex：線條起點框框編號，endIndex：線條終點框框編號 }
            */
            /*
                框框在 marks 中的編號 (index)
                0 1 2
                3 4 5
                6 7 8

            */
            // 偵測水平方向的三條線是否有相同的標記
            let index;
            for (let y = 0; y < 3; y++) {
                if (marks[y * 3] !== -1 && marks[y * 3] === marks[y * 3 + 1] 
                    && marks[y * 3 + 1] === marks[y * 3 + 2]) {
                        return { side: marks[y * 3], startIndex: y * 3, endIndex: y * 3 + 2};
                }
            }
            // 偵測垂直方向的三條線是否有相同的標記
            for (let x = 0; x < 3; x++) {
                if (marks[x] !== -1 && marks[x] === marks[3 + x] 
                    && marks[3 + x] === marks[2 * 3 + x]) {
                        return { side: marks[x], startIndex: x, endIndex: 2 * 3 + x };
                }
            }
            // 偵測斜線方向的兩條線是否有相同的標記
            if (marks[0] !== -1 && marks[0] === marks[4] && marks[4] === marks[8]) {
                return { side: marks[0], startIndex: 0, endIndex: 8 };
            }
            else if (marks[2] !== -1 && marks[2] === marks[4] && marks[4] === marks[6]) {
                return { side: marks[2], startIndex: 2, endIndex: 6 };
            }
            // 目前還沒有贏家
            return null;
        }
    }

    window.addEventListener('load', () => {
        ReactDOM.render(<Board/>, document.body);
    });
// =======
// in index.js:
// 因為 src="index.js" 需在 Node.js 的環境中使用 Webpack 才可使用 Babel 編譯器，
// 故程式碼先必須放在 index.html 中
// ==========================
// 17-React 前端開發：Redux 簡介與安裝
// =======
// in index(old).html: (因 HTML 特性難以多行註解，故註解須寫在 tutorial.js 中)
// 在 <head> 中：
// =======
// in index.js:
// 因為 src="index.js" 需在 Node.js 的環境中使用 Webpack 才可使用 Babel 編譯器，
// 故程式碼先必須放在 index.html 中
// ==========================
// 18-
// =======
// in index(old).html: (因 HTML 特性難以多行註解，故註解須寫在 tutorial.js 中)
// 在 <head> 中：
// =======
// in index.js:
// 因為 src="index.js" 需在 Node.js 的環境中使用 Webpack 才可使用 Babel 編譯器，
// 故程式碼先必須放在 index.html 中
// ==========================
// 19-
// =======
// in index(old).html: (因 HTML 特性難以多行註解，故註解須寫在 tutorial.js 中)
// 在 <head> 中：
// =======
// in index.js:
// 因為 src="index.js" 需在 Node.js 的環境中使用 Webpack 才可使用 Babel 編譯器，
// 故程式碼先必須放在 index.html 中
// ==========================
// 20-
// =======
// in index(old).html: (因 HTML 特性難以多行註解，故註解須寫在 tutorial.js 中)
// 在 <head> 中：
// =======
// in index.js:
// 因為 src="index.js" 需在 Node.js 的環境中使用 Webpack 才可使用 Babel 編譯器，
// 故程式碼先必須放在 index.html 中
// ==========================
// 21-
// =======
// in index(old).html: (因 HTML 特性難以多行註解，故註解須寫在 tutorial.js 中)
// 在 <head> 中：
// =======
// in index.js:
// 因為 src="index.js" 需在 Node.js 的環境中使用 Webpack 才可使用 Babel 編譯器，
// 故程式碼先必須放在 index.html 中

