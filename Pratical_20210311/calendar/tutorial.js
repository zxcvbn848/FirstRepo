// JavaScript 實務：利用 Date 物件完成萬年曆 Perpetual Calendar - 彭彭直播 at 2020/05/01
// https://www.youtube.com/watch?v=Q2x84RdNVUY

// 今日議程
    // Date 物件簡介
    // 實作萬年曆，逐月顯示
    // 封裝程式碼實務
    // 隨意閒聊討論

// Date 物件的建構式
當前時間：new Date()
指定時間：new Date(year, month, day, hours, minutes, second, milliseconds)
使用 Unix Timestamp 指定時間：new Date(milliseconds)

// Date 物件的方法
取得星期幾：getDay()
取得日期：getDate()
取得月份：getMonth()
取得年分：getFullYear()
設定日期：setDate(date)
設定月份：setMonth(month)

// 萬年曆的思考方式
// 資料：
    // 目前顯示的年月份
// 畫面產生流程：
    // 以目前的月份為基準，產生當月第一天的 Date 物件
    // 利用迴圈將整個月份的日期都產生出來
    // 生成對應的畫面與細節

// 封裝程式碼的基本條件和心法
// 基本條件：
    // 熟悉程式語言的特性
// 心法：
    // 從預期的引用方式，回推可能的封裝方法
// ======
// in calendar(unpacked).html:
// in <style text="text/css">:
.year-month{
    width: 700px;
    font-size: 40px; text-align: center;
}
.list{
    display: flex; flex-wrap: wrap;
    width: 700px; border: 5px solid blue;
}
.list>.date{
    width: 98px; height: 50px;
    text-align: center; line-height: 50px;
    border: 1px dashed black;
}
.list>.fadeout{
    opacity: 0.3;
}
// in <body>:
<h3 class="year-month" id="year-month"></h3>
<div class="list" id="list"></div>
<div>
    <button onclick="preMonth();">上個月</button>
    <button onclick="nextMonth();">下個月</button>
</div>
// in <script>, in <body>:
        // 資料
        let state = null;
        // 初始化萬年曆
        function init() {
            state = { current: new Date() };
            render();
        }
        // 上或下個月
        function preMonth() {
            state.current.setMonth(state.current.getMonth() - 1);
            render();
        }
        function nextMonth() {
            state.current.setMonth(state.current.getMonth() + 1);
            render();
        }
        // 根據資料產生畫面
        function render() {
        // 取得月份標題
            let head = document.querySelector('#year-month');
        // 因為 getMonth 1 ~ 12 月的範圍是 0 ~ 11，故在顯示時需 + 1
            head.textContent = state.current.getFullYear() + '/' + (state.current.getMonth() + 1);
        // 取得該月份的全部日期
        // document.querySelector：取得第一個符合選擇器(selector) 的 tag，此處為 id = "list"
            let list = document.querySelector('#list');
            list.innerHTML = ""; // 先清空畫面
        // 取得該月份第一天
            let firstDate = new Date(state.current.getFullYear(), state.current.getMonth(), 1);
        // 取得該天是星期幾，0 ~ 6 表示星期日 ~ 六
            // console.log(date.getDay());
        // 往前算到星期日
            let date = new Date(firstDate.getFullYear(), firstDate.getMonth(), 1);
            date.setDate(date.getDate() - date.getDay());
        // 畫出上個月的後幾天
            while (date < firstDate) { // JS 可以直接比較 Date 物件
                renderDate(date, list);
                date.setDate(date.getDate() + 1);
            }
        // 畫出這個月的日期，每次畫一天，畫到該月份最後一天
            while (date.getMonth() === state.current.getMonth()) {
            // 畫出一天的格子
                renderDate(date, list);
            // 日期 + 1
                date.setDate(date.getDate() + 1);
            }
        // 畫出下個月的前幾天
            while (date.getDay() > 0) {
                renderDate(date, list);
                date.setDate(date.getDate() + 1);
            }
        }
        function renderDate(date, list) {
            let cell = document.createElement('div');
        // 用三元表示式判定上個月或下個月的日期，是的話則置換 CSS
            cell.className = 'date' + (date.getMonth() === state.current.getMonth() ? '' : ' fadeout');
            cell.textContent = date.getDate();
            list.appendChild(cell);
        }
        // 處理流程
        init();
// ======
// in calendar.html:
// in <style text="text/css">:
body{
    font-family: Arial, Helvetica, sans-serif;
    color: purple; background-color: ivory;
}
.year-month{
    width: 300px; height: 70px;
    border: 1px solid blue; background-color: ghostwhite;
    font-size: 40px; text-align: center; line-height: 70px;
    margin-left: auto; margin-right: auto;
}
.list{
    display: flex; flex-wrap: wrap;
    width: 700px; border: 5px solid blue;
    background-color: ghostwhite;
    margin-left: auto; margin-right: auto;
}
.list>.date{
    font-size: 25px;
    width: 98px; height: 50px;
    text-align: center; line-height: 50px;
    border: 1px dashed green;
}
.list>.fadeout{
    opacity: 0.3;
}
#button{
    display: flex; justify-content: space-between;
    width: 700px; 
    margin-left: auto; margin-right: auto;
}
button{
    background-color: yellow;
    font-size: 20px; font-weight: bold;
    width: 100px; height: 50px;
    margin-top: 20px; margin-bottom: 20px;
}
// in <body>:
<div id="calendar-1"></div>
<div id="button">
    <!-- 呼叫：物件名稱.物件方法() -->
    <button onclick="cal1.preMonth();">上個月</button>
    <button onclick="cal1.nextMonth();">下個月</button>
</div>
<hr/>
<div id="calendar-2"></div>
<div id="button">
    <!-- 呼叫：物件名稱.物件方法() -->
    <button onclick="cal2.preMonth();">上個月</button>
    <button onclick="cal2.nextMonth();">下個月</button>
</div>
// in <script>, in <body>:
class Calendar {
    constructor(container) {
        this.container = container;
        this.state = {
            current: new Date()
        };
        this.render();
    }
    render() {
        let head = document.createElement('h3');
        head.className = 'year-month';
        head.textContent = this.state.current.getFullYear() + ' / ' + (this.state.current.getMonth() + 1);

        let list = document.createElement('div');
        list.className = 'list';
        list.innerHTML = ""; // 先清空畫面

        let firstDate = new Date(this.state.current.getFullYear(), this.state.current.getMonth(), 1);
        let date = new Date(firstDate.getFullYear(), firstDate.getMonth(), 1);
        date.setDate(date.getDate() - date.getDay());

        while (date < firstDate) { // JS 可以直接比較 Date 物件
            this.renderDate(date, list);
            date.setDate(date.getDate() + 1);
        }

        while (date.getMonth() === this.state.current.getMonth()) {
            this.renderDate(date, list);
            date.setDate(date.getDate() + 1);
        }

        while (date.getDay() > 0) {
            this.renderDate(date, list);
            date.setDate(date.getDate() + 1);
        }
        // 所有的東西都放進 container 裡面
        this.container.innerHTML = "";
        this.container.appendChild(head);
        this.container.appendChild(list);
    }            
    renderDate(date, list) {
        let cell = document.createElement('div');
        cell.className = 'date' + (date.getMonth() === this.state.current.getMonth() ? '' : ' fadeout');
        cell.textContent = date.getDate();
        list.appendChild(cell);
    }
    preMonth() {
        this.state.current.setMonth(this.state.current.getMonth() - 1);
        this.render();
    }
    nextMonth() {
        this.state.current.setMonth(this.state.current.getMonth() + 1);
        this.render();
    }
}
let cal1 = new Calendar(document.querySelector('#calendar-1'));
let cal2 = new Calendar(document.querySelector('#calendar-2'));
// ======
// in calendar.js: